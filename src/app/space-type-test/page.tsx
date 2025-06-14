"use client";
import React, { useState } from 'react';
import questions, { QuestionOption } from './questions'; // questions.ts에서 데이터 및 타입 가져오기
import { useRouter } from 'next/navigation';
import PageLayout from "@/app/components/PageLayout";

// MBTI 각 유형별 점수를 저장할 인터페이스
interface Scores {
  E: number; I: number;
  N: number; S: number;
  T: number; F: number;
  P: number; J: number;
}

export default function SpaceTypeTestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // 각 MBTI 유형별 점수를 저장하는 상태
  const [scores, setScores] = useState<Scores>({
    E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, P: 0, J: 0,
  });

  // 답변 처리 함수
  const handleAnswer = (selectedValue: 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'P' | 'J') => {
    // 선택된 유형의 점수를 1 증가
    const newScores = {
      ...scores,
      [selectedValue]: scores[selectedValue as keyof Scores] + 1,
    };
    setScores(newScores); // 점수 상태 업데이트

    // 다음 질문으로 이동하거나 결과 페이지로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 모든 질문에 답변 완료, 결과 계산 및 페이지 이동
      const resultId = calculateResult(newScores); // 최종 점수로 결과 계산
      router.push(`/space-type-test/results/${resultId}`);
    }
  };

  // 최종 MBTI 결과 유형 계산 함수
  const calculateResult = (finalScores: Scores): string => {
    let result = '';
    result += finalScores.E >= finalScores.I ? 'E' : 'I'; // 동점 시 E
    result += finalScores.N >= finalScores.S ? 'N' : 'S'; // 동점 시 N
    result += finalScores.T >= finalScores.F ? 'T' : 'F'; // 동점 시 T
    result += finalScores.P >= finalScores.J ? 'P' : 'J'; // 동점 시 P
    return result;
  };

  const currentQuestion = questions[currentQuestionIndex];
  // 진행률 계산 (0% ~ 100%)
  const progressPercentage = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  return (
    <PageLayout>
      <div className="w-full max-w-2xl p-6 md:p-10 my-8 shadow-lg bg-card-bg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          나에게 맞는 공간 찾기 테스트
        </h1>
        
        {/* 진행바 및 문항 수 표시 */}
        <div className="mb-8"> {/* 전체 섹션의 하단 마진 조정 */}
          {/* 문항 수 표시를 진행바 위로 옮기고, 중앙 정렬 및 스타일 변경 */}
          <div className="text-center text-base font-semibold text-gray-700 mb-2">
            <span>문항 {currentQuestionIndex + 1} / {questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner"> {/* 진행바 컨테이너의 상하 마진 제거 */}
            <div 
              className="bg-neutral-800 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }} // 진행률 퍼센티지는 바 너비 계산에 계속 사용
            ></div>
          </div>
        </div>

        {currentQuestion ? (
          <div className="animate-fadeIn">
            <h2 className="text-xl md:text-2xl mb-8 font-semibold text-gray-800 text-center leading-relaxed">
              {currentQuestion.text}
            </h2>
            <div className="space-y-5">
              {currentQuestion.options.map((option: QuestionOption) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-5 border border-gray-300 hover:border-orange-900 hover:bg-orange-400
                             transition-all duration-200 ease-in-out group">
                  <span className="text-lg font-medium text-gray-700 group-hover:text-orange-900">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl py-10">테스트를 불러오는 중입니다...</p>
        )}
      </div>
    </PageLayout>
  );
}
