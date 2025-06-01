'use client';
import Link from 'next/link';
import NavItem from './NavItem';
import headerContent from './header_content.json' assert { type: 'json' };

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-start py-12 w-full">
        <Link href="/" className="group font-extrabold text-[7rem] leading-none text-neutral-900 group-hover:text-neutral-700 transition-colors tracking-tight">
          {headerContent.logo}
        </Link>
        <nav className="flex flex-col items-end gap-3 ml-auto" style={{minWidth: '180px'}}>
          {headerContent.navItems.map((item, index) => (
            <NavItem key={index} text={item.text} href={item.href} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 