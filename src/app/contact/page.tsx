import Image from 'next/image';
import contactContent from './content.json' assert { type: 'json' };
import { Mail, MapPin } from 'lucide-react';
import PageLayout from '../components/PageLayout';

type Field = {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
};

const ContactPage = () => {
  return (
    <PageLayout className="relative">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src={contactContent.heroImageSrc}
          alt={contactContent.heroImageAlt}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* 오버레이 */}
        <div className={`absolute inset-0 ${contactContent.overlayColor}`}></div>
      </div>
      
      {/* 콘텐츠 */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-10 md:px-20 py-10">
        <section className="w-full max-w-2xl">
          <div className="pt-5 pb-8">
            <h2 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl text-white text-center mb-10">
              {contactContent.title}
            </h2>
            <p className="text-center text-gray-200 mb-10">
              {contactContent.description}
            </p>
          </div>

          {/* 반투명 배경이 있는 폼 컨테이너 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message / Consultation Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ContactPage; 