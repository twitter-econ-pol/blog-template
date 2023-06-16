import type { Site, SocialObjects } from "./types";
import urlJoin from 'url-join';
import blogInfo from '../blog-user-info.json';

export const SITE_INFO = {
  site: blogInfo.baseurl,
  base: blogInfo.base,
  website: urlJoin(blogInfo.baseurl, blogInfo.base),
  root: urlJoin('/', blogInfo.base),
  logo: urlJoin('/', blogInfo.base, )
}

export function atRoot(path: string): string {
  return urlJoin(SITE_INFO.root, path);
}


export const SITE: Site = {
  website: SITE_INFO.website,
  author: blogInfo.author,
  desc: blogInfo.desc,
  title: blogInfo.title,
  ogImage: urlJoin(SITE_INFO.root, blogInfo.ogImage),
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const MAIN_INFO = blogInfo.main;

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 112,
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
