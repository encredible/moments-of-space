'use client';
import MainContent from './MainContent';

interface FigmaViewProps {
  // 필요한 경우 여기에 props를 추가하세요.
}

const FigmaView: React.FC<FigmaViewProps> = () => {
  return (
    <div className="max-w-screen-xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
      <MainContent />
    </div>
  );
};

export default FigmaView; 