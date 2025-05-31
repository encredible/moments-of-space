'use client';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 px-10 w-full">
        <Link href="/home" className="flex items-center gap-3 group">
          <Image src="/figma-images/Vector-0.svg" alt="Moment of Space Logo" width={20} height={20} className="group-hover:opacity-80 transition-opacity" />
          <span className="font-plus-jakarta-sans font-bold text-xl text-neutral-900 group-hover:text-neutral-700 transition-colors">
            Moment of Space
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          <div className="flex items-center gap-9">
            {/* <Link href="/" className="font-plus-jakarta-sans font-medium text-sm text-neutral-900 hover:text-neutral-700">Home</Link> */}
            {/* <Link href="/about" className="font-plus-jakarta-sans font-medium text-sm text-neutral-900 hover:text-neutral-700">About</Link> */}
            <Link href="/services" className="font-plus-jakarta-sans font-medium text-sm text-neutral-900 hover:text-neutral-700">Services</Link>
            <Link href="/project" className="font-plus-jakarta-sans font-medium text-sm text-neutral-900 hover:text-neutral-700">Projects</Link>
            <Link href="/designers" className="font-plus-jakarta-sans font-medium text-sm text-neutral-900 hover:text-neutral-700">Designers</Link>
            <Link href="/contact" className="font-plus-jakarta-sans font-medium text-sm text-neutral-900 hover:text-neutral-700">Contact</Link>
          </div>
          {/* <button className="bg-gray-100 rounded-xl px-4 h-10 flex justify-center items-center font-plus-jakarta-sans font-bold text-sm text-neutral-900 hover:bg-gray-200">
            Get Started
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header; 