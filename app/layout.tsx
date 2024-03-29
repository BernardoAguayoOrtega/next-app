import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bernardo Aguayo",
  description: "personal project to learn Next.js and TypeScript",
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='winter'>
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
