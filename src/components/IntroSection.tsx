import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Compass, Sparkles, Sliders } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = t('intro.pillars') as Array<{ title: string; desc: string }>;
  const icons = [Compass, Sparkles, ShieldCheck, Sliders];

  return (
    <section id="intro" className="py-24 lg:py-36 bg-[#0B0B0B] relative overflow-hidden border-b border-white/5">
      {/* BACKGROUND SUBTLE LINES */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C8B89A_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT EDITORIAL COLUMN */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#C8B89A]"></div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                TOUMIVAL PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] leading-[1.05] font-heading">
              {t('intro.heading')}
            </h2>

            <p className="text-base md:text-lg text-[#A8A8A8] font-light leading-relaxed">
              {t('intro.paragraph')}
            </p>

            {/* 4 PILLARS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((pillar, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white/[0.02] border border-white/10 hover:border-[#C8B89A]/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 mb-3 rounded-none bg-[#C8B89A]/10 border border-[#C8B89A]/30 flex items-center justify-center text-[#C8B89A] group-hover:bg-[#C8B89A] group-hover:text-[#0B0B0B] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F5F3EF] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT ARCHITECTURAL VISUAL WITH OVERLAY DETAILS */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden">
              <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-[#121212]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural Aluminium Villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* OVERLAY STAT CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B0B0B]/90 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-bold text-[#C8B89A] font-heading">100%</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                    Conception sur mesure
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div>
                  <span className="block text-2xl font-bold text-[#F5F3EF] font-heading">SAINT-GOBAIN</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                    Partenaire vitrage certifié
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
