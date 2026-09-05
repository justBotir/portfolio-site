"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+998 99 131 88 51",
    href: "tel:+998991318851",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "raimboyevbotir@gmail.com",
    href: "mailto:raimboyevbotir@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Khorezm, Uzbekistan",
    href: null,
  },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Backend Development",
  "SEO",
];

const emptyForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "", // honeypot
};

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus({
          state: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setForm(emptyForm);
      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent.",
      });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  const isSending = status.state === "sending";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h1 className="text-4xl text-accent">Let&apos;s work together</h1>
              <p className="text-white/60">
                I am open to new opportunities and collaborations. If you have a
                project in mind or need a reliable developer, feel free to reach
                out.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  autoComplete="given-name"
                  aria-label="Firstname"
                  placeholder="Firstname"
                  required
                  value={form.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  autoComplete="family-name"
                  aria-label="Lastname"
                  placeholder="Lastname"
                  value={form.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  aria-label="Phone number"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              {/* honeypot — hidden from real users */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              {/* select */}
              <Select
                value={form.service}
                onValueChange={(value) =>
                  setForm((previous) => ({ ...previous, service: value }))
                }
              >
                <SelectTrigger className="w-full" aria-label="Select a service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                aria-label="Message"
                placeholder="Type your message here."
                required
                value={form.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 disabled:opacity-60"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send message"}
              </Button>
              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={
                    status.state === "success" ? "text-accent" : "text-red-400"
                  }
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => {
                return (
                  <li key={item.title} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-xl hover:text-accent transition-all"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <p className="text-xl">{item.description}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
