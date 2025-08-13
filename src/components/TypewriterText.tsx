"use client";

import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className, delay = 0 }) => {
  const typewriterRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={typewriterRef} className={className}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(delay)
            .typeString(text)
            .start();
        }}
        options={{
          delay: 75,
          cursor: '|',
          cursorClassName: 'text-red-600',
        }}
      />
    </div>
  );
};

export default TypewriterText;
