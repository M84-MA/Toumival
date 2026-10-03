import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../types';
import { ArrowUpRight, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'aluminium' | 'architecture' | 'glass'>('all');

  const categories = [
    { key: 'all', label: t('servicesCategory.viewAll') },
    { key: 'aluminium', label: t('servicesCategory.categories.aluminium') },
    { key: 'architecture', label: t('servicesCategory.categories.architecture') },
    { key: 'glass', label: t('servicesCategory.categories.glass') }
  ];

  const filteredServices = servicesData.filter(
    (s) => selectedCategory === 'all' || s.category === selectedCategory
  );

  return (
    <section id="expertise" className="py-24 lg:py-36 bg-[#0B0B0B] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C8B89A]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                NOS EXPERTISES TECHNIQUES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">
              {t('servicesCategory.title')}
            </h2>
          </div>
          <p className="text-sm text-[#A8A8A8] font-light max-w-md mt-4 md:mt-0">
            {t('servicesCategory.subtitle')}
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center gap-3 mb-16 pb-6 border-b border-white/10">
          <Layers className="w-4 h-4 text-[#C8B89A] mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as any)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                selectedCategory === cat.key
                  ? 'bg-[#C8B89A] text-[#0B0B0B] font-bold shadow-lg'
                  : 'bg-white/5 text-[#A8A8A8] hover:text-[#F5F3EF] hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const titleText = service.title[language] || service.title.fr;
            const descText = service.shortDescription[language] || service.shortDescription.fr;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group cursor-pointer bg-[#121212] border border-white/10 hover:border-[#C8B89A]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* CARD IMAGE CONTAINER WITH HOVER ZOOM */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={service.heroImage}
                    alt={titleText}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30"></div>

                  {/* NUMBER BADGE */}
                  <span className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 bg-[#0B0B0B]/80 backdrop-blur-md text-xs font-mono text-[#C8B89A] border border-white/10 font-bold">
                    {service.number}
                  </span>

                  {/* TRIGGER ICON */}
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-9 h-9 rounded-full bg-[#0B0B0B]/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F5F3EF] group-hover:bg-[#C8B89A] group-hover:text-[#0B0B0B] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 rtl-flip group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold uppercase text-[#F5F3EF] tracking-wide group-hover:text-[#C8B89A] transition-colors font-heading mb-2 line-clamp-2">
                      {titleText}
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed line-clamp-3">
                      {descText}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C8B89A] font-semibold tracking-widest uppercase">
                    <span>EXPERT SOLUTION</span>
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-block">
                      EN SAVOIR PLUS →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
