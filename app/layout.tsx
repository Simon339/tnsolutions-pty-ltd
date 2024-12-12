import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Providers from "@/components/websites/provider";

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: "Magotlho TN Solutions (PTY) LTD",
  description: "Supply, Installation and Maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="/TN-logo.png" rel="icon" />
      </head>
      <body className={`${inter.className} bg-[#87CEEB]`}>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  );
}
