import React from 'react';
import { ArrowDown, Sparkles, CalendarHeart, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const isPt = language === 'pt';

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Background Atmosphere Image with Gentle Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/amora_wedding_decor.jpg"
          alt="Elegante mesa de casamento e recepção com velas e flores em tons amora"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.94] contrast-[1.02]"
        />
        {/* Editorial Gradients: rich warm amora & champagne glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EF]/95 via-[#FAF5EF]/85 to-[#FAF5EF]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EF] via-transparent to-[#2C0E1E]/20" />
        {/* Delicate subtle warm amora tint */}
        <div className="absolute inset-0 bg-[#4A1733]/10 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand Slogan Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF5EF]/90 backdrop-blur-md border border-[#C59E65]/50 shadow-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C59E65]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#671F43] font-semibold">
            {isPt ? 'Amora Assessoria & Eventos' : 'Amora Event Advisory'}
          </span>
          <span className="hidden sm:inline text-xs text-[#C59E65]">•</span>
          <span className="hidden sm:inline font-script text-base text-[#4A1733]">
            {isPt ? 'Você sonha, a gente realiza' : 'You dream, we make it real'}
          </span>
        </div>

        {/* Impactful Editorial Headline */}
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-[#2C0E1E] font-normal leading-[1.08] tracking-tight max-w-4xl">
          {isPt ? (
            <>
              Transformamos <span className="italic font-normal text-[#671F43]">momentos</span> em{' '}
              <span className="relative inline-block font-normal text-[#4A1733]">
                memórias
                <svg
                  className="absolute -bottom-1 left-0 w-full text-[#C59E65]/70 -z-10"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 7 C 30 0, 70 0, 100 7" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>{' '}
              inesquecíveis.
            </>
          ) : (
            <>
              We turn <span className="italic font-normal text-[#671F43]">moments</span> into{' '}
              <span className="relative inline-block font-normal text-[#4A1733]">unforgettable</span> memories.
            </>
          )}
        </h1>

        {/* Short, Sophisticated Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#523A48] font-normal leading-relaxed max-w-2xl">
          {isPt
            ? 'Assessoria e coordenação exclusiva para casamentos e celebrações de alto padrão. Gestão cuidadosa e personalizada sob a liderança de Joyce Costa & Agatha Zillar.'
            : 'Exclusive event planning and coordination for luxury weddings and corporate celebrations. Thoughtful and bespoke management by Joyce Costa & Agatha Zillar.'}
        </p>

        {/* Dual Call To Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo('servicos')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-medium text-[#FAF5EF] bg-[#4A1733] hover:bg-[#2C0E1E] rounded-full shadow-lg shadow-[#4A1733]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <CalendarHeart className="w-4 h-4 text-[#C59E65]" />
            {isPt ? 'Nossos Serviços' : 'Our Services'}
          </button>

          <button
            onClick={() => handleScrollTo('contato')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-medium text-[#2C0E1E] bg-[#FAF5EF]/95 hover:bg-white border-2 border-[#C59E65]/60 hover:border-[#4A1733] rounded-full shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#671F43]" />
            {isPt ? 'Fale Conosco' : 'Contact Us'}
          </button>
        </div>

        {/* Mini Trust Tags */}
        <div className="mt-12 pt-8 border-t border-[#D5C2AF]/40 w-full max-w-xl flex items-center justify-around text-xs tracking-wider text-[#8C7362] uppercase font-medium">
          <span>{isPt ? 'Assessoria Completa' : 'Full Planning'}</span>
          <span className="text-[#C5A880]">•</span>
          <span>{isPt ? 'Menos Preocupação' : 'Peace of Mind'}</span>
          <span className="text-[#C5A880]">•</span>
          <span>{isPt ? 'Mais Momentos' : 'More Moments'}</span>
        </div>

        {/* Animated Scroll Down Indicator */}
        <button
          onClick={() => handleScrollTo('sobre')}
          aria-label="Rolar para a seção sobre nós"
          className="mt-10 inline-flex flex-col items-center text-[#8C7362] hover:text-[#4A1E34] transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium mb-1.5 opacity-80 group-hover:opacity-100">
            {isPt ? 'Descubra Mais' : 'Explore More'}
          </span>
          <div className="w-8 h-12 rounded-full border border-[#C5A880]/60 flex items-start justify-center p-1.5 shadow-sm">
            <div className="w-1.5 h-3 bg-[#4A1E34] rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
