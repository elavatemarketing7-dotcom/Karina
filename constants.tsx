
import React from 'react';
import { QuizQuestion } from './types';

export const WHATSAPP_URL = "https://api.whatsapp.com/message/NONL2VZ3KBTFG1?autoload=1&app_absent=0&utm_source=ig";
export const INSTAGRAM_URL = "https://www.instagram.com/drakargomes/";

export const EXPERT_NAME = "Karina Gomes";
export const EXPERT_TITLE = "Harmonização Facial | Preenchimento Labial";

export const IMAGES = {
  hero: "https://i.imgur.com/YYIe6Dp.png",
  secondary: "https://i.imgur.com/lyqw7R4.png",
  third: "https://i.imgur.com/NUBDoJw.png",
  video: "https://i.imgur.com/vOrrNO3.mp4",
  social_proof: [
    "https://i.imgur.com/EhCBV0O.png",
    "https://i.imgur.com/fqNBBtQ.png",
    "https://i.imgur.com/yXNLpwQ.png",
    "https://i.imgur.com/Yn5tXBX.png",
    "https://i.imgur.com/Qcvos5A.png",
    "https://i.imgur.com/D4bGFre.png",
    "https://i.imgur.com/MjdFN1Z.png",
    "https://i.imgur.com/PGYJuEh.png",
    "https://i.imgur.com/tyoAveM.png",
    "https://i.imgur.com/xRQVJPI.png",
    "https://i.imgur.com/bXVzujT.png",
    "https://i.imgur.com/wgm3kaS.png",
    "https://i.imgur.com/teCa78U.png",
    "https://i.imgur.com/H340S0O.png",
    "https://i.imgur.com/TKNCBLf.png"
  ],
  comments: [
    "https://i.imgur.com/vEdh1D3.png",
    "https://i.imgur.com/qk6gydN.png",
    "https://i.imgur.com/FqUEaRt.png"
  ]
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual o seu principal objetivo hoje?",
    options: ["Mais volume nos lábios", "Rejuvenescimento facial", "Contorno e definição", "Tratar rugas e marcas"]
  },
  {
    id: 2,
    question: "Você já realizou algum procedimento estético?",
    options: ["Sim, e adoro os resultados", "Sim, mas não gostei", "Não, seria minha primeira vez"]
  },
  {
    id: 3,
    question: "O que você mais valoriza em um procedimento?",
    options: ["Naturalidade acima de tudo", "Resultado imediato e visível", "Segurança e técnica refinada", "Durabilidade"]
  },
  {
    id: 4,
    question: "Quando você deseja realizar sua transformação?",
    options: ["Imediatamente", "Nas próximas semanas", "Apenas pesquisando"]
  }
];
