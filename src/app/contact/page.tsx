import Image from 'next/image';

const ContactPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="font-plus-jakarta-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-3">
            Contact Us
          </h1>
          <p className="font-plus-jakarta-sans text-lg text-gray-500">
            Let&apos;s bring your vision to life. We&apos;d love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="font-plus-jakarta-sans font-semibold text-2xl text-neutral-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Image src="/figma-images/Vector-0.svg" alt="Address Icon" width={24} height={24} />
                <div>
                  <h3 className="font-medium text-neutral-900">Address</h3>
                  <p className="text-gray-600">123 Design Street, Creative City, DC 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image src="/figma-images/Vector-0.svg" alt="Phone Icon" width={24} height={24} />
                <div>
                  <h3 className="font-medium text-neutral-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image src="/figma-images/Vector-0.svg" alt="Email Icon" width={24} height={24} />
                <div>
                  <h3 className="font-medium text-neutral-900">Email</h3>
                  <p className="text-gray-600">hello@momentofspace.com</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-plus-jakarta-sans font-semibold text-2xl text-neutral-900 mb-6">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Have a project in mind or just want to say hello? Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-900 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-900 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-900 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  placeholder="Tell us about your project or questions..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactPage; 