import type { Metadata } from "next";
import { Caveat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cafe Humehr",
  description: "Chill in this cafe as long as you want.",
  // Add your developer signature
  other: {
    developer: "Ashkan Sadeghi",
    contact: "epic.2077.uni@gmail.com",
    portfolio: "https://github.com/Epic2077",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%c👨‍💻 Developed by Ashkan Sadeghi', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
              console.log('%c🚀 Need a developer? Contact: epic.2077.uni@gmail.com', 'color: #2196F3; font-size: 14px;');
              console.log('%c🌐 Portfolio: https://github.com/Epic2077', 'color: #FF9800; font-size: 14px;');
              `,
          }}
        />
      </head>

      <body className={`${caveat.variable} ${source.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
