'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    spaceSize: '',
    budget: '',
    startDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 여기에 실제 이메일 전송 로직 구현 (EmailJS 등)
    try {
      // 임시 지연
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        spaceSize: '',
        budget: '',
        startDate: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: '', label: '프로젝트 유형을 선택해주세요' },
    { value: 'residential', label: '주거 공간 인테리어' },
    { value: 'commercial', label: '상업 공간 디자인' },
    { value: 'popup', label: '팝업 스토어 & 이벤트' },
    { value: 'styling', label: '공간 스타일링' },
    { value: 'other', label: '기타' }
  ];

  const budgetRanges = [
    { value: '', label: '예산 범위를 선택해주세요' },
    { value: '100-300', label: '100만원 - 300만원' },
    { value: '300-500', label: '300만원 - 500만원' },
    { value: '500-1000', label: '500만원 - 1,000만원' },
    { value: '1000+', label: '1,000만원 이상' },
    { value: 'consultation', label: '상담 후 결정' }
  ];

  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            프로젝트 문의하기
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            당신의 공간에 대한 꿈을 들려주세요. 전문적인 상담을 통해 최적의 솔루션을 제안해드립니다.
          </p>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 연락처 정보 */}
            <div className="lg:col-span-1">
              <div className="bg-primary-900 text-white p-8 rounded-xl">
                <h2 className="font-heading text-2xl font-bold mb-6">연락처 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-accent-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">이메일</p>
                      <a 
                        href="mailto:hello@momentsofspace.com"
                        className="text-primary-200 hover:text-accent-400 transition-colors"
                      >
                        hello@momentsofspace.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-accent-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">전화</p>
                      <a 
                        href="tel:+82-10-1234-5678"
                        className="text-primary-200 hover:text-accent-400 transition-colors"
                      >
                        010-1234-5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-6 w-6 text-accent-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">카카오톡</p>
                      <a 
                        href="#"
                        className="text-primary-200 hover:text-accent-400 transition-colors"
                      >
                        오픈채팅 바로가기
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">상담 지역</p>
                      <p className="text-primary-200">서울 · 경기</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary-700">
                  <h3 className="font-heading text-lg font-semibold mb-4">상담 프로세스</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-accent-400" />
                      <span className="text-primary-200">초기 상담: 무료 (30분)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-accent-400" />
                      <span className="text-primary-200">현장 방문: 서울/경기 지역</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-accent-400" />
                      <span className="text-primary-200">응답 시간: 24시간 이내</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-accent-400" />
                      <span className="text-primary-200">긴급 문의: 전화 연락</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 문의 폼 */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                      전화번호
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-text-primary mb-2">
                      프로젝트 유형 *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="spaceSize" className="block text-sm font-semibold text-text-primary mb-2">
                      공간 면적
                    </label>
                    <input
                      type="text"
                      id="spaceSize"
                      name="spaceSize"
                      value={formData.spaceSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                      placeholder="예: 25평, 80㎡"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-text-primary mb-2">
                      예산 범위
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-semibold text-text-primary mb-2">
                    희망 시작일
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    상세 메시지 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors resize-none"
                    placeholder="프로젝트에 대한 상세한 내용을 알려주세요. 현재 공간의 상태, 원하는 스타일, 특별한 요구사항 등을 포함해주시면 더 정확한 상담이 가능합니다."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 disabled:bg-primary-300 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      문의 보내기
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      문의가 성공적으로 전송되었습니다. 24시간 이내에 답변드리겠습니다.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">
                      문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 