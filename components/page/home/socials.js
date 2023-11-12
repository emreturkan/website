import React from "react";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { container, items } from "@/utils/animation";
import { Button } from "@/components/ui/button";

const SocialItems = [
  {
    icon: <EnvelopeSimple size={24} />,
    link: "mailto:emreturkan10@gmail.com",
    title: "email",
  },
  {
    icon: <GithubLogo size={24} />,
    link: "https://github.com/emreturkan",
    title: "Github",
  },
  {
    icon: <InstagramLogo size={24} />,
    link: "https://instagram.com/_emreturkan",
    title: "Instagram",
  },
  {
    icon: <TwitterLogo size={24} />,
    link: "https://twitter.com/_emreturkan",
    title: "Twitter",
  },
];

const Socials = () => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex space-x-4 mt-4"
    >
      {SocialItems.map((socialItem) => (
        <motion.li variants={items}>
          <Button
            variant="outline"
            size="icon"
            className="hover:opacity-80  hover:border-none transition-all duration-300 ease-in-out"
            aria-label={socialItem.title}
            title={socialItem.title}
          >
            <Link href={socialItem.link} target="_blank" aria-label="email">
              {socialItem.icon}
            </Link>
          </Button>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Socials;
