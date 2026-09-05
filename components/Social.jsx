import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    path: "https://github.com/justBotir",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    path: "https://linkedin.com/in/BotirQakhramoniy",
  },
  {
    icon: <FaTelegram />,
    label: "Telegram",
    path: "https://t.me/Botir_Qakhramoniy",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => {
        return (
          <Link
            key={item.label}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
