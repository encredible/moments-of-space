import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: '주거 공간 인테리어', href: '/services#residential' },
      { name: '상업 공간 디자인', href: '/services#commercial' },
      { name: '팝업 스토어', href: '/services#popup' },
      { name: '공간 스타일링', href: '/services#styling' },
    ],
    projects: [
      { name: '주거 공간', href: '/projects/residential' },
      { name: '상업 공간', href: '/projects/commercial' },
      { name: '팝업 & 이벤트', href: '/projects/popup' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Inclusions', href: '/inclusions' },
    ],
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 브랜드 섹션 */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="text-2xl font-heading font-bold text-white hover:text-accent-400 transition-colors duration-300"
            >
              Moments of Space
            </Link>
            <p className="mt-4 text-primary-200 leading-relaxed">
              공간에 생명을 불어넣는 디자이너. 주거부터 상업공간까지, 당신만의 특별한 공간을 만들어드립니다.
            </p>
            
            {/* 소셜 미디어 */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="mailto:hello@momentsofspace.com" 
                className="text-primary-200 hover:text-accent-400 transition-colors duration-300"
                aria-label="이메일"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/momentsofspace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-accent-400 transition-colors duration-300"
                aria-label="인스타그램"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="tel:+82-10-1234-5678" 
                className="text-primary-200 hover:text-accent-400 transition-colors duration-300"
                aria-label="전화"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 프로젝트 링크 */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-200">이메일</p>
                  <a 
                    href="mailto:hello@momentsofspace.com"
                    className="text-sm text-white hover:text-accent-400 transition-colors duration-300"
                  >
                    hello@momentsofspace.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-200">전화</p>
                  <a 
                    href="tel:+82-10-1234-5678"
                    className="text-sm text-white hover:text-accent-400 transition-colors duration-300"
                  >
                    010-1234-5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-200">상담 지역</p>
                  <p className="text-sm text-white">서울 · 경기</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-200">
              © {currentYear} Moments of Space. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {footerLinks.company.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-sm text-primary-200 hover:text-accent-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 