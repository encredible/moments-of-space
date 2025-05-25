import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moments of Space - 공간 디자이너 포트폴리오",
  description: "공간에 생명을 불어넣는 디자이너. 주거부터 상업공간까지, 당신만의 특별한 공간을 만들어드립니다.",
  keywords: "공간 디자인, 인테리어 디자인, 팝업 스토어 디자인, 상업 공간 디자인, 주거 공간 인테리어",
  authors: [{ name: "Moments of Space" }],
  creator: "Moments of Space",
  openGraph: {
    title: "Moments of Space - 공간 디자이너 포트폴리오",
    description: "공간에 생명을 불어넣는 디자이너. 주거부터 상업공간까지, 당신만의 특별한 공간을 만들어드립니다.",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-body antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
