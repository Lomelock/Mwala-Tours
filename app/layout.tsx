import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mwala Tours | Premium Tanzania Safari Experiences",
  description:
    "Experience the wild heart of Africa with Mwala Tours – your trusted Tanzania travel partner. From Serengeti safaris to Kilimanjaro climbs and Zanzibar beach escapes, we craft unforgettable journeys.",
  keywords:
    "Tanzania, Safari, Serengeti, Ngorongoro, Lake Natron, Travel, Adventure, Kilimanjaro",
  authors: [{ name: "Mwala Tours" }],
};

export const viewport: Viewport = {
  themeColor: "#2e8b57",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
