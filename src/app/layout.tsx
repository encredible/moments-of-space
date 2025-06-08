import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MarqueeText from "@/app/components/MarqueeText";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-korean antialiased flex flex-col min-h-screen">
        <MarqueeText text="집꾸미기 어디서부터 시작해야 할지 막막하신가요? 어떤 스타일로 공간을 채워야 할지, 어떤 가구를 어디서 사야 할지, 내가 고른 가구들이 다함께 어울릴지 수많은 선택과 결정들에 지치시지 않았나요? 인테리어 공사 없이도 가구와 소품의 섬세한 선택과 배치만으로 공간의 분위기는 충분히 바뀔 수 있습니다." className="sticky top-0 z-50" />
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
