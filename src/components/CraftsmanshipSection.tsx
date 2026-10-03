import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const { t } = useLanguage();

  const items = t('craftsmanship.items') as Array<{ heading: string; desc: string }>;

  const macroPhotos = [
    {
      title: "Profil Aluminium Minimaliste",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Chants de Verre Polis Chanfreinés",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Poignées Inox et Serrures Encastrées",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Joints d'Étanchéité Silicone Extrudé",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#0B0B0B] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#C8B89A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8B89A] font-bold">
              HAUTE SELLERIE ARCHITECTURALE
            </span>
            <Sparkles className="w-4 h-4 text-[#C8B89A]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading leading-tight">
            {t('craftsmanship.title')}
          </h2>

          <p className="text-sm md:text-base text-[#A8A8A8] font-light">
            {t('craftsmanship.subtitle')}
          </p>
        </div>

        {/* 3 STATEMENTS PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#121212] border border-white/10 hover:border-[#C8B89A]/50 transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-[#C8B89A]">
                  0{idx + 1}
                </span>
                <CheckCircle2 className="w-5 h-5 text-[#C8B89A]" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#F5F3EF] font-heading">
                {item.heading}
              </h3>
              <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* MACRO PHOTOGRAPHY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {macroPhotos.map((photo, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden bg-[#121212] border border-white/10"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <span className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-[#F5F3EF] uppercase tracking-wider font-heading line-clamp-1">
                {photo.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
