import React from 'react';
import { useLanguage } from '../context/LanguageContext';


export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = t('about.stats') as Array<{ number: string; label: string }>;

  return (
    <section id="about" className="py-24 lg:py-36 bg-[#0B0B0B] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT LARGE ARCHITECTURAL WORKSHOP / PROJECT VISUAL */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden border border-white/10 bg-[#121212] aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="TOUMIVAL Savoir-Faire"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>

              {/* BRAND BADGE OVERLAY */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-xl border border-white/10">
                <span className="text-xs uppercase font-mono text-[#C8B89A] tracking-widest block mb-1">
                  TOUMIVAL ARCHITECTURAL SYSTEMS
                </span>
                <p className="text-sm text-[#F5F3EF] font-light">
                  L'alliance entre haute technicité industrielle et finition artisanale.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT EDITORIAL CONTENT */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#C8B89A]"></div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                HISTOIRE & VALEURS
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] leading-[1.05] font-heading">
              {t('about.title')}
            </h2>

            <p className="text-base text-[#A8A8A8] font-light leading-relaxed">
              {t('about.paragraph1')}
            </p>

            <p className="text-base text-[#A8A8A8] font-light leading-relaxed border-l-2 border-[#C8B89A]/40 pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
              {t('about.paragraph2')}
            </p>

            {/* 4 STATS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-3xl font-extrabold text-[#C8B89A] font-heading">
                    {stat.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#A8A8A8] font-light">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
