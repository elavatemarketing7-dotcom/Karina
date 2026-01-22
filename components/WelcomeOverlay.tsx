
import React from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';

interface WelcomeOverlayProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#f1d592]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-lg px-8 text-center flex flex-col items-center">
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-gold blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="w-40 h-40 rounded-full border-[1px] border-[#d4af37] p-2 overflow-hidden mx-auto shadow-2xl relative">
             <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover reveal-image" />
          </div>
        </div>
        
        <div className="space-y-4 mb-12">
          <h4 className="font-signature text-5xl text-premium-gold animate-pulse">Dra. {EXPERT_NAME}</h4>
          <h2 className="text-3xl font-serif text-gray-900 leading-tight">Um novo conceito em <br/><span className="italic">Harmonização Facial.</span></h2>
          <p className="text-gray-500 font-light tracking-wide text-sm max-w-xs mx-auto">
            Descubra o tratamento exclusivo que realça sua beleza natural com sofisticação e segurança.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <button 
            onClick={onStartQuiz}
            className="w-full bg-premium-gold text-white font-bold tracking-[0.2em] py-6 rounded-full shadow-2xl hover:scale-105 transition-all text-xs uppercase"
          >
            Iniciar Avaliação VIP
          </button>
          
          <button 
            onClick={onGoToSite}
            className="w-full bg-transparent border border-gray-200 text-gray-400 font-medium py-4 rounded-full hover:bg-gray-50 transition-all text-xs uppercase tracking-widest"
          >
            Acessar Site Principal
          </button>

          <a 
            href={WHATSAPP_URL}
            target="_blank"
            className="mt-4 text-[#d4af37] font-semibold text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
          >
            Falar diretamente no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
