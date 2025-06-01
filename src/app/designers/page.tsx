import designersContent from './designersContent.json' assert { type: 'json' };
import Image from 'next/image';

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
    <main className="flex flex-col items-center px-4 sm:px-10 md:px-20 py-10"> {/* 반응형 패딩 조정 */}
      <section className="w-full max-w-3xl"> {/* 최대 너비를 약간 줄여 세로 리스트에 적합하게 조정 */}
        <div className="pt-5 pb-8">
          <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-neutral-900 text-center mb-10">
            {content.title}
          </h2>
          <p className="text-gray-600 mb-10">{content.description}</p>
        </div>
        <div className="flex flex-col gap-8">
          {content.designers.map((designer: Designer, idx: number) => (
            <article key={designer.name + idx} className="flex flex-col items-center text-center">
              <Image src={designer.image} alt={designer.name} width={128} height={128} className="w-32 h-32 object-cover mb-4 rounded-full" />
              <h3 className="font-plus-jakarta-sans font-semibold text-xl text-neutral-900 mb-1">{designer.name}</h3>
              <p className="font-plus-jakarta-sans text-sm text-gray-600 mb-1">{designer.role}</p>
              <p className="font-plus-jakarta-sans text-sm text-gray-600">{designer.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DesignersPage;