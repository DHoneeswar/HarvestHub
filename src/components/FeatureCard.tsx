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
  theme = 'green'
}) => {
  const themeColors = {
    green: {
      bg: 'bg-green-50',
      hover: 'hover:bg-green-100',
      text: 'text-green-600',
      border: 'border-green-200',
    },
    orange: {
      bg: 'bg-orange-50',
      hover: 'hover:bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-200',
    },
    gray: {
      bg: 'bg-gray-50',
      hover: 'hover:bg-gray-100',
      text: 'text-gray-600',
      border: 'border-gray-200',
    },
  };

  const colors = themeColors[theme];

  return (
    <a
      href={link}
      className={`block p-6 border rounded-lg shadow-sm ${colors.bg} ${colors.hover} ${colors.border} transition-all duration-200 transform hover:scale-105`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors.bg}`}>
        <Icon className={`h-6 w-6 ${colors.text}`} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </a>
  );
};

export default FeatureCard;