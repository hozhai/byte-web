import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NavbarDemo } from "@/components/custom/navbar";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}
      >
        <ThemeProvider>
          <NavbarDemo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
