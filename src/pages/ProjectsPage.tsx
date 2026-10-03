import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import type { ProjectItem } from '../types';
import { MapPin, X, ExternalLink } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';

const FILTERS = [
  { key: 'all',       labelFr: 'TOUS LES PROJETS',          labelEn: 'ALL PROJECTS' },
  { key: 'aluminium', labelFr: 'ALUMINIUM',                  labelEn: 'ALUMINIUM' },
  { key: 'facade',    labelFr: 'FAÇADES & MUR RIDEAU',       labelEn: 'FAÇADES & CURTAIN WALLS' },
  { key: 'pergola',   labelFr: 'PERGOLA & OUTDOOR',          labelEn: 'PERGOLA & OUTDOOR' },
  { key: 'staircase', labelFr: 'ESCALIERS & GARDE-CORPS',    labelEn: 'STAIRS & RAILINGS' },
  { key: 'glass',     labelFr: 'VERRIÈRES & VERRE DÉCO',     labelEn: 'GLASS PARTITIONS & DÉCOR' },
  { key: 'shower',    labelFr: 'DOUCHES & MIROIRS',          labelEn: 'SHOWERS & MIRRORS' },
];

/* ─── PROJECT DETAIL PANEL ──────────────────────────────────────────────── */
const ProjectDetailPanel: React.FC<{
  project: ProjectItem;
  lang: 'fr' | 'en' | 'ar';
  onClose: () => void;
}> = ({ project, lang, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const title    = project.title[lang]       || project.title.fr;
  const category = project.category[lang]    || project.category.fr;
  const location = project.location[lang]    || project.location.fr;
  const desc     = project.description[lang] || project.description.fr;
  const allImages = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.mainImage];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl overflow-y-auto flex items-start justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      <div className="relative max-w-5xl w-full bg-[#121212] border border-white/20 shadow-2xl my-6 overflow-hidden">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-[#F5F3EF] hover:text-[#C8B89A] flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MAIN IMAGE */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          <img
            key={activeImg}
            src={allImages[activeImg]}
            alt={title}
            className="w-full h-full object-cover brightness-90 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

          {/* YEAR & LOCATION OVERLAY */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="px-3 py-1 bg-[#0B0B0B]/80 backdrop-blur-md text-xs font-mono text-[#C8B89A] border border-white/10 font-bold">
              {project.year}
            </span>
            <span className="px-3 py-1 bg-[#0B0B0B]/70 backdrop-blur-md text-[11px] text-[#F5F3EF] border border-white/10">
              {location}
            </span>
          </div>
        </div>

        {/* THUMBNAIL STRIP */}
        {allImages.length > 1 && (
          <div className="flex gap-3 p-4 bg-[#0B0B0B] border-b border-white/10 overflow-x-auto">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`shrink-0 w-20 h-14 overflow-hidden border-2 transition-all ${
                  activeImg === i ? 'border-[#C8B89A]' : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* CONTENT */}
        <div className="p-8 md:p-12 space-y-8">
          {/* HEADER */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs text-[#C8B89A] uppercase tracking-widest font-mono">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#F5F3EF] font-heading leading-tight">
              {title}
            </h2>
            <p className="text-sm text-[#C8B89A] font-light">{category}</p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base text-[#A8A8A8] font-light leading-relaxed border-l-2 border-[#C8B89A]/50 pl-6">
            {desc}
          </p>

          {/* SERVICES USED */}
          {project.servicesUsed && project.servicesUsed.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-[#C8B89A] font-bold mb-4">
                SERVICES & MATÉRIAUX DÉPLOYÉS
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.servicesUsed.map((svc, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-white/5 border border-white/10 text-xs text-[#F5F3EF] hover:border-[#C8B89A]/50 transition-colors"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FOOTER ACTIONS */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="https://instagram.com/toumival_sarl"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-[#A8A8A8] hover:text-[#C8B89A] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>VOIR PLUS SUR INSTAGRAM</span>
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#C8B89A] text-[#0B0B0B] text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
            >
              FERMER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── MAIN PAGE ─────────────────────────────────────────────────────────── */
export const ProjectsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const lang = language as 'fr' | 'en' | 'ar';

  const [selectedFilter, setSelectedFilter]   = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter(
    p => selectedFilter === 'all' || p.categoryKey === selectedFilter
  );

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F3EF] selection:bg-[#C8B89A] selection:text-[#0B0B0B]">
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden">
        {/* LARGE BG IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/746230783_122181377942782111_9122457582954665373_n.jpg')` }}
        >
          <div className="absolute inset-0 bg-[#0B0B0B]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-xs text-[#A8A8A8] mb-8">
            <Link to="/" className="hover:text-[#C8B89A] transition-colors">ACCUEIL</Link>
            <span>/</span>
            <span className="text-[#C8B89A]">NOS RÉALISATIONS</span>
          </div>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C8B89A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8B89A] font-semibold">PORTFOLIO ARCHITECTURAL</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading leading-[0.9] mb-6">
            NOS<br />
            <span className="text-[#C8B89A]">RÉALISATIONS</span>
          </h1>

          <p className="text-sm md:text-base text-[#A8A8A8] font-light max-w-xl leading-relaxed">
            {t('projects.subtitle') || 'Chaque réalisation porte la signature TOUMIVAL — précision absolue, matériaux nobles, finitions irréprochables.'}
          </p>

          {/* STATS */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { n: projectsData.length + '+', l: 'PROJETS RÉALISÉS' },
              { n: '10+', l: 'ANNÉES D\'EXPÉRIENCE' },
              { n: '5', l: 'CATÉGORIES DE SERVICES' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-3xl font-extrabold font-mono text-[#C8B89A]">{s.n}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A8A8A8]">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-[72px] z-30 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center gap-3">
          {FILTERS.map(f => {
            const label = lang === 'en' ? f.labelEn : f.labelFr;
            const count = f.key === 'all' ? projectsData.length : projectsData.filter(p => p.categoryKey === f.key).length;
            return (
              <button
                key={f.key}
                onClick={() => setSelectedFilter(f.key)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  selectedFilter === f.key
                    ? 'bg-[#C8B89A] text-[#0B0B0B] font-bold shadow-lg'
                    : 'bg-white/5 text-[#A8A8A8] hover:text-[#F5F3EF] hover:bg-white/10'
                }`}
              >
                {label}
                <span className={`ml-2 font-mono ${selectedFilter === f.key ? 'opacity-60' : 'opacity-40'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* MOSAIC LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const title    = project.title[lang]    || project.title.fr;
              const category = project.category[lang] || project.category.fr;
              const location = project.location[lang] || project.location.fr;

              // Feature first project larger
              const isFeatured = idx === 0 && selectedFilter === 'all';

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group cursor-pointer bg-[#121212] border border-white/10 hover:border-[#C8B89A]/60 transition-all duration-500 overflow-hidden shadow-xl ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* IMAGE */}
                  <div className={`relative overflow-hidden bg-black ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <img
                      src={project.mainImage}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

                    {/* YEAR BADGE */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#0B0B0B]/80 backdrop-blur-md text-[11px] font-mono text-[#C8B89A] border border-white/10">
                      {project.year}
                    </span>

                    {/* EXPAND ICON */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0B0B]/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F5F3EF] group-hover:bg-[#C8B89A] group-hover:text-[#0B0B0B] transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-[#0B0B0B]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-bold border border-[#C8B89A]/50 px-6 py-3">
                        VOIR EN DÉTAIL
                      </span>
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-[#C8B89A] tracking-widest uppercase">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{location}</span>
                    </div>
                    <h3 className={`font-bold uppercase text-[#F5F3EF] group-hover:text-[#C8B89A] transition-colors font-heading ${
                      isFeatured ? 'text-2xl' : 'text-xl'
                    }`}>
                      {title}
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light">{category}</p>

                    {isFeatured && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.servicesUsed.slice(0, 3).map((svc, i) => (
                          <span key={i} className="px-2 py-0.5 bg-white/5 text-[10px] text-[#A8A8A8] border border-white/10">
                            {svc}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* EMPTY STATE */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#A8A8A8] text-sm">Aucun projet dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 bg-[#121212] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C8B89A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8B89A] font-semibold">VOTRE PROJET</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#F5F3EF] font-heading">
            VOTRE VISION,<br />NOTRE RÉALISATION
          </h2>
          <p className="text-sm text-[#A8A8A8] max-w-xl mx-auto font-light leading-relaxed">
            Rejoignez les centaines de clients qui nous ont confié leurs projets résidentiels et commerciaux à Marrakech et au Maroc.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="tel:+212668334555"
              className="px-8 py-4 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
            >
              +212 668-334555
            </a>
            <a
              href="https://wa.me/212668334555"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-[#C8B89A]/50 hover:border-[#C8B89A] text-xs font-bold uppercase tracking-[0.2em] text-[#F5F3EF] hover:text-[#C8B89A] transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127zm11.393-4.707c-.29-.145-1.713-.846-1.979-.942-.266-.096-.46-.145-.654.145-.194.29-.75 1.042-.919 1.235-.17.193-.339.217-.629.072-1.632-.816-2.92-1.464-4.088-3.473-.312-.536.312-.498.894-1.663.096-.193.048-.362-.024-.508-.073-.145-.654-1.574-.896-2.155-.236-.566-.476-.489-.654-.498-.17-.008-.363-.008-.556-.008-.193 0-.508.072-.774.362-.266.29-1.016.993-1.016 2.423 0 1.43 1.041 2.81 1.187 3.003.145.193 2.049 3.129 4.965 4.389 2.115.913 2.926.969 3.992.812 1.139-.168 1.713-.7 1.954-1.376.241-.676.241-1.256.17-1.376-.072-.12-.266-.193-.556-.338z" />
              </svg>
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <Footer onSelectService={() => {}} />
      <QuoteModal />

      {selectedProject && (
        <ProjectDetailPanel
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
