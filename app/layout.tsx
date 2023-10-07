import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "typesafe",
  description: "Embrace Type-Safety! Use TypeScript to its fullest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-screen max-h-screen overflow-x-hidden overflow-y-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
