import React from 'react';

interface MarqueeTextProps {
  text: string;
  className?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({ text, className }) => {
  // Repeat the base text multiple times to form a long segment.
  // Using three regular spaces as a separator.
  const segment = Array(10).fill(text).join('   ');

  return (
    // Outer container: handles overflow and basic styling
    <div className={`overflow-hidden text-black font-bold border-y-2 py-2 font-nanum-acr bg-[var(--background)] ${className || ''}`}>
      {/* Track: this element is animated. It needs to be wide enough. */}
      {/* inline-block ensures it shrinks to content, whitespace-nowrap ensures spans stay on one line. */}
      <div className="inline-block whitespace-nowrap animate-marquee-custom">
        {/* Content Part 1: The segment of text */}
        <span className="px-4">{segment}</span> {/* px-4 for padding around each segment */}
        {/* Content Part 2: Identical segment for seamless looping */}
        <span className="px-4">{segment}</span>
      </div>
    </div>
  );
};

export default MarqueeText;
