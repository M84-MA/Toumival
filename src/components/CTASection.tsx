import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const CTASection: React.FC = () => {
  const { t, openQuoteModal } = useLanguage();

  return (
    <section className="relative py-32 lg:py-44 bg-[#0B0B0B] border-b border-white/5 overflow-hidden">
      {/* BACKGROUND ARCHITECTURAL IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/40 to-[#0B0B0B]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#C8B89A]/20 border border-[#C8B89A]/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#C8B89A] animate-ping"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">
            PROJET ARCHITECTURAL SUR MESURE
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F3EF] leading-[0.95] font-heading">
          {t('cta.title')}
        </h2>

        <p className="text-lg md:text-2xl text-[#A8A8A8] font-light max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
          <button
            onClick={() => openQuoteModal()}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl"
          >
            <span>{t('cta.btnQuote')}</span>
            <ArrowRight className="w-4 h-4 ml-3 rtl:mr-3 rtl:ml-0 rtl-flip group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 border border-white/20 bg-black/40 backdrop-blur-md text-[#F5F3EF] text-xs font-medium uppercase tracking-[0.2em] hover:border-[#C8B89A] hover:bg-white/5 transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4 mr-3 rtl:ml-3 rtl:mr-0 text-[#C8B89A]" />
            <span>{t('cta.btnContact')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
