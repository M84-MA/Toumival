import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import type { ProjectItem } from '../types';
import { MapPin, X, ExternalLink } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { key: 'all', label: t('projects.allFilter') },
    { key: 'aluminium', label: 'Aluminium' },
    { key: 'facade', label: 'Façades & Mur Rideau' },
    { key: 'pergola', label: 'Pergola' },
    { key: 'staircase', label: 'Escaliers & Garde-corps' },
    { key: 'shower', label: 'Douches & Interieur' }
  ];

  const filteredProjects = projectsData.filter(
    (p) => selectedFilter === 'all' || p.categoryKey === selectedFilter
  );

  return (
    <section id="realisations" className="py-24 lg:py-36 bg-[#0B0B0B] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C8B89A]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                PORTFOLIO ARCHITECTURAL
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-sm text-[#A8A8A8] font-light max-w-md mt-4 md:mt-0">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setSelectedFilter(f.key)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                selectedFilter === f.key
                  ? 'bg-[#C8B89A] text-[#0B0B0B] font-bold shadow-lg'
                  : 'bg-white/5 text-[#A8A8A8] hover:text-[#F5F3EF] hover:bg-white/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const titleText = project.title[language] || project.title.fr;
            const categoryText = project.category[language] || project.category.fr;
            const locationText = project.location[language] || project.location.fr;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-[#121212] border border-white/10 hover:border-[#C8B89A]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={project.mainImage}
                    alt={titleText}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30"></div>

                  <span className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 bg-[#0B0B0B]/80 backdrop-blur-md text-[11px] font-mono text-[#C8B89A] border border-white/10">
                    {project.year}
                  </span>

                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-9 h-9 rounded-full bg-[#0B0B0B]/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F5F3EF] group-hover:bg-[#C8B89A] group-hover:text-[#0B0B0B] transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-[#C8B89A] tracking-widest uppercase">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{locationText}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase text-[#F5F3EF] group-hover:text-[#C8B89A] transition-colors font-heading">
                    {titleText}
                  </h3>

                  <p className="text-xs text-[#A8A8A8] font-light">
                    {categoryText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#121212] border border-white/20 p-8 md:p-12 my-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-[#A8A8A8] hover:text-[#F5F3EF] p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs text-[#C8B89A] uppercase tracking-widest font-mono">
                <span>{selectedProject.location[language]}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold uppercase text-[#F5F3EF] font-heading">
                {selectedProject.title[language]}
              </h3>

              <div className="aspect-[16/9] w-full overflow-hidden border border-white/10">
                <img
                  src={selectedProject.mainImage}
                  alt={selectedProject.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm md:text-base text-[#A8A8A8] font-light leading-relaxed">
                {selectedProject.description[language]}
              </p>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-[#C8B89A] font-bold mb-3">
                  SERVICES ET MATÉRIAUX DÉPLOYÉS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.servicesUsed.map((svc, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-[#F5F3EF]"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-[#C8B89A] text-[#0B0B0B] text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
                >
                  {t('projects.closeModal')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
