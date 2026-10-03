import React, { useState } from 'react';
import { Shield, Flame, VolumeX, Eye } from 'lucide-react';

export const AluminiumSection: React.FC = () => {
  const [activeAttr, setActiveAttr] = useState(0);

  const attributes = [
    {
      key: "THERMIQUE",
      icon: Flame,
      value: "Uw < 1.1 W/m²K",
      desc: "Rupture de pont thermique en polyamide armé de fibre de verre. Réduction massive des transferts de chaleur pour un climat intérieur parfait.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      key: "ACOUSTIQUE",
      icon: VolumeX,
      value: "Rw -48 dB",
      desc: "Atténuation sonore de pointe. Isolation phonique optimale contre le bruit urbain, le vent et les agitations extérieures.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      key: "SÉCURITÉ",
      icon: Shield,
      value: "RC3 / A2P***",
      desc: "Verrouillage multipoints anti-crochetage & verre feuilleté anti-effraction pour protéger votre résidence en toute sérénité.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      key: "ESTHÉTIQUE",
      icon: Eye,
      value: "Chicane 20 mm",
      desc: "Profils aluminium ultra-fins à cadres encastrés dans les murs. Transparence maximale et lignes contemporaines pures.",
      image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#070707] text-[#F5F3EF] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C8B89A]"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8B89A] font-bold">
              INGÉNIERIE DE PRÉCISION
            </span>
            <span className="w-8 h-[1px] bg-[#C8B89A]"></span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading leading-tight">
            PRÉCISION. <span className="text-[#C8B89A]">PERFORMANCE.</span> DESIGN.
          </h2>

          <p className="text-sm md:text-base text-[#A8A8A8] font-light">
            Une technologie de profils aluminium pensée pour l'architecture de haute exigence.
          </p>
        </div>

        {/* 4 ATTRIBUTES INTERACTIVE DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT 4 BUTTONS */}
          <div className="lg:col-span-5 space-y-4">
            {attributes.map((attr, idx) => {
              const Icon = attr.icon;
              const isActive = activeAttr === idx;

              return (
                <div
                  key={attr.key}
                  onMouseEnter={() => setActiveAttr(idx)}
                  onClick={() => setActiveAttr(idx)}
                  className={`p-6 cursor-pointer border transition-all duration-500 ${
                    isActive
                      ? 'bg-white/[0.05] border-[#C8B89A] shadow-2xl pl-8 rtl:pl-6 rtl:pr-8'
                      : 'bg-white/[0.01] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-9 h-9 rounded-none flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#C8B89A] text-[#0B0B0B]' : 'bg-white/5 text-[#C8B89A]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3
                        className={`text-lg uppercase tracking-[0.2em] font-bold font-heading transition-colors ${
                          isActive ? 'text-[#F5F3EF]' : 'text-[#A8A8A8]'
                        }`}
                      >
                        {attr.key}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#C8B89A]">
                      {attr.value}
                    </span>
                  </div>

                  <p className="text-xs text-[#A8A8A8] font-light leading-relaxed pl-13 rtl:pl-0 rtl:pr-13">
                    {attr.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT CLOSE-UP ARCHITECTURAL PHOTOGRAPHY */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-white/10 bg-[#121212] group shadow-2xl">
              <img
                key={attributes[activeAttr].key}
                src={attributes[activeAttr].image}
                alt={attributes[activeAttr].key}
                className="w-full h-full object-cover transition-all duration-700 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-black/30"></div>

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md border border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#C8B89A] tracking-widest block">
                    ALUMINIUM PROFILE MACRO DETAIL
                  </span>
                  <span className="text-lg font-bold text-[#F5F3EF] uppercase font-heading">
                    ATTRIBUTE: {attributes[activeAttr].key}
                  </span>
                </div>
                <span className="text-2xl font-extrabold text-[#C8B89A] font-heading">
                  0{activeAttr + 1} / 04
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
