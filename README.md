# Botir Qakhramoniy — Portfolio

Personal portfolio of **Botir Qakhramoniy**, a full-stack developer from Khorezm, Uzbekistan.

Live: not deployed yet

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [Framer Motion](https://www.framer.com/motion/) for page and stair transitions
- [Swiper](https://swiperjs.com/) for the project slider
- Telegram Bot API for the contact form

## Pages

| Route       | Content                                       |
| ----------- | --------------------------------------------- |
| `/`         | Intro, socials, CV download, stats            |
| `/services` | Services offered                              |
| `/resume`   | Experience, education, skills, about          |
| `/work`     | Project slider                                |
| `/contact`  | Contact form (sends to Telegram) and contacts |

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

## Environment variables

The contact form posts to `app/api/contact/route.js`, which forwards the message
to Telegram. Two variables are required:

| Variable             | Where to get it                                                                 |
| -------------------- | ------------------------------------------------------------------------------- |
| `TELEGRAM_BOT_TOKEN` | Create a bot with [@BotFather](https://t.me/BotFather)                            |
| `TELEGRAM_CHAT_ID`   | Message your bot, then read `result[0].message.chat.id` from `/getUpdates`         |
| `NEXT_PUBLIC_SITE_URL` | Optional — the public URL, for canonical links, sitemap and OG tags. Vercel fills this in automatically |

Locally they live in `.env.local` (git-ignored). On Vercel add them under
**Project → Settings → Environment Variables**.

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Where to edit the content

- Personal data, experience, education, skills — `app/resume/page.jsx`
- Projects — `app/work/page.jsx`
- Services — `app/services/page.jsx`
- Stats on the home page — `components/Stats.jsx`
- Social links — `components/Social.jsx`
- Navigation — `lib/navLinks.js`
- CV file — `public/cv/Botir_CV.pdf`
