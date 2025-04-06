import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  theme?: 'green' | 'orange' | 'gray';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  link,
  theme = 'green',
}) => {
  const themeColors = {
    green: {
      bg: 'bg-green-50 dark:bg-green-900',
      hover: 'hover:bg-green-100 dark:hover:bg-green-800',
      text: 'text-green-600 dark:text-green-300',
      border: 'border-green-200 dark:border-green-700',
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900',
      hover: 'hover:bg-orange-100 dark:hover:bg-orange-800',
      text: 'text-orange-600 dark:text-orange-300',
      border: 'border-orange-200 dark:border-orange-700',
    },
    gray: {
      bg: 'bg-gray-50 dark:bg-gray-900',
      hover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
      text: 'text-gray-600 dark:text-gray-300',
      border: 'border-gray-200 dark:border-gray-700',
    },
  };

  const colors = themeColors[theme];

  return (
    <a
      href={link}
      className={`block p-6 border rounded-lg shadow-sm ${colors.bg} ${colors.hover} ${colors.border} transition-all duration-300 transform hover:scale-105`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors.bg} ${colors.text} transition-colors duration-300`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">{description}</p>
    </a>
  );
};

export default FeatureCard;
