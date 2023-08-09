import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";

export const metadata = {
  title: "News Hhomepage",
  description: "Front End Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen px-5 py-3 md:px-24 md:py-12`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
