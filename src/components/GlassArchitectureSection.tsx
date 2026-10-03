import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const GlassArchitectureSection: React.FC = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const galleryItems = [
    {
      title: "Garde-Corps en Verre Autoporteur",
      tag: "Balustrade Verre",
      image: "/732036209_122179836764782111_2389765880035327000_n.jpg",
      desc: "Garde-corps en verre feuilleté trempé Stadip encastré au sol pour terrasses et balcons."
    },
    {
      title: "Escalier & Garde-corps Design",
      tag: "Structural Glass",
      image: "/733483450_122179836722782111_362020625330318421_n.jpg",
      desc: "Protection vitrée sur mesure avec pinces inox et transparence absolue."
    },
    {
      title: "Verrière Atelier Profils Noirs",
      tag: "Verrière Sur Mesure",
      image: "/618127748_122163604754782111_157672570205474293_n.jpg",
      desc: "Séparation vitrée d'intérieur à finesse industrielle noir mat."
    },
    {
      title: "Paroi de Douche & Miroir Tactile",
      tag: "Verre & Miroiterie",
      image: "/624356465_122164177550782111_8010093476786226226_n.jpg",
      desc: "Verre trempé 10mm anticalcaire et miroir Saint-Gobain Miralite."
    },
    {
      title: "Baies Vitrées Coulissantes Aluminium",
      tag: "Menuiserie Aluminium",
      image: "/482080799_122110571822782111_258668985633254309_n.jpg",
      desc: "Grandes baies vitrées coulissantes à rupture thermique par TOUMIVAL SARL."
    },
    {
      title: "Pergola Bioclimatique & Fermetures",
      tag: "Outdoor System",
      image: "/733891187_122179836890782111_2255219163567887197_n.jpg",
      desc: "Pergola à lames motorisées avec baies vitrées coulissantes panoramiques."
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#0B0B0B] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <Sparkles className="w-4 h-4 text-[#C8B89A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                GALERIE DES RÉALISATIONS TOUMIVAL
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">
              {t('glassSection.title')}
            </h2>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[#C8B89A] bg-white/5 hover:bg-[#C8B89A] hover:text-[#0B0B0B] text-[#F5F3EF] flex items-center justify-center transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 rtl-flip" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 hover:border-[#C8B89A] bg-white/5 hover:bg-[#C8B89A] hover:text-[#0B0B0B] text-[#F5F3EF] flex items-center justify-center transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 rtl-flip" />
            </button>
          </div>
        </div>
      </div>

      {/* HORIZONTAL SCROLLING GALLERY WITH REAL PHOTOS */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 rtl:space-x-reverse overflow-x-auto no-scrollbar px-6 md:px-12 scroll-snap-x pb-8"
      >
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-none w-[300px] sm:w-[400px] lg:w-[450px] scroll-snap-item group bg-[#121212] border border-white/10 hover:border-[#C8B89A]/50 transition-all duration-500 overflow-hidden"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20"></div>

              {/* TAG */}
              <span className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 bg-[#0B0B0B]/80 backdrop-blur-md text-[10px] uppercase font-mono tracking-widest text-[#C8B89A] border border-white/10">
                {item.tag}
              </span>
            </div>

            <div className="p-6 space-y-2">
              <h3 className="text-lg font-bold uppercase text-[#F5F3EF] group-hover:text-[#C8B89A] transition-colors font-heading">
                {item.title}
              </h3>
              <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
