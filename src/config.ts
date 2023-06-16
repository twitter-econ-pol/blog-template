import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://twitter-econ-pol.github.io/blog-template",
  author: "Econ/Politics Twitter",
  desc: "A minimal, responsive and SEO-friendly blog theme for anyone",
  title: "Twitter Econ/Pol Blog Template",
  ogImage: "Twitter-Econ-Pol-Banner.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const MAIN_INFO = {
  title: "A minimalistic modern blog for anyone.",
  description: `This template is intended to be reused for anyone wishing to set up their own small blog for free.\
  The goal is that anyone able to write simple plain text files should get their own blog with little help.
  `,
  signature: {
    start: "This template and website",
    url: "https://twitter.com/arno_shae",
    urltext: "was made with 💜 by @arno_shae",
    end: "hope you like it !"
  }
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 108,
  height: 23,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:twitter.econ.pol@proton.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/arno_shae",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/twitter-econ-pol",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
