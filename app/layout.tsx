import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berkeley Student Credit Union — Digital-First, Student-Governed",
  description:
    "The Berkeley Student Credit Union is a digital-first, student-governed credit union designed for UC Berkeley students and alumni. Join the waitlist.",
  openGraph: {
    title: "Berkeley Student Credit Union",
    description:
      "Banking built for Berkeley. By Berkeley. Join the waitlist for a digital-first, student-governed credit union.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased bg-[#0A0F1E] text-[#F1F5F9]">
        {children}
      </body>
    </html>
  );
}
