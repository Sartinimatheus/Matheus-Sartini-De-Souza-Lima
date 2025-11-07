
import React from 'react';

interface LinkButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, target = '_self', children }) => {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="inline-block bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
    >
      {children}
    </a>
  );
};

export default LinkButton;
