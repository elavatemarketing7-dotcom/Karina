
import React, { useState, useEffect } from 'react';
import { EXPERT_NAME, EXPERT_TITLE, IMAGES, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';
import { Camera, MapPin, CheckCircle, Shield, Award, MessageCircle, Instagram, ChevronRight, Star, Heart, Play } from 'lucide-react';
import Section from './Section';
import Gallery from './Gallery';

const MainSite: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'O Método', id: 'about' },
    { label: 'Resultados', id: 'results' },
    { label: 'Confiança', id: 'why' },
    { label: 'Onde Estamos', id: 'location' }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fdfbf7] text-[#1a1a1a] selection:bg-gold/30">
      {/* Exclusive Navigation Logradouro */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-xl' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="hidden md:block">
            <span className="font-signature text-2xl text-premium-gold">{EXPERT_NAME}</span>
          </div>
          <div className="flex gap-4 md:gap-10 items-center mx-auto md:mx-0">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)}
                className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-premium-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-premium-gold transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            <a href={WHATSAPP_URL} target="_blank" className="bg-premium-gold text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:scale-105 transition-transform">Agendar VIP</a>
          </div>
        </div>
      </nav>

      {/* Hero Section PLUS */}
      <section className="relative min-h-screen flex flex-col justify-end lg:justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Text Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap text-[20vw] font-serif font-bold italic">
          Karina Gomes
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1 space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-white/50 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] text-premium-gold border border-gold/20 uppercase mx-auto lg:mx-0">
                <Star size={12} fill="currentColor" /> Exclusividade Plus
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[0.9] text-gray-900">
                O realce <br/> da sua <span className="text-premium-gold italic">essência.</span>
              </h1>
              <p className="text-gray-500 font-light text-base md:text-lg max-w-md leading-relaxed mx-auto lg:mx-0">
                Transformações que respeitam sua identidade. Onde a técnica encontra a sensibilidade para criar o seu melhor eu.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                className="bg-premium-gold text-white font-bold py-6 px-10 rounded-2xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
              >
                <MessageCircle size={20} />
                Agendar Consulta VIP
              </a>
              <div className="flex items-center gap-4 px-4 py-2 justify-center">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>)}
                 </div>
                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">+2.000 Mulheres Reais</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group max-w-sm mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-premium-gold/10 rounded-[4rem] blur-2xl group-hover:bg-premium-gold/20 transition-all"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] shadow-2xl border-8 border-white">
               <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover reveal-image scale-105 hover:scale-110 transition-transform duration-1000" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce">
               <div className="bg-premium-gold text-white p-2 rounded-xl"><Heart fill="currentColor" size={20}/></div>
               <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Método Exclusivo</p>
                  <p className="font-serif text-lg font-bold">100% Natural</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Presentation Section - Otimizado para Mobile 9:16 vertical sem cortes */}
      <Section className="py-24 bg-white" id="video">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="text-premium-gold font-bold text-[10px] tracking-[0.4em] uppercase">Procedimento Plus</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">Experiência <span className="italic text-premium-gold">Imersiva</span></h2>
            <div className="h-1 w-20 bg-premium-gold mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
             {/* Video Container - Aspect Ratio 9:16 ideal para vídeos verticais mobile */}
             <div className="relative group mx-auto w-full max-w-[320px] md:max-w-[380px]">
                <div className="absolute -inset-4 bg-premium-gold/5 rounded-[4rem] blur-2xl"></div>
                
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] aspect-[9/16] bg-black border-[10px] border-white">
                   <video 
                     src={IMAGES.video} 
                     className="w-full h-full object-cover" 
                     autoPlay 
                     muted 
                     loop 
                     playsInline
                   />
                   
                   {/* HD Badge */}
                   <div className="absolute top-6 right-6 glass px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
                      <span className="text-[9px] font-bold text-white tracking-widest uppercase">720p Exclusive</span>
                   </div>

                   {/* Lighting Overlay */}
                   <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-[2.5rem] shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]"></div>
                </div>
             </div>

             <div className="space-y-8 text-center lg:text-left">
                <h3 className="text-3xl font-serif text-gray-900 leading-tight">Sinta a diferença de ser <span className="italic">cuida por quem entende.</span></h3>
                <p className="text-gray-500 font-light italic text-lg leading-relaxed border-l-2 border-premium-gold pl-6 py-2">
                  "Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Assista e sinta a diferença."
                </p>
                
                <div className="space-y-6 pt-4">
                   <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <div className="w-12 h-12 rounded-full bg-premium-gold/5 flex items-center justify-center text-premium-gold"><CheckCircle size={24}/></div>
                      <span className="font-medium text-gray-700">Técnica Minimamente Invasiva</span>
                   </div>
                   <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <div className="w-12 h-12 rounded-full bg-premium-gold/5 flex items-center justify-center text-premium-gold"><CheckCircle size={24}/></div>
                      <span className="font-medium text-gray-700">Conforto e Segurança Plus</span>
                   </div>
                </div>

                <div className="pt-6">
                   <a href={WHATSAPP_URL} target="_blank" className="bg-premium-gold text-white font-bold py-5 px-10 rounded-2xl shadow-xl hover:scale-105 transition-all text-xs uppercase tracking-widest inline-flex items-center gap-3">
                      Quero saber mais
                      <ChevronRight size={18} />
                   </a>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-32 overflow-hidden relative" id="about">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
           <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-premium-gold/10 rounded-full"></div>
              <img src={IMAGES.third} alt="Dra. Karina" className="w-full h-auto rounded-[4rem] shadow-2xl relative z-10 border-8 border-white" />
           </div>
           <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-premium-gold font-bold text-[10px] tracking-[0.4em] uppercase">Especialista Plus</span>
                <h2 className="text-5xl font-serif text-gray-900 leading-tight">Ciência aliada <br/><span className="italic">à beleza.</span></h2>
              </div>
              <div className="text-gray-500 font-light space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  Minha jornada na estética começou com uma convicção: a harmonização não deve mudar quem você é, mas iluminar o que você já tem de mais bonito.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 italic font-serif text-gray-800 text-xl relative group">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-premium-gold/10 rounded-full flex items-center justify-center text-premium-gold text-4xl">"</div>
                  Eu não apenas aplico produtos, eu desenho harmonia.
                </div>
              </div>
              <div className="pt-8 flex justify-center lg:justify-start">
                <a href={WHATSAPP_URL} target="_blank" className="bg-premium-gold text-white font-bold py-5 px-10 rounded-2xl shadow-xl hover:scale-105 transition-transform text-xs uppercase tracking-widest">
                  Conheça o meu Método
                </a>
              </div>
           </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="py-32 bg-gray-900 text-white" id="results">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-premium-gold font-bold text-[10px] tracking-[0.4em] uppercase">Galeria Exclusiva</span>
            <h2 className="text-4xl md:text-6xl font-serif">Provas <span className="italic text-premium-gold">Visuais</span></h2>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest italic max-w-xs md:text-right">Alta Fidelidade: Registros reais de pacientes que confiaram no Método Plus.</p>
        </div>
        <Gallery images={IMAGES.social_proof} />
      </Section>

      {/* Trust Section */}
      <Section className="py-32 px-6" id="why">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-serif">Por que ser <span className="italic text-premium-gold">Plus?</span></h2>
            <div className="h-1 w-24 bg-premium-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={32}/>, title: "Padrão de Ouro", desc: "Uso exclusivo de substâncias premium reconhecidas mundialmente." },
              { icon: <Award size={32}/>, title: "Expertise", desc: "Anos de dedicação focados em preenchimento e harmonização natural." },
              { icon: <Camera size={32}/>, title: "Análise HD", desc: "Análise facial milimétrica para resultados que funcionam em qualquer ângulo." },
              { icon: <MessageCircle size={32}/>, title: "Suporte VIP", desc: "Acompanhamento dedicado pós-procedimento até sua recuperação total." }
            ].map((card, i) => (
              <div key={i} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-premium-gold mb-8 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <section className="py-40 px-6 relative overflow-hidden bg-white text-center">
         <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <span className="font-signature text-6xl text-premium-gold block mb-8">Karina Gomes</span>
            <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">Sua beleza merece o <br/><span className="italic text-premium-gold">Padrão Plus.</span></h2>
            
            <div className="pt-10 flex flex-col items-center gap-6">
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                className="bg-premium-gold text-white font-bold py-8 px-16 rounded-full shadow-[0_30px_60px_rgba(212,175,55,0.4)] hover:scale-110 transition-all text-sm tracking-[0.2em] uppercase relative overflow-hidden group"
              >
                <span className="relative z-10">CLIQUE AQUI PARA SABER MAIS</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <div className="flex items-center gap-2 text-gray-300 font-bold uppercase text-[9px] tracking-widest">
                 <Shield size={14} /> Atendimento em ambiente seguro e 100% exclusivo
              </div>
            </div>
         </div>
      </section>

      {/* Location Map */}
      <Section className="py-32 px-6 bg-[#1a1a1a] text-white" id="location">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 space-y-8">
               <div className="space-y-4">
                 <span className="text-premium-gold font-bold text-[10px] tracking-[0.4em] uppercase">Espaço Físico</span>
                 <h3 className="text-4xl font-serif">Onde a mágica <br/><span className="italic text-premium-gold">acontece.</span></h3>
               </div>
               <p className="text-gray-400 font-light text-base leading-relaxed">
                 Cajati-SP. Um ambiente premium planejado para o seu conforto absoluto.
               </p>
               <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-premium-gold shrink-0" />
                    <p className="text-gray-400 text-sm">Cajati, São Paulo - Centro</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Instagram className="text-premium-gold shrink-0" />
                    <a href={INSTAGRAM_URL} target="_blank" className="text-gray-400 text-sm hover:text-white">@drakargomes</a>
                  </div>
               </div>
            </div>
            <div className="lg:w-2/3 h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.986877298642!2d-48.125!3d-24.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf983489b6623d%3A0x77d12a230588523c!2sCajati%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1715421234567!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
         </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-gray-100 text-center relative">
         <div className="max-w-7xl mx-auto px-6 space-y-8">
            <h4 className="font-signature text-6xl text-premium-gold">{EXPERT_NAME}</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">{EXPERT_TITLE} • CAJATI/SP</p>
            <div className="pt-8 text-[9px] text-gray-300 uppercase tracking-[0.5em] font-medium">
              © {new Date().getFullYear()} Dra. Karina Gomes • Estética de Alta Performance
            </div>
         </div>
      </footer>
    </div>
  );
};

export default MainSite;
