
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-blue-800/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.04 15.44l-3.53-3.53c-.39-.39-.39-1.02 0-1.41l.71-.71c.39-.39 1.02-.39 1.41 0l2.12 2.12 4.95-4.95c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-6.36 6.36c-.39.39-1.03.39-1.42 0z"/>
            </svg>
            <span className="text-xl font-bold text-white">Novembro Azul</span>
          </div>
          <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer" className="text-sm text-sky-400 hover:text-sky-300 transition-colors">
            Saúde é Prioridade
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
