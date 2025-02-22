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
  title: "Gujranwala Medical College Welfare Society",
  description:
    "Join us in our mission to fight poverty and provide free medical aid. Your donations can make a difference!",
  openGraph: {
    title: "Gujranwala Medical College Welfare Society",
    description:
      "Join us in our mission to fight poverty and provide free medical aid. Your donations can make a difference!",
    url: "https://gmc-gws.vercel.app/",
    siteName: "GMC Welfare Society",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GMC Welfare Society Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gujranwala Medical College Welfare Society",
    description:
      "Join us in our mission to fight poverty and provide free medical aid. Your donations can make a difference!",
    images: ["/og.png"],
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
