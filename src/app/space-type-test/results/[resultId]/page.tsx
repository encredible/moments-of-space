"use client";
import React from 'react';
import resultsData, { ResultType } from '../../results'; // 경로 수정
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, ArrowPathIcon, TagIcon, LightBulbIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function TestResultPage() {
  const params = useParams();
  const router = useRouter(); // useRouter는 현재 사용되지 않지만, 향후 확장성을 위해 유지
  const resultId = params.resultId as string;
  const result = resultsData.find((r: ResultType) => r.id.toLowerCase() === resultId?.toLowerCase()); // 타입 명시

  if (!result) {
    return (
      <div className="container mx-auto p-4 md:p-8 text-center min-h-screen flex flex-col justify-center items-center">
        <SparklesIcon className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">결과를 찾을 수 없습니다.</h1>
        <p className="text-gray-600 mb-8">요청하신 MBTI 유형 결과를 찾을 수 없습니다. URL을 확인해주세요.</p>
        <Link href="/space-type-test">
          <a className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out inline-flex items-center">
            <ArrowPathIcon className="w-5 h-5 mr-2" />
            테스트 다시하기
          </a>
        </Link>
      </div>
    );
  }

  const backgroundClass = result.colorTheme.background || 'bg-gray-50';
  const textClass = result.colorTheme.text || 'text-gray-800';
  const accentClass = result.colorTheme.accent || 'bg-gray-500';
  // accentClass가 'bg-gray-500' 형태일 때, 'gray'를 추출하기 위한 로직
  const accentColorName = accentClass.startsWith('bg-') ? accentClass.split('-')[1] : 'gray';
  const borderAccentClass = `border-${accentColorName}-500`;


  return (
    <div className={`min-h-screen ${textClass} transition-colors duration-500`}>
      <div className="container mx-auto p-4 md:p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl overflow-hidden my-8">
          <div className={`p-6 md:p-10 ${accentClass} text-white`}>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">{result.name}</h1>
            <p className="text-xl md:text-2xl text-center opacity-90">{result.title}</p>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-8 flex justify-center">
              <Image
                src={result.imagePath}
                alt={result.name}
                width={200}
                height={200}
                className="rounded-lg shadow-lg object-cover border-4 border-white"
              />
            </div>

            <div className="mb-8">
              <h2 className={`text-2xl font-semibold mb-3 ${textClass}`}>어떤 유형인가요?</h2>
              <p className="text-lg leading-relaxed whitespace-pre-line">{result.description}</p>
            </div>

            <div className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${textClass} flex items-center`}>
                <SparklesIcon className={`w-7 h-7 mr-2 ${accentClass} p-1 rounded-md text-white`} />
                주요 특징
              </h2>
              <ul className="list-none space-y-2">
                {result.characteristics.map((char: string, index: number) => ( // 타입 명시
                  <li key={index} className={`p-3 rounded-md ${backgroundClass} border ${borderAccentClass} shadow-sm`}>
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${textClass} flex items-center`}>
                <TagIcon className={`w-7 h-7 mr-2 ${accentClass} p-1 rounded-md text-white`} />
                키워드
              </h2>
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((keyword: string, index: number) => ( // 타입 명시
                  <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${accentClass} text-white shadow-md`}>
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`text-2xl font-semibold mb-4 ${textClass} flex items-center`}>
                <LightBulbIcon className={`w-7 h-7 mr-2 ${accentClass} p-1 rounded-md text-white`} />
                추천 공간 스타일
              </h2>
              <ul className="list-none space-y-2">
                {result.recommendedSpaces.map((space: string, index: number) => ( // 타입 명시
                  <li key={index} className={`p-3 rounded-md ${backgroundClass} border ${borderAccentClass} shadow-sm`}>
                    {space}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`p-6 md:p-8 border-t ${borderAccentClass} mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 ${backgroundClass}`}>
            <Link href="/space-type-test" legacyBehavior>
              <a className={`w-full sm:w-auto px-8 py-3 ${accentClass} text-white font-semibold rounded-lg hover:opacity-90 transition duration-150 ease-in-out inline-flex items-center justify-center shadow-md hover:shadow-lg`}>
                <ArrowPathIcon className="w-5 h-5 mr-2" />
                테스트 다시하기
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className={`w-full sm:w-auto px-8 py-3 border ${borderAccentClass} ${textClass} font-semibold rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out inline-flex items-center justify-center shadow-md hover:shadow-lg`}>
                <HomeIcon className="w-5 h-5 mr-2" />
                홈으로 가기
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
