"use client";
import React, { useRef, useState } from 'react';
import resultsData, { ResultType } from '../../results'; // 경로 수정
import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, ArrowPathIcon, SparklesIcon, ShareIcon, CameraIcon } from '@heroicons/react/24/outline';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

export default function TestResultPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const resultCardRef = useRef<HTMLDivElement>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [shareMessage, setShareMessage] = useState('');
  
  // URL 매개변수에서 사용자 이름과 MBTI 가져오기
  const userName = searchParams.get('name') || '';
  const userMbti = searchParams.get('mbti') || '모름';
  
  const resultId = params.resultId as string;
  const result = resultsData.find((r: ResultType) => r.id.toLowerCase() === resultId?.toLowerCase()); // 타입 명시
  
  // 타입 가드 함수로 result가 undefined가 아닌지 확인
  const isValidResult = (result: ResultType | undefined): result is ResultType => {
    return result !== undefined;
  };
  
  // 상태 메시지 업데이트 헬퍼 함수
  const updateShareMessage = (message: string, duration: number = 2000) => {
    setShareMessage(message);
    setTimeout(() => {
      setIsSharing(false);
      setShareMessage('');
    }, duration);
  };
  
  // html-to-image 설정 객체
  const imageOptions = {
    quality: 0.95,
    pixelRatio: 2, // 해상도를 2배로 증가
    backgroundColor: '#ffffff', // 배경색 투명 처리
    cacheBust: true,
    style: {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box'
    },
  };
  
  // 결과 카드를 이미지로 저장하는 함수
  const saveAsImage = async () => {
    if (!resultCardRef.current || !isValidResult(result)) return;
    
    try {
      setIsSharing(true);
      setShareMessage('이미지 생성 중...');
      const dataUrl = await toPng(resultCardRef.current, imageOptions);
      
      // dataUrl을 Blob으로 변환
      const blobData = await fetch(dataUrl).then(res => res.blob());
      saveAs(blobData, `${userName || '나의'}_공간유형_${result.name}.png`);
      updateShareMessage('이미지가 저장되었습니다!');
    } catch (error) {
      console.error('이미지 생성 중 오류 발생:', error);
      updateShareMessage('이미지 생성에 실패했습니다.');
    }
  };
  
  // 결과 카드를 공유하는 함수 (Web Share API 사용)
  const shareResult = async () => {
    if (!resultCardRef.current || !isValidResult(result)) return;
    
    try {
      setIsSharing(true);
      setShareMessage('공유 준비 중...');
      
      const dataUrl = await toPng(resultCardRef.current, imageOptions);
      const fileName = `${userName || '나의'}_공간유형_${result.name}.png`;

      // dataUrl을 Blob으로 변환
      const blobData = await fetch(dataUrl).then(res => res.blob());
      
      if (navigator.share) {
        const file = new File([blobData], fileName, { type: 'image/png' });
        
        try {
          await navigator.share({
            title: `${userName || '나의'} 공간유형 - ${result.name}`,
            text: '모먼츠 오브 스페이스에서 나의 공간유형 테스트 결과를 확인해보세요!',
            files: [file]
          });
          updateShareMessage('공유되었습니다!');
        } catch (error) {
          console.error('공유 중 오류 발생:', error);
          saveAs(blobData, fileName);
          updateShareMessage('이미지가 저장되었습니다!');
        }
      } else {
        // Web Share API를 지원하지 않는 경우 이미지 다운로드
        saveAs(blobData, fileName);
        updateShareMessage('이미지가 저장되었습니다!');
      }
    } catch (error) {
      console.error('공유 준비 중 오류 발생:', error);
      updateShareMessage('공유 준비 중 오류가 발생했습니다.');
    }
  };

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

  return (
    <div className={`min-h-screen ${mainTextColor}`}>
      <div className="container mx-auto p-4 md:p-8 ">
        {/* 디자인 헨더 */}
        {result && (<div ref={resultCardRef} className="border bg-white border-gray-200 shadow-md overflow-hidden w-90 md:w-160 md:mx-auto">
          {/* 헤더 부분 - LIVING COLLAGE */}
          <div className="p-4 text-black text-center relative">
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
          <div className="p-4">
            <h2 className="text-2xl font-bold text-center bg-background">
              {userName}의 공간은 <span className="block">{result.name}</span>
            </h2>
            <div className="flex justify-center mt-3 flex-wrap gap-2 bg-result-card-bg">
              {
                result.recommendedItems.map((item, index) => (
                  <span key={'recommendedItems-' + index} className="text-sm px-2 py-1"># {item}</span>
                ))
              }
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
                <div className="p-3 rounded flex-1 mr-1">
                  <div className="text-center text-xs py-2 bg-background">
                    👩 나의 MBTI
                  </div>
                  <div className="text-center font-bold bg-result-card-bg">
                    {userMbti !== '모름' ? `안녕나야, ${userMbti}` : `${userName}`}
                  </div>
                </div>
                <div className="p-3 rounded flex-1 ml-1">
                  <div className="text-center text-xs py-2 bg-background">
                    🏠 나의 공간 MBTI
                  </div>
                  <div className="text-center font-bold bg-result-card-bg">
                    {result.name} {userMbti !== '모름' ? userMbti : ''}
                  </div>
                </div>
              </div>
              
              {/* 특징 리스트 */}
              <div className="p-4 bg-result-card-bg">
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
        </div>)}
        {/* 이미지 저장 및 공유 버튼 */}
        <div className="max-w-md mx-auto mt-6 mb-10 flex flex-col items-center">
          {isSharing ? (
            <div className="text-center py-3">
              <p className="text-gray-700">{shareMessage}</p>
            </div>
          ) : (
            <div className="flex space-x-4">
              <button 
                onClick={saveAsImage}
                disabled={!result}
                className={`px-4 py-2 ${result ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white font-medium rounded-lg transition-colors flex items-center`}>
                <CameraIcon className="w-5 h-5 mr-2" />
                이미지로 저장
              </button>
              <button 
                onClick={shareResult}
                disabled={!result}
                className={`px-4 py-2 ${result ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'} text-white font-medium rounded-lg transition-colors flex items-center`}>
                <ShareIcon className="w-5 h-5 mr-2" />
                결과 공유하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
