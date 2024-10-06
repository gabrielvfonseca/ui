import { Inter, Roboto_Mono, Space_Grotesk } from 'next/font/google';
 
export const sans = Inter ({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});
 
export const mono = Roboto_Mono ({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const space = Space_Grotesk ({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
});