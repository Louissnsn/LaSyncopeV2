import "./globals.css";
import Header from "@/components/Header";
import { combine, geistMonoVF } from "../public/utils/customFonts";
import { Inter } from "next/font/google";

export const metadata = {
  title: "La Syncope",
  description: "La Syncope - Collectif de théâtre contemporain",
  keywords: ["théâtre", "collectif", "art contemporain", "spectacle vivant"],
  authors: [{ name: "La Syncope" }],
  creator: "La Syncope",
  publisher: "La Syncope",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lasyncope.fr"),
  openGraph: {
    title: "La Syncope",
    description: "La Syncope - Collectif de théâtre contemporain",
    url: "https://lasyncope.fr",
    siteName: "La Syncope",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Syncope - Collectif de théâtre contemporain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Syncope",
    description: "La Syncope - Collectif de théâtre contemporain",
    images: ["/logo/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
