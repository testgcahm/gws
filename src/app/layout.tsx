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

  icons: {
    icon: "/logo.ico", // Favicon
  },

  openGraph: {
    title: "Gujranwala Medical College Welfare Society",
    description:
      "Join us in our mission to fight poverty and provide free medical aid. Your donations can make a difference!",
    url: "https://gmc-gws.vercel.app/", // Replace with actual website URL
    siteName: "GMC Welfare Society",
    images: [
      {
        url: "https://gmc-gws.vercel.app/og.png", // Open Graph image
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
    images: ["https://gmc-gws.vercel.app/og.png"], // Twitter uses Open Graph image
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
