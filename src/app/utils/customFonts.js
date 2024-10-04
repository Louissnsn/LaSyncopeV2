import localFont from "next/font/local";

const combine = localFont({
  src: "../assets/fonts/Combine.otf",
  variable: "--font-combine",
});

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMonoVF = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export { combine, geistMonoVF, geistSans };
