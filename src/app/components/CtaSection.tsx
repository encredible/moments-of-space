'use client';
import { useRouter } from 'next/navigation';
import homeContent from '../home/content.json';

interface CtaSectionProps {
  className?: string;
  customButtonLink?: string;
}

export default function CtaSection({ className = '', customButtonLink = '/contact' }: CtaSectionProps) {
  const router = useRouter();
  const { title, button } = homeContent.cta;
  
  return (
    <section className={`pt-8 px-4 pb-10 text-center my-4 ${className}`}>
      <h2 className="text-xl md:text-2xl mb-5 md:mb-7 text-neutral-900">
        {title}
      </h2>
      <button
        onClick={() => router.push(customButtonLink)}
        className="font-korean-button text-base text-custom-bg bg-black px-5 h-12 hover:bg-gray-800 transition-colors w-full sm:w-auto max-w-xs"
      >
        {button}
      </button>
    </section>
  );
}
