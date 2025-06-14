'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, href }) => {
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 해시 링크(#으로 시작하는 링크)인 경우에만 특별 처리
    if (href.startsWith('/#')) {
      e.preventDefault();
      
      // 현재 경로가 홈이 아닌 경우 홈으로 이동
      if (window.location.pathname !== '/') {
        router.push(href);
        return;
      }
      
      // 홈 페이지에 있을 경우 해당 요소로 스크롤
      const elementId = href.split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <Link 
      href={href} 
      className="text-xl font-extrabold text-neutral-900 hover:text-neutral-700 transition-colors duration-200"
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default NavItem;
