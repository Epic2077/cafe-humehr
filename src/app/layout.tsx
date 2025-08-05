import type { Metadata } from "next";
import { Caveat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafe Humehr",
  description: "Chill in this cafe as long as you want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${source.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
