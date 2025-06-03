'use client';
import Button from './Button';
import homeContent from '../home/content.json';

interface CtaSectionProps {
  className?: string;
  customButtonLink?: string;
}

export default function CtaSection({ className = '', customButtonLink = '/contact' }: CtaSectionProps) {
  const { title, button } = homeContent.cta;
  
  return (
    <section className={`pt-8 px-4 pb-10 text-center my-4 ${className}`}>
      <h2 className="text-xl md:text-2xl mb-5 md:mb-7 text-neutral-900">
        {title}
      </h2>
      <Button href={customButtonLink}>{button}</Button>
    </section>
  );
}
