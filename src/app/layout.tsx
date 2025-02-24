import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Memorize',
  description: 'Estudos em inglês',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${roboto.className} body`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
