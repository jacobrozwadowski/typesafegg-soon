import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "typesafe",
  description: "typesafe.gg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="typesafe.gg" />
      <meta property="og:description" content="Embrace Type-Safety!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://typesafe.gg" />
      <meta property="og:image" content="https://i.imgur.com/nZvN0mp.png" />
      <body
        className={`${inter.className} max-w-screen max-h-screen overflow-x-hidden overflow-y-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
