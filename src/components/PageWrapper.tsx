import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageWrapper provides padding/margins/layout if needed.
 * It must not interfere with motion or page transitions.
 */
const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full min-h-screen ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
