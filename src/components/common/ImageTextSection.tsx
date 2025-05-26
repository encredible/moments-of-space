import Image from 'next/image';
import React from 'react';

type ImageTextSectionProps = {
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  backgroundColor: string;
  title: string;
  quoteText?: string; // 선택적 prop으로 변경
  descriptionParagraphs: string[];
  // 기본 스타일을 유지하기 위한 클래스명 props (필요시 사용)
  titleClassName?: string;
  quoteTextClassName?: string;
  quoteParagraphClassName?: string;
  descriptionParagraphClassName?: string;
  sectionClassName?: string;
  imageContainerClassName?: string;
  textBlockContainerClassName?: string; // 텍스트 블록을 감싸는 div의 클래스
  textContentContainerClassName?: string; // 실제 텍스트 내용(h2, p 등)을 감싸는 div의 클래스
};

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  imageAlt,
  imagePosition,
  backgroundColor,
  title,
  quoteText,
  descriptionParagraphs,
  titleClassName = "text-5xl font-bold text-gray-900 mb-8 font-sans",
  quoteTextClassName = "font-semibold text-amber-600",
  quoteParagraphClassName = "text-2xl text-gray-700 leading-relaxed font-sans",
  descriptionParagraphClassName = "text-lg text-gray-700 leading-relaxed font-sans",
  sectionClassName = "py-0 font-sans",
  imageContainerClassName = "relative min-h-[500px] lg:min-h-full",
  textBlockContainerClassName = "flex items-center justify-center px-12 py-24",
  textContentContainerClassName = "max-w-[500px]",
}) => {

  const ImageComponent = () => (
    <div className={imageContainerClassName}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </div>
  );

  const TextComponent = () => (
    <div className={textBlockContainerClassName}>
      <div className={textContentContainerClassName}>
        <h2 className={titleClassName}>
          {title}
        </h2>
        <div className="space-y-8">
          {quoteText && ( // quoteText가 있을 경우에만 렌더링
            <p className={quoteParagraphClassName}>
              <span className={quoteTextClassName}>{quoteText}</span>
            </p>
          )}
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className={descriptionParagraphClassName}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className={`${sectionClassName} ${backgroundColor}`}>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {imagePosition === 'left' ? (
            <>
              <ImageComponent />
              <TextComponent />
            </>
          ) : ( // imagePosition === 'right'
            <>
              <TextComponent />
              <ImageComponent />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection; 