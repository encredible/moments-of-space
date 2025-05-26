import ImageTextSection from '@/components/common/ImageTextSection';

const AboutThree = () => {
  return (
    <ImageTextSection
      imageSrc="/images/main-4.avif"
      imageAlt="세 번째 소개 섹션 이미지"
      imagePosition="left" // 이미지가 왼쪽에 오도록 설정
      backgroundColor="bg-amber-50"
      title="또 다른 공간 이야기"
      quoteText='"혁신과 경험의 조화"'
      descriptionParagraphs={[
        "세 번째 섹션에 대한 설명을 이곳에 작성합니다. 다양한 프로젝트 경험을 통해 얻은 인사이트와 혁신적인 디자인 솔루션을 소개할 수 있습니다.",
        "고객의 기대를 뛰어넘는 맞춤형 공간 디자인으로 어떻게 만족을 드리는지 설명해보세요."
      ]}
    />
  );
};

export default AboutThree; 