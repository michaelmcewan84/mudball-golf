import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://mudballgolf.uk"),

  title: "Mudball Golf | Golf, clearly.",

  description:
    "Mudball Golf is a golf media and lifestyle brand exploring the stories, culture, people and ideas that make the game meaningful.",

  openGraph: {
    title: "Mudball Golf | Golf, clearly.",
    description:
      "Mudball Golf is a golf media and lifestyle brand exploring the stories, culture, people and ideas that make the game meaningful.",
    url: "https://mudballgolf.uk",
    siteName: "Mudball Golf",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mudball Golf | Golf, clearly.",
    description:
      "Mudball Golf is a golf media and lifestyle brand exploring the stories, culture, people and ideas that make the game meaningful.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
        <Footer />
      </body>
    </html>
  );
}