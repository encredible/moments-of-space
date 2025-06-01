'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 w-full mt-auto">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center px-5 py-8 sm:px-10 gap-6">
        <div className="flex justify-center items-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-4">
          <Link href="/contact" className="font-plus-jakarta-sans text-base text-gray-500 hover:text-neutral-700 text-center">Contact</Link>
          <Link href="/privacy-policy" className="font-plus-jakarta-sans text-base text-gray-500 hover:text-neutral-700 text-center">Privacy Policy</Link>
          <Link href="/terms-of-service" className="font-plus-jakarta-sans text-base text-gray-500 hover:text-neutral-700 text-center">Terms of Service</Link>
        </div>
        <div className="flex justify-center flex-wrap gap-5">
          <a href="#" aria-label="Facebook"><Image src="/figma-images/Vector-0.svg" alt="Facebook" width={24} height={24} className="hover:opacity-75" /></a>
          <a href="#" aria-label="Instagram"><Image src="/figma-images/Vector-0.svg" alt="Instagram" width={24} height={24} className="hover:opacity-75" /></a>
          <a href="#" aria-label="Twitter"><Image src="/figma-images/Vector-0.svg" alt="Twitter" width={24} height={24} className="hover:opacity-75" /></a>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-plus-jakarta-sans text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Moment of Space. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 