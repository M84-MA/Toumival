import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, openQuoteModal } = useLanguage();

  return (
    <section id="accueil" className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-villa-with-swimming-pool-42867-large.mp4"
            type="video/mp4"
          />
          {/* Fallback architectural image */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop"
            alt="Architecture Aluminium & Verre"
            className="w-full h-full object-cover"
          />
        </video>

        {/* GRADIENT OVERLAYS FOR LUXURY CINEMATIC ATMOSPHERE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-[#0B0B0B]/80 z-10"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 flex flex-col justify-center h-full">
        <div className="max-w-4xl">
          {/* LUXURY ARCHITECTURAL BADGE */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-[#C8B89A]/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C8B89A] animate-pulse"></span>
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#C8B89A] uppercase">
              ARCHITECTURAL ALUMINIUM & GLASS SYSTEMS
            </span>
          </div>

          {/* MAIN MASSIVE MULTI-LINE TYPOGRAPHY */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[110px] font-extrabold uppercase text-[#F5F3EF] tracking-tight leading-[0.9] mb-8 font-heading">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3EF] via-[#FFFFFF] to-[#C8B89A]">
              {t('hero.title1')}
            </span>
            <span className="block text-[#C8B89A] font-light mt-1">
              {t('hero.title2')}
            </span>
          </h1>

          {/* ELEGANT SUBTITLE */}
          <p className="text-lg md:text-2xl text-[#A8A8A8] font-light tracking-wide max-w-2xl mb-12 border-l-2 border-[#C8B89A]/50 pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
            {t('hero.subtitle')}
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <a
              href="#realisations"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#F5F3EF] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C8B89A] transition-all duration-300 shadow-xl"
            >
              <span>{t('hero.btnDiscover')}</span>
              <ArrowRight className="w-4 h-4 ml-3 rtl:mr-3 rtl:ml-0 rtl-flip group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => openQuoteModal()}
              className="group relative inline-flex items-center justify-center px-8 py-4 border border-[#C8B89A]/50 bg-black/40 backdrop-blur-md text-[#F5F3EF] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#C8B89A] hover:bg-[#C8B89A]/10 transition-all duration-300"
            >
              <span>{t('hero.btnQuote')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ANIMATED SCROLL INDICATOR */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A8A8] group-hover:text-[#C8B89A] transition-colors">
          {t('hero.scroll')}
        </span>
        <div className="w-6 h-10 border border-[#C8B89A]/40 rounded-full flex items-start justify-center p-1 group-hover:border-[#C8B89A] transition-colors">
          <div className="w-1.5 h-3 bg-[#C8B89A] rounded-full animate-bounce"></div>
        </div>
      </a>
    </section>
  );
};
