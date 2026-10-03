import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Building2, ArrowUpRight } from 'lucide-react';

interface CurtainWallSectionProps {
  onSelectService?: (service: any) => void;
}

export const CurtainWallSection: React.FC<CurtainWallSectionProps> = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-36 bg-[#0B0B0B] border-b border-white/5 overflow-hidden">
      {/* ARCHITECTURAL GRID BACKDROP OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt="Mur Rideau Façade Vitrée"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent"></div>
        {/* STRUCTURAL GRID OVERLAY */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#C8B89A]/20 border border-[#C8B89A]/40 backdrop-blur-md">
            <Building2 className="w-4 h-4 text-[#C8B89A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">
              FAÇADES COMMERCIALES & TERTIAIRES
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#F5F3EF] leading-[0.95] font-heading">
            {t('curtainWallSection.title')}
          </h2>

          <p className="text-lg md:text-xl text-[#A8A8A8] font-light leading-relaxed">
            {t('curtainWallSection.description')}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 max-w-lg">
            <div>
              <span className="block text-3xl font-extrabold text-[#C8B89A] font-heading">VEC / VEP</span>
              <span className="text-xs text-[#A8A8A8] uppercase tracking-wider font-light">
                Vitrage Extérieur Collé ou Parclosé
              </span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-[#F5F3EF] font-heading">CLASS 6</span>
              <span className="text-xs text-[#A8A8A8] uppercase tracking-wider font-light">
                Résistance aux vents & séismes
              </span>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => navigate('/expertise')}
              className="group inline-flex items-center gap-4 px-8 py-4 bg-[#F5F3EF] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8B89A] transition-all duration-300 shadow-2xl"
            >
              <span>DÉCOUVRIR LES SOLUTIONS MUR RIDEAU</span>
              <ArrowUpRight className="w-4 h-4 rtl-flip group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
