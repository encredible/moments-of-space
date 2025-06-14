'use client'

import React from 'react'
import Link from 'next/link'

interface FloatingTalkButtonProps {
  link: string;
}

const FloatingTalkButton: React.FC<FloatingTalkButtonProps> = ({ link }) => {
  return (
    <Link 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow border-2 border-gray-100 hover:shadow-xl"
      aria-label="카카오톡 1:1 상담"
    >
      {/* 카카오톡 아이콘과 텍스트 */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-xs font-bold text-gray-700">1:1</div>
        <div className="text-xs font-bold text-gray-700 mt-0.5">TALK</div>
      </div>
    </Link>
  )
}

export default FloatingTalkButton
