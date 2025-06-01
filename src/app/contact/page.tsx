import Image from 'next/image';
import contactContent from './content.json' assert {type: 'json'};
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';

const ContactPage = () => {
    return (
        <PageLayout>
            {/* 콘텐츠 */}
            <PageHeader
                title={contactContent.title}
                description={contactContent.description}
            />

            {/* 반투명 배경이 있는 폼 컨테이너 */}
            <div className="bg-white/95 backdrop-blur-sm p-8 shadow-xl">
                <form className="space-y-6">
                    {contactContent.form.fields.map((field) => (
                        <div key={field.id}>
                            <label htmlFor={field.id} className="block text-sm font-medium text-neutral-700 mb-1">
                                {field.label}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    name={field.id}
                                    rows={4}
                                    required={field.required}
                                    autoComplete={field.autoComplete}
                                    placeholder={field.placeholder}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm transition-colors duration-200 resize-none"
                                ></textarea>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.id}
                                    id={field.id}
                                    autoComplete={field.autoComplete}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-neutral-500 focus:border-neutral-500 sm:text-sm transition-colors duration-200"
                                />
                            )}
                        </div>
                    ))}

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {contactContent.form.submitText}
                        </button>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
};

export default ContactPage; 