
// Setup and export site URL
export const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Types
interface SiteConfig {
  title: string;
  siteName: string;
  description: string;
  url: string;
  author: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  mailSupport: string;
};

// Setup and export site config
export const siteConfig: SiteConfig = {
  title: 'UI',
  siteName: 'ui.gabfon.com',
  description: 'This is my ui library',
  author: '@gabrielvfonseca',
  url: baseUrl,
  ogImage: `${baseUrl}/opengraph-image.png`,
  links: {
    twitter: 'https://x.com/gabfon_',
    github: 'https://github.com/gabrielvfonseca',
    linkedin: 'https://www.linkedin.com/in/gabrielvfonseca/',
  },
  mailSupport: 'hey@gabfon.com',
};