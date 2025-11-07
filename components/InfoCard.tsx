
import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="bg-blue-900/50 rounded-xl border border-blue-800 p-6 transform hover:scale-105 hover:border-sky-500 transition-all duration-300 shadow-lg">
      <h3 className="text-2xl font-bold text-sky-400 mb-4">{title}</h3>
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
