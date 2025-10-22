import React from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className }) => {
  return (
    <section 
      className={`relative w-full h-full flex flex-col bg-white overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};