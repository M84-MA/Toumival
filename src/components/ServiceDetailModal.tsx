import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ServiceItem } from '../types';
import { servicesData } from '../data/services';
import { X, CheckCircle2 } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectService
}) => {
  const { language, openQuoteModal } = useLanguage();

  if (!service) return null;

  const titleText = service.title[language] || service.title.fr;
  const subtitleText = service.subtitle ? (service.subtitle[language] || service.subtitle.fr) : '';
  const fullDesc = service.fullDescription[language] || service.fullDescription.fr;
  const features = service.keyFeatures[language] || service.keyFeatures.fr;

  // Find next service index
  const currentIndex = servicesData.findIndex((s) => s.id === service.id);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl overflow-y-auto flex items-start justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      <div className="relative max-w-5xl w-full bg-[#121212] border border-white/20 shadow-2xl my-6 overflow-hidden">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-[#F5F3EF] hover:text-[#C8B89A] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HERO VISUAL */}
        <div className="relative aspect-[21/9] w-full bg-black overflow-hidden">
          <img
            src={service.heroImage}
            alt={titleText}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <span className="text-4xl font-extrabold font-mono text-[#C8B89A]">
              SERVICE {service.number} / 11
            </span>
            <span className="text-xs uppercase font-mono tracking-widest text-[#F5F3EF] px-3 py-1 bg-black/80 border border-white/10">
              {service.category.toUpperCase()}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 md:p-14 space-y-12">
          
          {/* HEADER & DESCRIPTION */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">
              {titleText}
            </h2>

            {subtitleText && (
              <p className="text-lg text-[#C8B89A] font-light italic">
                "{subtitleText}"
              </p>
            )}

            <p className="text-sm md:text-base text-[#A8A8A8] font-light leading-relaxed pt-2">
              {fullDesc}
            </p>
          </div>

          {/* KEY FEATURES BULLETS */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">
              CARACTÉRISTIQUES D'EXCELLENCE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8B89A] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#F5F3EF] font-light leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* EXAMPLES & PROJECTS EXAMPLES */}
          {service.examples && service.examples.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">
                EXEMPLES & EXÉCUTIONS ARCHITECTURALES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {service.examples.map((ex, i) => {
                  const exTitle = ex.title[language] || ex.title.fr;
                  const exSub = ex.subtitle ? (ex.subtitle[language] || ex.subtitle.fr) : '';

                  return (
                    <div key={i} className="group bg-[#0B0B0B] border border-white/10 overflow-hidden">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={ex.image}
                          alt={exTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 space-y-1">
                        <h4 className="text-sm font-bold uppercase text-[#F5F3EF] font-heading">
                          {exTitle}
                        </h4>
                        {exSub && (
                          <p className="text-[11px] text-[#A8A8A8] font-light">
                            {exSub}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TECHNICAL SPECS TABLE */}
          {service.technicalSpecs && service.technicalSpecs.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">
                SPÉCIFICATIONS TECHNIQUES
              </h3>
              <div className="divide-y divide-white/10 border border-white/10 bg-[#0B0B0B]">
                {service.technicalSpecs.map((spec, i) => (
                  <div key={i} className="p-4 flex items-center justify-between text-xs">
                    <span className="text-[#A8A8A8] font-light">{spec.label[language] || spec.label.fr}</span>
                    <span className="text-[#F5F3EF] font-bold font-mono">{spec.value[language] || spec.value.fr}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACTIONS & NEXT SERVICE FLOW */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => {
                onClose();
                openQuoteModal(titleText);
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
            >
              DEMANDER UN DEVIS POUR CE SERVICE
            </button>

            <button
              onClick={() => onSelectService(nextService)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 border border-white/20 hover:border-[#C8B89A] text-xs uppercase tracking-[0.18em] text-[#F5F3EF] transition-colors"
            >
              <span>SERVICE SUIVANT ({nextService.number}) →</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
