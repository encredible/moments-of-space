import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: '서비스', href: '/services' },
    { name: '프로젝트', href: '/projects' },
    { name: '소개', href: '/about' },
    { name: '연락처', href: '/contact' },
    { name: '개인정보처리방침', href: '/privacy' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@momentsofspace.kr', href: 'mailto:hello@momentsofspace.kr' },
    { icon: Phone, text: '010-1234-5678', href: 'tel:010-1234-5678' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-[1200px] mx-auto">
          {/* Brand & Description */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
              <span className="font-bold text-xl text-white font-sans">
                Moments of Space
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed font-sans text-lg">
              공간에 생명을 불어넣는 디자이너. 
              주거부터 상업공간까지, 당신만의 특별한 공간을 만들어드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="font-semibold text-xl mb-6 font-sans">빠른 링크</h3>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 font-sans text-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="font-semibold text-xl mb-6 font-sans">연락처</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Link
                    key={index}
                    href={contact.href}
                    className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    <IconComponent size={18} />
                    <span className="font-sans text-lg">{contact.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-lg font-sans">
              © 2024 Moments of Space. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} className="text-white" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 