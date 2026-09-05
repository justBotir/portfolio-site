import { NextResponse } from "next/server";

const MAX_LENGTHS = {
  firstname: 60,
  lastname: 60,
  email: 120,
  phone: 40,
  service: 60,
  message: 2000,
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // honeypot: real users never fill a hidden field
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const firstname = clean(body.firstname, MAX_LENGTHS.firstname);
  const lastname = clean(body.lastname, MAX_LENGTHS.lastname);
  const email = clean(body.email, MAX_LENGTHS.email);
  const phone = clean(body.phone, MAX_LENGTHS.phone);
  const service = clean(body.service, MAX_LENGTHS.service);
  const message = clean(body.message, MAX_LENGTHS.message);

  if (!firstname || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const text = [
    "New message from your portfolio",
    "",
    `Name: ${firstname} ${lastname}`.trim(),
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${service}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      }
    );

    if (!response.ok) {
      const details = await response.text();
      console.error("Telegram API error:", response.status, details);
      return NextResponse.json(
        { error: "Could not send the message. Please try again later." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Telegram request failed:", error);
    return NextResponse.json(
      { error: "Could not send the message. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
