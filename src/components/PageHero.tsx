import React from 'react';

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description, image }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHero;