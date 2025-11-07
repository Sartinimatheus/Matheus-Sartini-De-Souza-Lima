
import React, { useState, useCallback } from 'react';
import { askGemini } from '../services/geminiService';

const GeminiQA: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleAsk = useCallback(async () => {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await askGemini(prompt);
      setResponse(result);
    } catch (e: any) {
      setError('Ocorreu um erro ao buscar a resposta. Tente novamente.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [prompt, loading]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleAsk();
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800/50 rounded-xl border border-blue-700 shadow-2xl">
      <p className="text-gray-400 mb-4 text-center">
        Este é um assistente de IA para responder perguntas gerais sobre câncer de próstata.
        <strong className="text-amber-400 block mt-1">Esta ferramenta não substitui o conselho médico profissional.</strong>
      </p>
      <div className="flex flex-col md:flex-row gap-2">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ex: Quais os exames para detectar o câncer de próstata?"
          className="w-full p-3 bg-gray-900 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none text-gray-200 resize-none"
          rows={3}
          disabled={loading}
        />
        <button
          onClick={handleAsk}
          disabled={loading || !prompt.trim()}
          className="px-6 py-3 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center"
        >
          {loading ? (
             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Perguntar'}
        </button>
      </div>
      
      {error && <p className="mt-4 text-red-400 text-center">{error}</p>}

      {response && (
        <div className="mt-6 p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
          <h4 className="font-bold text-sky-400 mb-2">Resposta da IA:</h4>
          <p className="text-gray-300 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiQA;
