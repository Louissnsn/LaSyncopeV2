import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/Header";
import { Metadata } from "next";
import { combine, geistMonoVF } from "./utils/customFonts";
import { Inter } from "next/font/google";

export const metadata = {
  title: "La Syncope",
  description: "La Syncope - Collectif de théâtre",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${combine.variable} ${geistMonoVF.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
