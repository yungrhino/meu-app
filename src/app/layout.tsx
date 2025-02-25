import Link from 'next/link';
import "./globals.css";

import { Header } from '../components/header'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aprendizado em NextJS',
  description: 'Do Iniciante ao Domínio de NextJS!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        
        {children}
      </body>
    </html>
  );
}
