import type { Metadata } from "next";
import { Outfit, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

/* ─── Google Fonts ─────────────────────────────────────── */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

/* ─── Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Patompong | Full Stack Developer Portfolio",
    template: "%s | Patompong Portfolio",
  },
  description:
    "Personal portfolio of Patompong — Front-end, Full Stack & UX/UI Developer passionate about building beautiful, high-performance web applications.",
  keywords: [
    "portfolio",
    "developer",
    "frontend",
    "fullstack",
    "nextjs",
    "react",
    "web developer",
  ],
  authors: [{ name: "Patompong" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Patompong Portfolio",
    title: "Patompong | Full Stack Developer Portfolio",
    description: "Personal portfolio showcasing web development skills & projects.",
  },
};

/* ─── Root Layout ──────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${inter.variable} ${firaCode.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
