
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, IMAGES, EXPERT_NAME } from '../constants';

interface QuizProps {
  isAnalyzing: boolean;
  onFinish: (answers: string[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ isAnalyzing, onFinish, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  if (isAnalyzing) {
    return (
      <div className="fixed inset-0 z-50 bg-[#fdfbf7] flex flex-col items-center justify-center p-8">
        <div className="w-28 h-28 rounded-full border-2 border-[#d4af37] mb-8 overflow-hidden shadow-2xl animate-bounce">
           <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-serif text-gray-800 mb-2">Quase pronto...</h2>
        <p className="text-premium-gold font-bold text-sm tracking-widest mb-10">ANALISANDO PERFIL</p>
        
        <div className="w-full max-w-xs h-1 bg-gray-100 rounded-full overflow-hidden relative">
          <div className="h-full bg-premium-gold animate-[progress_2.5s_ease-in-out]"></div>
        </div>
        <style>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 bg-white flex flex-col overflow-hidden">
      {/* Background Hero Image - Low Opacity for "Exclusive" feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
      </div>

      <header className="p-6 flex items-center justify-between border-b border-gray-50 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-premium-gold p-0.5 overflow-hidden shadow-sm">
            <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Dra. {EXPERT_NAME}</span>
        </div>
        <button onClick={onSkip} className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Pular</button>
      </header>

      <div className="flex-1 flex flex-col justify-center px-8 relative z-10">
        <div className="mb-12">
          <div className="w-12 h-1 bg-gray-100 rounded-full mb-4">
             <div className="h-full bg-premium-gold transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-premium-gold mb-2 font-bold">Questão {currentStep + 1}</p>
          <h2 className="text-3xl font-serif text-gray-800 leading-tight">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>
        </div>

        <div className="grid gap-3">
          {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="group w-full py-5 px-6 text-left border border-gray-100 rounded-2xl shadow-sm hover:border-premium-gold hover:shadow-xl transition-all flex items-center justify-between bg-white"
            >
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{option}</span>
              <div className="w-5 h-5 rounded-full border border-gray-200 group-hover:border-premium-gold group-hover:bg-premium-gold transition-colors"></div>
            </button>
          ))}
        </div>
      </div>

      <footer className="p-8 text-center border-t border-gray-50 relative z-10">
        <p className="text-[9px] text-gray-300 uppercase tracking-widest">Sua beleza, nossa arte.</p>
      </footer>
    </div>
  );
};

export default Quiz;
