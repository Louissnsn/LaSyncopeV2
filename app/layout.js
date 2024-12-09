import "./globals.css";
import Header from "@/components/Header";
import { combine, geistMonoVF } from "../public/utils/customFonts";
import { Inter } from "next/font/google";

export const metadata = {
  title: "La Syncope",
  description: "La Syncope - Collectif de théâtre",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
