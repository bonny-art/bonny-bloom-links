import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bonny Bloom — Cross Stitch Patterns | Авторські схеми",
  description:
    "Cozy designs & inspiration ✨ Затишні схеми, магія хрестиків та натхнення.",

  openGraph: {
    title: "Bonny Bloom — Cross Stitch Patterns | Авторські схеми",
    description:
      "Cozy designs & inspiration ✨ Затишні схеми, магія хрестиків та натхнення.",

    url: "https://bonny-bloom-links.vercel.app/",
    siteName: "Bonny Bloom Studio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bonny Bloom Studio — Cross Stitch / Вишивка",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
