'use client';
import React from 'react';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  onClick,
  children, 
  className = '', 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-block
        font-korean-button
        text-neutral-500
        border
        border-neutral-500
        px-3 py-2 text-base
        hover:bg-gray-50
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}
