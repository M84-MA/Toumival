import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../types';
import { ArrowRight, Eye } from 'lucide-react';

interface ServicesOverviewProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService }) => {
  const { language, t } = useLanguage();
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <section id="solutions" className="py-24 lg:py-36 bg-[#0B0B0B] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C8B89A]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                INDEX DES SERVICES (11)
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">
              {t('servicesOverview.title')}
            </h2>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#A8A8A8] mt-4 md:mt-0">
            {t('servicesOverview.subtitle')}
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: LEFT INTERACTIVE LIST, RIGHT IMAGE PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT 11 SERVICES VERTICAL LIST */}
          <div className="lg:col-span-7 space-y-1">
            {servicesData.map((service) => {
              const isActive = service.id === activeServiceId;
              const titleText = service.title[language] || service.title.fr;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => onSelectService(service)}
                  className={`group cursor-pointer py-5 px-6 border-b border-white/5 transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-white/[0.04] border-[#C8B89A]/50 pl-8 rtl:pl-6 rtl:pr-8'
                      : 'hover:bg-white/[0.02] hover:pl-8 rtl:hover:pl-6 rtl:hover:pr-8'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-sm font-mono tracking-widest transition-colors ${
                        isActive ? 'text-[#C8B89A] font-bold scale-110' : 'text-[#A8A8A8]/60 group-hover:text-[#C8B89A]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-base md:text-xl uppercase font-medium tracking-wide transition-all ${
                        isActive ? 'text-[#F5F3EF] translate-x-2 rtl:-translate-x-2 font-bold' : 'text-[#A8A8A8] group-hover:text-[#F5F3EF]'
                      }`}
                    >
                      {titleText}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] uppercase tracking-wider hidden sm:inline-block transition-opacity ${
                        isActive ? 'opacity-100 text-[#C8B89A]' : 'opacity-0 group-hover:opacity-100 text-[#A8A8A8]'
                      }`}
                    >
                      {t('servicesOverview.exploreBtn')}
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 transition-all duration-300 rtl-flip ${
                        isActive
                          ? 'text-[#C8B89A] translate-x-1 rtl:-translate-x-1'
                          : 'text-[#A8A8A8]/40 group-hover:text-[#C8B89A]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT FLOATING DYNAMIC IMAGE PREVIEW CARD */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative overflow-hidden border border-white/10 bg-[#121212] aspect-[4/5] group shadow-2xl">
              <img
                key={activeService.id}
                src={activeService.heroImage}
                alt={activeService.title[language]}
                className="w-full h-full object-cover transition-all duration-700 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/20 to-transparent"></div>

              {/* CARD INFO OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <span className="text-xs font-mono text-[#C8B89A] tracking-widest uppercase">
                  EXPERT SERVICE {activeService.number} / 11
                </span>
                <h4 className="text-2xl font-bold uppercase text-[#F5F3EF] font-heading">
                  {activeService.title[language]}
                </h4>
                <p className="text-xs text-[#A8A8A8] line-clamp-3 font-light leading-relaxed">
                  {activeService.shortDescription[language]}
                </p>

                <button
                  onClick={() => onSelectService(activeService)}
                  className="w-full py-3 mt-4 bg-[#C8B89A] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>DÉCOUVRIR LE SERVICE EN DÉTAIL</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
