'use client';
// import Image from 'next/image'; (아이콘 제거로 불필요해져 주석처리 또는 삭제)
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-start py-12 w-full">
        <Link href="/home" className="group">
          <span className="font-plus-jakarta-sans font-extrabold text-[7rem] leading-none text-neutral-900 group-hover:text-neutral-700 transition-colors tracking-tight">
            Moment of Space
          </span>
        </Link>
        <nav className="flex flex-col items-end gap-3 ml-auto" style={{minWidth: '180px'}}>
          <Link href="/services" className="font-plus-jakarta-sans font-semibold text-lg text-neutral-900 hover:text-neutral-700">Services</Link>
          <Link href="/project" className="font-plus-jakarta-sans font-semibold text-lg text-neutral-900 hover:text-neutral-700">Projects</Link>
          <Link href="/designers" className="font-plus-jakarta-sans font-semibold text-lg text-neutral-900 hover:text-neutral-700">Designers</Link>
          <Link href="/contact" className="font-plus-jakarta-sans font-semibold text-lg text-neutral-900 hover:text-neutral-700">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 