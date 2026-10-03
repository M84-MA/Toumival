import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../types';
import { ArrowUpRight, Layers, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';

const CATEGORIES = [
  { key: 'all',          labelFr: 'TOUT VOIR',       labelEn: 'VIEW ALL',         labelAr: 'عرض الكل' },
  { key: 'aluminium',    labelFr: 'ALUMINIUM',        labelEn: 'ALUMINIUM',        labelAr: 'ألمنيوم' },
  { key: 'architecture', labelFr: 'ARCHITECTURE',     labelEn: 'ARCHITECTURE',     labelAr: 'معمارية' },
  { key: 'glass',        labelFr: 'VERRE & DÉCOR',   labelEn: 'GLASS & DÉCOR',   labelAr: 'زجاج وديكور' },
];

const ServiceCard: React.FC<{
  service: ServiceItem;
  lang: 'fr' | 'en' | 'ar';
  onClick: () => void;
}> = ({ service, lang, onClick }) => {
  const title = service.title[lang] || service.title.fr;
  const desc  = service.shortDescription[lang] || service.shortDescription.fr;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-[#121212] border border-white/10 hover:border-[#C8B89A]/60 transition-all duration-500 overflow-hidden shadow-xl flex flex-col"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={service.heroImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
        {/* NUMBER */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-[#0B0B0B]/80 backdrop-blur-md text-xs font-mono text-[#C8B89A] border border-white/10 font-bold">
          {service.number}
        </span>
        {/* ARROW */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0B0B]/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F5F3EF] group-hover:bg-[#C8B89A] group-hover:text-[#0B0B0B] transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
        {/* CATEGORY PILL */}
        <span className="absolute bottom-4 left-4 px-2 py-0.5 text-[10px] uppercase tracking-widest font-bold bg-[#C8B89A]/20 text-[#C8B89A] border border-[#C8B89A]/30">
          {service.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base md:text-lg font-bold uppercase text-[#F5F3EF] tracking-wide group-hover:text-[#C8B89A] transition-colors font-heading mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-[#A8A8A8] font-light leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>
        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C8B89A] font-semibold tracking-widest uppercase">
          <span>EXPERT SOLUTION</span>
          <span className="group-hover:translate-x-1 transition-transform inline-block">DÉCOUVRIR →</span>
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

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-[#F5F3EF] hover:text-[#C8B89A] flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* HERO VISUAL */}
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

        {/* CONTENT */}
        <div className="p-8 md:p-14 space-y-12">
          {/* TITLE & DESC */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">{title}</h2>
            {subtitle && <p className="text-lg text-[#C8B89A] font-light italic">{subtitle}</p>}
            <p className="text-sm md:text-base text-[#A8A8A8] font-light leading-relaxed pt-2">{fullDesc}</p>
          </div>

          {/* KEY FEATURES */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">CARACTÉRISTIQUES D'EXCELLENCE</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8B89A] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#F5F3EF] font-light leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GALLERY EXAMPLES */}
          {service.examples && service.examples.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold">EXEMPLES & EXÉCUTIONS ARCHITECTURALES</h3>
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

          {/* TECHNICAL SPECS */}
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

          {/* ACTIONS */}
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
export const ExpertisePage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'aluminium' | 'architecture' | 'glass'>('all');
  const [selectedService, setSelectedService]   = useState<ServiceItem | null>(null);

  const lang = language as 'fr' | 'en' | 'ar';

  const filteredServices = servicesData.filter(s => selectedCategory === 'all' || s.category === selectedCategory);

  const handleNext = () => {
    if (!selectedService) return;
    const idx     = servicesData.findIndex(s => s.id === selectedService.id);
    const nextSvc = servicesData[(idx + 1) % servicesData.length];
    setSelectedService(nextSvc);
  };

  // Scroll lock when panel open
  useEffect(() => {
    if (selectedService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F3EF] selection:bg-[#C8B89A] selection:text-[#0B0B0B]">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 bg-[#0B0B0B] overflow-hidden">
        {/* BG ACCENT */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C8B89A]/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C8B89A]/3 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-xs text-[#A8A8A8] mb-8">
            <Link to="/" className="hover:text-[#C8B89A] transition-colors">ACCUEIL</Link>
            <span>/</span>
            <span className="text-[#C8B89A]">NOS EXPERTISES</span>
          </div>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C8B89A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8B89A] font-semibold">11 SOLUTIONS EXPERTISES</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading leading-[0.9] mb-6">
            NOS<br />
            <span className="text-[#C8B89A]">EXPERTISES</span>
          </h1>

          <p className="text-sm md:text-base text-[#A8A8A8] font-light max-w-xl leading-relaxed">
            {t('servicesCategory.subtitle') || 'Du profil aluminium haute gamme à la façade architecturale, nous maîtrisons chaque discipline pour sublimer vos espaces.'}
          </p>

          {/* DECORATIVE LINE */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-24 bg-[#C8B89A]/50" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8A8A8]/60">TOUMIVAL SARL — MARRAKECH</span>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="sticky top-[72px] z-30 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center gap-3">
          <Layers className="w-4 h-4 text-[#C8B89A] mr-1 shrink-0" />
          {CATEGORIES.map(cat => {
            const label = lang === 'en' ? cat.labelEn : lang === 'ar' ? cat.labelAr : cat.labelFr;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key as any)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                  selectedCategory === cat.key
                    ? 'bg-[#C8B89A] text-[#0B0B0B] font-bold shadow-lg'
                    : 'bg-white/5 text-[#A8A8A8] hover:text-[#F5F3EF] hover:bg-white/10'
                }`}
              >
                {label}
                {cat.key !== 'all' && (
                  <span className="ml-2 opacity-60 font-mono">
                    ({servicesData.filter(s => s.category === cat.key).length})
                  </span>
                )}
              </button>
            );
          })}

          <span className="ml-auto text-[11px] text-[#A8A8A8]/60 hidden md:inline">
            {filteredServices.length} SERVICE{filteredServices.length > 1 ? 'S' : ''}
          </span>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                lang={lang}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE STATS BAND */}
      <section className="py-16 bg-[#121212] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '11', label: 'EXPERTISES MÉTIERS' },
            { number: '10+', label: 'ANS D\'EXPÉRIENCE' },
            { number: '500+', label: 'PROJETS RÉALISÉS' },
            { number: '100%', label: 'SUR MESURE' },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold font-mono text-[#C8B89A]">{stat.number}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#A8A8A8] font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer onSelectService={(svc) => setSelectedService(svc)} />
      <QuoteModal />

      {/* SERVICE DETAIL OVERLAY */}
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
