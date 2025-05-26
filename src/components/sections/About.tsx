import ImageTextSection from '@/components/common/ImageTextSection';

const About = () => {
  return (
    <ImageTextSection
      imageSrc="/images/main-2.avif"
      imageAlt="디자이너 작업 모습"
      imagePosition="left"
      backgroundColor="bg-amber-50"
      title="디자인 철학"
      quoteText='"기능과 미학의 완벽한 조화"'
      descriptionParagraphs={[
        "모든 공간은 고유한 이야기를 가지고 있습니다. 저희는 클라이언트의 라이프스타일을 깊이 이해하고, 그들만의 특별한 공간을 창조합니다. 단순히 아름다운 공간이 아닌, 실용성과 편안함이 조화를 이루는 맞춤형 디자인을 제공합니다.",
        "주거 공간부터 상업 공간, 팝업 스토어까지 다양한 프로젝트를 통해 축적된 경험과 노하우로 고객의 꿈을 현실로 만들어드립니다."
      ]}
    />
  );
};

export default About; 