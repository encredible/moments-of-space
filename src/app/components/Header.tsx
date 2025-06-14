'use client';
import Link from 'next/link';
import headerContent from './header_content.json' assert { type: 'json' };

const Header: React.FC = () => {
  const logoText = headerContent.logo;
  const logoLine1 = "SPACE STYLING SOLUTION"

  return (
    <header className="my-25 max-w-screen-xl mx-auto z-10">
      <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-0"> {/* Centered content */}
        <Link href="/" className="group font-gillsansnova-book text-center leading-none text-neutral-900 group-hover:text-neutral-700 transition-colors tracking-tight">
          <span className="block font-bold text-lg pb-2">{logoLine1}</span> {/* Line 1, smaller text, added colon back */}
          <span className="block font-extrabold text-6xl">{logoText}</span> {/* Line 2, original size, added font-semibold for emphasis */}
        </Link>
      </div>
    </header>
  );
};

export default Header;