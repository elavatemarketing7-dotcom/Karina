
import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="px-6">
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer bg-white shadow-lg border-2 border-transparent hover:border-premium-gold/30 transition-all duration-500"
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Resultado Dra. Karina Gomes ${idx + 1}`} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-premium-gold/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase">Clique para ampliar</span>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <button 
              className="absolute -top-16 right-0 text-white hover:text-premium-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Resultado ampliado Plus" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-[2rem] shadow-[0_0_100px_rgba(212,175,55,0.2)] border border-white/10" 
            />
            <div className="mt-8">
               <a 
                href={`https://api.whatsapp.com/send?phone=55&text=${encodeURIComponent("Gostaria de saber mais sobre este resultado que vi na sua galeria.")}`} 
                target="_blank"
                className="bg-premium-gold text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl"
                onClick={(e) => e.stopPropagation()}
               >
                 Quero um resultado assim
               </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
