"use client";
import React from 'react';
import resultsData, { ResultType } from '../../results'; // 경로 수정
import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, ArrowPathIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function TestResultPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  // URL 매개변수에서 사용자 이름과 MBTI 가져오기
  const userName = searchParams.get('name') || '';
  const userMbti = searchParams.get('mbti') || '모름';
  
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

  // 일관된 색상으로 변경
  const mainTextColor = 'text-black';
  const accentColor = 'bg-[#f5f5f0]';

  return (
    <div className={`min-h-screen ${mainTextColor}`}>
      <div className="container mx-auto p-4 md:p-8">
        {/* 디자인 헨더 */}
        <div className="max-w-md mx-auto border border-gray-200 shadow-md overflow-hidden my-8">
          {/* 헤더 부분 - LIVING COLLAGE */}
          <div className={`p-4 ${accentColor} text-black text-center relative`}>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
            </div>
            <h1 className="text-xl font-bold">LIVING COLLAGE</h1>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
            </div>
          </div>
          
          {/* 공간 유형 제목 */}
          <div className="p-4 bg-[#f5f5f0]">
            <h2 className="text-2xl font-bold text-center">
              {userName}의 공간은 <span className="block">{result.name}</span>
            </h2>
            <div className="flex justify-center mt-3 flex-wrap gap-2">
              {
                result.recommendedItems.map((item, index) => (
                  <span key={'recommendedItems-' + index} className="text-sm px-2 py-1"># {item}</span>
                ))
              }
              <span className="text-sm px-2 py-1"># 아늑한공간</span>
            </div>
          </div>
          
          {/* 이미지 소개 */}
          <div className="p-6 flex justify-center border-2 mx-6 my-4">
            <Image
              src={result.imagePath}
              alt={result.name}
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          
          {/* MBTI 결과 영역 */}
          <div className="px-6 pb-6 pt-2 mx-6 mb-4">
            <div className="flex flex-col space-y-8">
              {/* 유저 정보 표시 */}
              <div className="flex justify-around">
                <div className="bg-[#f5f5f0] p-3 rounded flex-1 mr-1">
                  <div className="text-center text-xs mb-1">
                    👩 나의 MBTI
                  </div>
                  <div className="text-center font-bold">
                    {userMbti !== '모름' ? `안녕나야, ${userMbti}` : `${userName}`}
                  </div>
                </div>
                <div className="bg-[#f5f5f0] p-3 rounded flex-1 ml-1">
                  <div className="text-center text-xs mb-1">
                    🏠 나의 공간 MBTI
                  </div>
                  <div className="text-center font-bold">
                    {result.name} {userMbti !== '모름' ? userMbti : ''}
                  </div>
                </div>
              </div>
              
              {/* 특징 리스트 */}
              <div className="space-y-1">
                {result.features && Array.isArray(result.features) ? (
                  result.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-black mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black mr-2"></div>
                    <span>특징 정보가 없습니다.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* 하단 링크 버튼 */}
          <div className="flex justify-between items-center px-6 py-4 bg-[#f5f5f0] border-t border-gray-200">
            <Link href="/" className="text-gray-600 hover:text-black">
              <HomeIcon className="w-5 h-5" />
            </Link>
            <Link href="/space-type-test" className="text-gray-600 hover:text-black">
              <ArrowPathIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
