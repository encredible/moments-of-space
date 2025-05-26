import ImageTextSection from '@/components/common/ImageTextSection';

const AboutTwo = () => {
  return (
    <ImageTextSection
      imageSrc="/images/main-3.avif"
      imageAlt="새로운 소개 섹션 이미지"
      imagePosition="right"
      backgroundColor="bg-white"
      title="새로운 공간 이야기"
      quoteText='"창의성과 실용성의 만남"'
      descriptionParagraphs={[
        "이곳에 새로운 섹션에 대한 설명을 입력합니다. 클라이언트의 요구를 반영하여 독창적이면서도 실용적인 공간을 어떻게 만들어나가는지 소개할 수 있습니다.",
        "프로젝트의 다양성과 혁신적인 접근 방식을 강조하여 고객에게 새로운 영감을 제공하는 내용을 담아보세요."
      ]}
    />
  );
};

export default AboutTwo; 