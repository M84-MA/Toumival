import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../types';
import { ArrowRight, Eye } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';

/* ─── INTERACTIVE INDEX LIST + IMAGE PREVIEW ─────────────────────────────── */
const InteractiveList: React.FC<{
  lang: 'fr' | 'en' | 'ar';
  onSelect: (svc: ServiceItem) => void;
}> = ({ lang, onSelect }) => {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* LEFT: INTERACTIVE LIST */}
      <div className="lg:col-span-7 space-y-1">
        {servicesData.map(service => {
          const isActive = service.id === activeId;
          const title    = service.title[lang] || service.title.fr;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveId(service.id)}
              onClick={() => onSelect(service)}
              className={`group cursor-pointer py-5 px-6 border-b border-white/5 transition-all duration-300 flex items-center justify-between ${
                isActive
                  ? 'bg-white/[0.04] border-[#C8B89A]/50 pl-8'
                  : 'hover:bg-white/[0.02] hover:pl-8'
              }`}
            >
              <div className="flex items-center gap-6">
                <span className={`text-sm font-mono tracking-widest transition-colors ${
                  isActive ? 'text-[#C8B89A] font-bold' : 'text-[#A8A8A8]/60 group-hover:text-[#C8B89A]'
                }`}>
                  {service.number}
                </span>
                <h3 className={`text-base md:text-xl uppercase font-medium tracking-wide transition-all ${
                  isActive ? 'text-[#F5F3EF] translate-x-2 font-bold' : 'text-[#A8A8A8] group-hover:text-[#F5F3EF]'
                }`}>
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[11px] uppercase tracking-wider hidden sm:inline-block transition-opacity ${
                  isActive ? 'opacity-100 text-[#C8B89A]' : 'opacity-0 group-hover:opacity-100 text-[#A8A8A8]'
                }`}>
                  EXPLORER
                </span>
                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                  isActive ? 'text-[#C8B89A] translate-x-1' : 'text-[#A8A8A8]/40 group-hover:text-[#C8B89A]'
                }`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT: STICKY IMAGE PREVIEW */}
      <div className="lg:col-span-5 sticky top-32">
        <div className="relative overflow-hidden border border-white/10 bg-[#121212] aspect-[4/5] shadow-2xl">
          <img
            key={activeService.id}
            src={activeService.heroImage}
            alt={activeService.title[lang]}
            className="w-full h-full object-cover transition-all duration-700 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/20 to-transparent" />

          {/* OVERLAY INFO */}
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
            <span className="text-xs font-mono text-[#C8B89A] tracking-widest uppercase">
              EXPERT SERVICE {activeService.number} / 11
            </span>
            <h4 className="text-2xl font-bold uppercase text-[#F5F3EF] font-heading">
              {activeService.title[lang]}
            </h4>
            <p className="text-xs text-[#A8A8A8] line-clamp-3 font-light leading-relaxed">
              {activeService.shortDescription[lang]}
            </p>
            <button
              onClick={() => onSelect(activeService)}
              className="w-full py-3 mt-4 bg-[#C8B89A] text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>VOIR EN DÉTAIL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── SERVICE DETAIL PANEL ──────────────────────────────────────────────── */
const ServiceDetailPanel: React.FC<{
  service: ServiceItem;
  lang: 'fr' | 'en' | 'ar';
  onClose: () => void;
  onNext: () => void;
}> = ({ service, lang, onClose, onNext }) => {
  const { openQuoteModal } = useLanguage();
  const title    = service.title[lang]           || service.title.fr;
  const subtitle = service.subtitle?.[lang]      || service.subtitle?.fr || '';
  const fullDesc = service.fullDescription[lang] || service.fullDescription.fr;
  const features = service.keyFeatures[lang]     || service.keyFeatures.fr;

  const currentIndex = servicesData.findIndex(s => s.id === service.id);
  const nextSvc      = servicesData[(currentIndex + 1) % servicesData.length];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl overflow-y-auto flex items-start justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      <div className="relative max-w-5xl w-full bg-[#121212] border border-white/20 shadow-2xl my-6 overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-[#F5F3EF] hover:text-[#C8B89A] flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-[21/9] w-full bg-black overflow-hidden">
          <img src={service.heroImage} alt={title} className="w-full h-full object-cover brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <span className="text-4xl font-extrabold font-mono text-[#C8B89A]">SERVICE {service.number} / 11</span>
            <span className="text-xs uppercase font-mono tracking-widest text-[#F5F3EF] px-3 py-1 bg-black/80 border border-white/10">
              {service.category.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-14 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">{title}</h2>
            {subtitle && <p className="text-lg text-[#C8B89A] font-light italic">{subtitle}</p>}
            <p className="text-sm md:text-base text-[#A8A8A8] font-light leading-relaxed pt-2">{fullDesc}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">CARACTÉRISTIQUES D'EXCELLENCE</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 border border-white/5">
                  <svg className="w-5 h-5 text-[#C8B89A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-[#F5F3EF] font-light leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {service.examples && service.examples.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">EXEMPLES & EXÉCUTIONS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {service.examples.map((ex, i) => {
                  const exTitle = ex.title[lang] || ex.title.fr;
                  const exSub   = ex.subtitle?.[lang] || ex.subtitle?.fr || '';
                  return (
                    <div key={i} className="group bg-[#0B0B0B] border border-white/10 overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={ex.image} alt={exTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4 space-y-1">
                        <h4 className="text-sm font-bold uppercase text-[#F5F3EF] font-heading">{exTitle}</h4>
                        {exSub && <p className="text-[11px] text-[#A8A8A8] font-light">{exSub}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {service.technicalSpecs && service.technicalSpecs.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">SPÉCIFICATIONS TECHNIQUES</h3>
              <div className="divide-y divide-white/10 border border-white/10 bg-[#0B0B0B]">
                {service.technicalSpecs.map((spec, i) => (
                  <div key={i} className="p-4 flex items-center justify-between text-xs">
                    <span className="text-[#A8A8A8] font-light">{spec.label[lang] || spec.label.fr}</span>
                    <span className="text-[#F5F3EF] font-bold font-mono">{spec.value[lang] || spec.value.fr}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => { onClose(); openQuoteModal(title); }}
              className="w-full sm:w-auto px-8 py-4 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
            >
              DEMANDER UN DEVIS POUR CE SERVICE
            </button>
            <button
              onClick={onNext}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 border border-white/20 hover:border-[#C8B89A] text-xs uppercase tracking-[0.18em] text-[#F5F3EF] transition-colors"
            >
              SERVICE SUIVANT ({nextSvc.number}) →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── MAIN PAGE ─────────────────────────────────────────────────────────── */
export const SolutionsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const lang = language as 'fr' | 'en' | 'ar';

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleNext = () => {
    if (!selectedService) return;
    const idx     = servicesData.findIndex(s => s.id === selectedService.id);
    const nextSvc = servicesData[(idx + 1) % servicesData.length];
    setSelectedService(nextSvc);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F3EF] selection:bg-[#C8B89A] selection:text-[#0B0B0B]">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 bg-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8B89A]/4 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8B89A]/3 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-xs text-[#A8A8A8] mb-8">
            <Link to="/" className="hover:text-[#C8B89A] transition-colors">ACCUEIL</Link>
            <span>/</span>
            <span className="text-[#C8B89A]">NOS SOLUTIONS</span>
          </div>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C8B89A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8B89A] font-semibold">INDEX DES SERVICES (11)</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading leading-[0.9] mb-6">
            NOS<br />
            <span className="text-[#C8B89A]">SOLUTIONS</span>
          </h1>

          <p className="text-sm md:text-base text-[#A8A8A8] font-light max-w-xl leading-relaxed">
            {t('servicesOverview.subtitle') || 'Chaque projet mérite une approche unique. Explorez nos 11 solutions architecturales sur mesure.'}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-24 bg-[#C8B89A]/50" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A8A8]/60">TOUMIVAL SARL — MARRAKECH</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LIST */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 pb-8 border-b border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#A8A8A8]">
              SURVOLEZ UN SERVICE POUR PRÉVISUALISER — CLIQUEZ POUR VOIR EN DÉTAIL
            </p>
          </div>
          <InteractiveList lang={lang} onSelect={(svc) => setSelectedService(svc)} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-[#121212] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] mb-2">UNE QUESTION ?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#F5F3EF] font-heading">
              PARLONS DE VOTRE PROJET
            </h2>
          </div>
          <a
            href="#contact"
            onClick={() => window.location.href = '/#contact'}
            className="shrink-0 px-8 py-4 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            NOUS CONTACTER →
          </a>
        </div>
      </section>

      <Footer onSelectService={(svc) => setSelectedService(svc)} />
      <QuoteModal />

      {selectedService && (
        <ServiceDetailPanel
          service={selectedService}
          lang={lang}
          onClose={() => setSelectedService(null)}
          onNext={handleNext}
        />
      )}
    </div>
  );
};
