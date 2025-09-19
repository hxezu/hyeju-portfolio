import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "FE 현혜주",
  description: "프론트엔드 개발자 현혜주 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FE Devloper Hyeju Hyun's Portfolio",
    description: "프론트엔드 개발자 현혜주 포트폴리오",
    url: "https://www.hxezu.com/",
    siteName: "FE 현혜주 포트폴리오",
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
