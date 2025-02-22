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
  // Use metadataBase (metadatabase) to set the base URL for relative URLs
  metadataBase: new URL("https://gmc-gws.vercel.app/"),
  title: {
    default: "Gujranwala Medical College Welfare Society",
    template: "%s | GMC Welfare Society",
  },
  description:
    "Join us in our mission to fight poverty and provide free medical aid. Your donations can make a difference!",
  keywords: ["medical aid", "welfare", "Gujranwala", "donations"],
  icons: {
    icon: "/logo.ico", // Favicon
    shortcut: "/favicon-16x16.png",
  },
  alternates: {
    canonical: "https://gmc-gws.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gmc-gws.vercel.app/",
    title: "Gujranwala Medical College Welfare Society",
    description:
      "Join us in our mission to fight poverty and provide free medical aid. Your donations can make a difference!",
    siteName: "GMC Welfare Society",
    images: [
      {
        // Using a relative URL here so it is combined with metadataBase
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GMC Welfare Society Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gujranwala Medical College Welfare Society",
    description:
      "Join us in our mission to fight poverty and provide free medical aid. Your donations can make a difference!",
    // Relative URLs will be resolved with metadataBase
    images: ["/og.png"],
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
        {/* Essential meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
