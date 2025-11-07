
import React from 'react';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import LinkButton from './components/LinkButton';
import GeminiQA from './components/GeminiQA';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        
        <section id="hero" className="text-center py-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-4">
            Novembro Azul
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Um movimento pela conscientização e prevenção do câncer de próstata. Cuidar da saúde também é coisa de homem.
          </p>
        </section>

        <section id="about" className="my-16 p-8 bg-blue-900/40 rounded-xl border border-blue-800 shadow-lg">
          <h2 className="text-3xl font-bold text-sky-400 mb-4">O que é o Novembro Azul?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Novembro Azul é uma campanha de conscientização realizada por diversas entidades no mês de novembro dirigida à sociedade e, em especial, aos homens, para conscientização a respeito de doenças masculinas, com ênfase na prevenção e no diagnóstico precoce do câncer de próstata.
          </p>
        </section>

        <section id="prevention" className="my-16">
          <h2 className="text-3xl font-bold text-sky-400 mb-8 text-center">Prevenção e Sinais de Alerta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard title="Fatores de Risco">
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Idade (risco aumenta com o envelhecimento)</li>
                <li>Histórico familiar de câncer de próstata</li>
                <li>Obesidade e sobrepeso</li>
                <li>Etnia (maior incidência em homens negros)</li>
              </ul>
            </InfoCard>
            <InfoCard title="Principais Sintomas">
               <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Dificuldade de urinar</li>
                <li>Diminuição do jato de urina</li>
                <li>Necessidade de urinar mais vezes</li>
                <li>Presença de sangue na urina ou no sêmen</li>
                <li className="font-bold text-sky-300">Atenção: Na fase inicial, pode não haver sintomas!</li>
              </ul>
            </InfoCard>
            <InfoCard title="Como Prevenir?">
               <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Manter uma alimentação saudável</li>
                <li>Praticar atividade física regularmente</li>
                <li>Evitar o consumo de álcool e cigarro</li>
                <li>Consultar um urologista anualmente a partir dos 45-50 anos</li>
              </ul>
            </InfoCard>
          </div>
        </section>

        <section id="ai-assistant" className="my-16">
            <h2 className="text-3xl font-bold text-sky-400 mb-8 text-center">Tire suas Dúvidas com nossa IA</h2>
            <GeminiQA />
        </section>

        <section id="links" className="my-16 text-center">
          <h2 className="text-3xl font-bold text-sky-400 mb-8">Links e Recursos Úteis</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton href="https://www.inca.gov.br/tipos-de-cancer/cancer-de-prostata" target="_blank">
              INCA - Câncer de Próstata
            </LinkButton>
            <LinkButton href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-prostata" target="_blank">
              Ministério da Saúde
            </LinkButton>
            <LinkButton href="https://sbu.org.br/" target="_blank">
              Sociedade Brasileira de Urologia
            </LinkButton>
          </div>
        </section>

      </main>

      <footer className="text-center p-6 bg-blue-950/50 border-t border-blue-800">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Campanha Novembro Azul. A prevenção é o melhor caminho.</p>
      </footer>
    </div>
  );
};

export default App;
