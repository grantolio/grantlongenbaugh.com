import type { Metadata } from 'next';
import { DM_Sans, Archivo, Archivo_Black } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400'],
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'Grant Longenbaugh',
    template: '%s | Grant Longenbaugh',
  },
  description:
    'Storytelling, creative direction, & photography from northern Indiana.',
  openGraph: {
    title: 'Grant Longenbaugh',
    description:
      'Storytelling, creative direction, & photography from northern Indiana.',
    url: 'https://www.grantlongenbaugh.com',
    siteName: 'Grant Longenbaugh',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Grant Longenbaugh',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${dmSans.variable} ${archivo.variable}`}>
      <body>
        <Nav />
        <main className="mt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
