import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Darrel Ardoin | DivergentDarrel",
    template: "%s | DivergentDarrel",
  },
  description:
    "I specialize in people, patterns, and places — and I deliver hard actionable truths about all of them.",
  metadataBase: new URL("https://divergentdarrel.com"),
  openGraph: {
    title: "Darrel Ardoin | DivergentDarrel",
    description:
      "No position to protect. No feelings to manage. Just what's real and what to do next.",
    url: "https://divergentdarrel.com",
    siteName: "DivergentDarrel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darrel Ardoin | DivergentDarrel",
    description:
      "No position to protect. No feelings to manage. Just what's real and what to do next.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#f8f7f4] text-[#0f0f0f] antialiased">
        {children}
      </body>
    </html>
  );
}
