import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] text-[#F5F3EF] border-t border-white/10 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* COL 1: BRAND LOGO & TAGLINE */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <Logo size="md" />
            </Link>

            <p className="text-xs text-[#A8A8A8] font-light leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-4 text-xs pt-2">
              <a
                href="https://instagram.com/toumival_sarl"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-pink-500 hover:bg-pink-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://wa.me/212668334555"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500 hover:bg-emerald-500 hover:text-[#0B0B0B] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current text-emerald-400 group-hover:text-[#0B0B0B]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127zm11.393-4.707c-.29-.145-1.713-.846-1.979-.942-.266-.096-.46-.145-.654.145-.194.29-.75 1.042-.919 1.235-.17.193-.339.217-.629.072-1.632-.816-2.92-1.464-4.088-3.473-.312-.536.312-.498.894-1.663.096-.193.048-.362-.024-.508-.073-.145-.654-1.574-.896-2.155-.236-.566-.476-.489-.654-.498-.17-.008-.363-.008-.556-.008-.193 0-.508.072-.774.362-.266.29-1.016.993-1.016 2.423 0 1.43 1.041 2.81 1.187 3.003.145.193 2.049 3.129 4.965 4.389 2.115.913 2.926.969 3.992.812 1.139-.168 1.713-.7 1.954-1.376.241-.676.241-1.256.17-1.376-.072-.12-.266-.193-.556-.338z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#C8B89A] font-bold">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A8A8] font-light">
              <li><Link to="/" className="hover:text-[#F5F3EF] transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/expertise" className="hover:text-[#F5F3EF] transition-colors">{t('nav.expertise')}</Link></li>
              <li><Link to="/solutions" className="hover:text-[#F5F3EF] transition-colors">{t('nav.solutions')}</Link></li>
              <li><Link to="/realisations" className="hover:text-[#F5F3EF] transition-colors">{t('nav.realisations')}</Link></li>
              <li><a href="/#about" className="hover:text-[#F5F3EF] transition-colors">{t('nav.about')}</a></li>
              <li><a href="/#contact" className="hover:text-[#F5F3EF] transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* COL 3: 11 SERVICES LIST */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#C8B89A] font-bold">
              {t('footer.servicesTitle')}
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A8A8] font-light">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to="/expertise"
                    className="hover:text-[#C8B89A] text-left rtl:text-right transition-colors"
                  >
                    {svc.number} — {svc.title[language] || svc.title.fr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT ADDRESS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#C8B89A] font-bold">
              {t('footer.contactTitle')}
            </h4>
            <div className="space-y-3 text-xs text-[#A8A8A8] font-light">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8B89A]" />
                <a href="tel:+212668334555" className="hover:text-[#F5F3EF] transition-colors">
                  +212 668-334555
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-emerald-400 shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127zm11.393-4.707c-.29-.145-1.713-.846-1.979-.942-.266-.096-.46-.145-.654.145-.194.29-.75 1.042-.919 1.235-.17.193-.339.217-.629.072-1.632-.816-2.92-1.464-4.088-3.473-.312-.536.312-.498.894-1.663.096-.193.048-.362-.024-.508-.073-.145-.654-1.574-.896-2.155-.236-.566-.476-.489-.654-.498-.17-.008-.363-.008-.556-.008-.193 0-.508.072-.774.362-.266.29-1.016.993-1.016 2.423 0 1.43 1.041 2.81 1.187 3.003.145.193 2.049 3.129 4.965 4.389 2.115.913 2.926.969 3.992.812 1.139-.168 1.713-.7 1.954-1.376.241-.676.241-1.256.17-1.376-.072-.12-.266-.193-.556-.338z" />
                </svg>
                <a href="https://wa.me/212668334555" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                  +212 668-334555
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8B89A]" />
                <a href="mailto:toumival@hotmail.com" className="hover:text-[#F5F3EF] transition-colors">
                  toumival@hotmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#C8B89A] shrink-0 mt-0.5" />
                <span>Quartier Industriel Hay Al Masar, Marrakech, Maroc</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A8A8A8]/60 space-y-4 sm:space-y-0">
          <p>© 2026 TOUMIVAL SARL. {t('footer.rights')}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#C8B89A] hover:text-white transition-colors"
          >
            <span>REMONTER EN HAUT</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
