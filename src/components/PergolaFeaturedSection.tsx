import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Wind, ShieldCheck, ArrowRight } from 'lucide-react';

interface PergolaFeaturedSectionProps {
  onSelectService?: (service: any) => void;
}

export const PergolaFeaturedSection: React.FC<PergolaFeaturedSectionProps> = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isNightMode, setIsNightMode] = useState(false);
  const [louverAngle, setLouverAngle] = useState(45);

  return (
    <section className="relative w-full py-32 bg-[#0B0B0B] border-b border-white/5 overflow-hidden">
      {/* BACKGROUND FULL-WIDTH CINEMATIC VISUAL */}
      <div className="absolute inset-0 z-0">
        <img
          src={
            isNightMode
              ? "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop"
              : "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1800&auto=format&fit=crop"
          }
          alt="Pergola Bioclimatique Luxury"
          className="w-full h-full object-cover filter brightness-[0.4] transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#C8B89A]/20 border border-[#C8B89A]/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C8B89A]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">
                {t('pergolaSection.badge')}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#F5F3EF] leading-[0.95] font-heading">
              {t('pergolaSection.title')}
            </h2>

            <p className="text-lg md:text-2xl text-[#C8B89A] font-light italic">
              "{t('pergolaSection.subtitle')}"
            </p>

            <p className="text-sm md:text-base text-[#A8A8A8] font-light leading-relaxed max-w-2xl">
              {t('pergolaSection.description')}
            </p>

            {/* INTERACTIVE TOGGLE CONTROLS (NIGHT LIGHTING & LOUVER ANGLE DEMO) */}
            <div className="p-6 bg-black/60 backdrop-blur-md border border-white/10 space-y-4 max-w-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#F5F3EF] font-semibold">
                  MODE SIMULATION CLIMATIQUE
                </span>
                <button
                  onClick={() => setIsNightMode(!isNightMode)}
                  className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 text-xs rounded-full text-[#F5F3EF] transition-colors"
                >
                  {isNightMode ? <Moon className="w-3.5 h-3.5 text-[#C8B89A]" /> : <Sun className="w-3.5 h-3.5 text-yellow-400" />}
                  <span>{isNightMode ? 'Éclairage Nuit LED' : 'Soleil du Jour'}</span>
                </button>
              </div>

              {/* LOUVER SLIDER */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-[#A8A8A8]">
                  <span>Inclinaison des Lames:</span>
                  <span className="text-[#C8B89A] font-mono font-bold">{louverAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="135"
                  value={louverAngle}
                  onChange={(e) => setLouverAngle(Number(e.target.value))}
                  className="w-full accent-[#C8B89A] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#A8A8A8]/60 uppercase tracking-wider">
                  <span>0° (Étanchéité Pluie)</span>
                  <span>45° (Ombrage & Vent)</span>
                  <span>135° (Plein Soleil)</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate('/expertise')}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl"
              >
                <span>{t('pergolaSection.btn')}</span>
                <ArrowRight className="w-4 h-4 rtl-flip group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT FEATURE HIGHLIGHTS */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-black/70 backdrop-blur-xl border border-white/10 hover:border-[#C8B89A]/40 transition-colors">
              <div className="w-10 h-10 mb-3 bg-[#C8B89A]/10 border border-[#C8B89A]/30 flex items-center justify-center text-[#C8B89A]">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-[#F5F3EF] mb-1">
                LAMES MOTORISÉES ORIENTABLES
              </h3>
              <p className="text-xs text-[#A8A8A8] font-light">
                Orientation de 0° à 135° pour doser l'ensoleillement et créer une ventilation naturelle.
              </p>
            </div>

            <div className="p-6 bg-black/70 backdrop-blur-xl border border-white/10 hover:border-[#C8B89A]/40 transition-colors">
              <div className="w-10 h-10 mb-3 bg-[#C8B89A]/10 border border-[#C8B89A]/30 flex items-center justify-center text-[#C8B89A]">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-[#F5F3EF] mb-1">
                ÉVACUATION D'EAU INTÉGRÉE
              </h3>
              <p className="text-xs text-[#A8A8A8] font-light">
                Gouttières invisibles canalisant l'eau de pluie directement à l'intérieur des poteaux.
              </p>
            </div>

            <div className="p-6 bg-black/70 backdrop-blur-xl border border-white/10 hover:border-[#C8B89A]/40 transition-colors">
              <div className="w-10 h-10 mb-3 bg-[#C8B89A]/10 border border-[#C8B89A]/30 flex items-center justify-center text-[#C8B89A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase text-[#F5F3EF] mb-1">
                FERMETURES VERRE & STORES ZIP
              </h3>
              <p className="text-xs text-[#A8A8A8] font-light">
                Parois vitrées coulissantes panoramiques et stores télécommandés anti-vent.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
