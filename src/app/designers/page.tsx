import React from 'react';
import Image from 'next/image';
import designersContent from './content.json' assert { type: 'json' };
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';

type Designer = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

type DesignersContent = {
  title: string;
  description: string;
  designers: Designer[];
};

const content: DesignersContent = designersContent;

const DesignersPage = () => {
  return (
    <PageLayout>
      <section className="w-full max-w-3xl mx-auto"> {/* 최대 너비를 약간 줄여 세로 리스트에 적합하게 조정, mx-auto로 중앙 정렬 */}
        <PageHeader 
          title={content.title}
          description={content.description}
        />
        <div className="flex flex-col gap-8">
          {content.designers.map((designer: Designer, idx: number) => (
            <article key={designer.name + idx} className="flex flex-col items-center text-center">
              <Image src={designer.image} alt={designer.name} width={128} height={128} className="w-32 h-32 object-cover mb-4 rounded-full" />
              <h3 className="font-korean text-xl text-neutral-900 mb-1">{designer.name}</h3>
              <p className="font-korean text-sm text-gray-600 mb-1">{designer.role}</p>
              <p className="font-korean text-sm text-gray-600">{designer.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default DesignersPage;