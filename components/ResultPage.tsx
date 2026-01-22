
import React from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';

interface ResultPageProps {
  onContinue: () => void;
  quizAnswers: string[];
}

const ResultPage: React.FC<ResultPageProps> = ({ onContinue, quizAnswers }) => {
  
  const generateWhatsAppMessage = () => {
    const text = `Olá Dra. Karina! Acabei de fazer sua avaliação VIP e meu perfil deu compatível. Meus interesses: ${quizAnswers.join(', ')}. Gostaria de agendar uma consulta exclusiva.`;
    return `${WHATSAPP_URL}&text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1a1a] flex flex-col overflow-hidden text-white">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={IMAGES.secondary} 
          alt="" 
          className="w-full h-full object-cover reveal-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-10 text-center">
        <div className="animate-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-block px-4 py-1.5 border border-[#d4af37]/30 bg-[#d4af37]/10 rounded-full mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] text-premium-gold uppercase">Match Confirmado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-4">
            Você é a <br/> <span className="text-premium-gold italic">Paciente Ideal.</span>
          </h2>
          
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs mx-auto mb-12">
            Com base em suas respostas, o Método <span className="text-white font-medium">Dra. {EXPERT_NAME}</span> é a solução perfeita para a naturalidade que você busca.
          </p>

          <div className="w-full max-w-xs space-y-4">
            <a 
              href={generateWhatsAppMessage()}
              target="_blank"
              className="block w-full bg-premium-gold text-white font-bold py-5 rounded-full shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform uppercase text-xs tracking-[0.1em]"
            >
              Enviar Avaliação VIP
            </a>
            
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              className="block w-full bg-white/10 backdrop-blur-md text-white font-bold py-5 rounded-full border border-white/20 hover:bg-white/20 transition-all uppercase text-xs tracking-[0.1em]"
            >
              Chamar no WhatsApp
            </a>

            <button 
              onClick={onContinue}
              className="block w-full text-gray-500 font-bold py-4 uppercase text-[10px] tracking-widest"
            >
              Explorar Site Principal
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-8 text-center relative z-10">
        <span className="font-signature text-3xl text-premium-gold/50">{EXPERT_NAME}</span>
      </div>
    </div>
  );
};

export default ResultPage;
