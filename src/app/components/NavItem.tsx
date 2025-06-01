'use client';
import Link from 'next/link';

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, href }) => {
  return (
    <Link 
      href={href} 
      className="font-plus-jakarta-sans text-sm text-neutral-900 hover:text-neutral-700 transition-colors duration-200"
    >
      {text}
    </Link>
  );
};

export default NavItem;
