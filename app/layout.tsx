import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chris Downs — Product Designer",
  description:
    "Product designer who builds. I design and ship digital products end-to-end — from concept to code.",
  openGraph: {
    title: "Chris Downs — Product Designer",
    description:
      "Product designer who builds. I design and ship digital products end-to-end — from concept to code.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-[#F2F2F2]`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
