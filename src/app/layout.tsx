import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MarqueeText from "@/app/components/MarqueeText";
import NavigationBar from "@/app/components/NavigationBar";
import FloatingTalkButton from "@/app/components/FloatingTalkButton";
import footerContent from '@/app/data/footer_content.json';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // footer_content에서 kakao_talk_link 값을 가져옵니다
  const typedFooterContent = footerContent as any;
  
  return (
    <html lang="ko">
      <body className="font-korean antialiased min-h-screen">
        <MarqueeText className="sticky top-0 z-50" />
        <NavigationBar /> {/* Add NavigationBar here */}
        <Header />
          {children}
        <Footer />
        {/* 카카오톡 플로팅 버튼 */}
        <FloatingTalkButton link={typedFooterContent.kakao_talk_link} />
      </body>
    </html>
  );
}
