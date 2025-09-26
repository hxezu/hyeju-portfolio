import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "FE 현혜주",
  description: "FRONTEND DEVELOPER HYEJU HYUN",
  keywords: [
    "Frontend",
    "React",
    "Next.js",
    "포트폴리오",
    "Frontend Developer",
    "프론트엔드",
  ],
  authors: [{ name: "Hyeju Hyun", url: "https://www.hxezu.com" }],
  creator: "Hyeju Hyun",
  publisher: "Hyeju Hyun",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FRONTEND DEVELOPER HYEJU HYUN",
    description: "프론트엔드 개발자 현혜주 포트폴리오",
    url: "https://www.hxezu.com/",
    siteName: "FRONTEND DEVELOPER HYEJU HYUN",
    images: [
      {
        url: "https://www.hxezu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "프론트엔드 개발자 현혜주 포트폴리오",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
