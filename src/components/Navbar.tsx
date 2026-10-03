import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import type { Language } from '../types';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  // Handle scrolling to anchor on homepage
  const handleAnchorNav = (anchor: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { type: 'anchor', anchor: 'accueil', label: t('nav.home'), href: '/' },
    { type: 'route',  to: '/expertise',   label: t('nav.expertise') },
    { type: 'route',  to: '/solutions',   label: t('nav.solutions') },
    { type: 'route',  to: '/realisations', label: t('nav.realisations') },
    { type: 'anchor', anchor: 'about',   label: t('nav.about') },
    { type: 'anchor', anchor: 'contact', label: t('nav.contact') },
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.type === 'route') return location.pathname === item.to;
    if (item.type === 'anchor' && item.href) return location.pathname === '/';
    return false;
  };

  const renderDesktopLink = (item: typeof navItems[0]) => {
    const baseClass =
      'text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-300 relative py-1 whitespace-nowrap after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8B89A] hover:after:w-full after:transition-all after:duration-300';
    const activeExtra = 'text-[#C8B89A] after:w-full';
    const idleClass = 'text-[#F5F3EF]/90 hover:text-[#C8B89A]';

    const active = isActive(item);
    const cls = `${baseClass} ${active ? activeExtra : idleClass}`;

    if (item.type === 'route' && item.to) {
      return <Link key={item.to} to={item.to} className={cls}>{item.label}</Link>;
    }
    return (
      <button
        key={item.anchor}
        onClick={() => item.anchor && handleAnchorNav(item.anchor)}
        className={cls}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link to="/" className="group flex items-center shrink-0">
          <Logo size="md" className="shrink-0" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-6 xl:gap-8 rtl:space-x-reverse whitespace-nowrap shrink-0">
          {navItems.map(renderDesktopLink)}
        </nav>

        {/* RIGHT CONTROLS: LANG SWITCHER ONLY */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-6 shrink-0 whitespace-nowrap">
          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs shrink-0">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded-full tracking-wider transition-all duration-300 font-semibold ${
                  language === lang.code
                    ? 'bg-[#C8B89A] text-[#0B0B0B] shadow-md'
                    : 'text-[#A8A8A8] hover:text-[#F5F3EF]'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex xl:hidden items-center gap-3 shrink-0">
          {/* QUICK LANG */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[11px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-0.5 rounded-full font-bold ${
                  language === lang.code ? 'bg-[#C8B89A] text-[#0B0B0B]' : 'text-[#A8A8A8]'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F3EF] hover:text-[#C8B89A] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[65px] bg-[#0B0B0B]/98 backdrop-blur-2xl z-40 flex flex-col justify-between p-8 border-t border-white/10 animate-fade-in">
          <div className="flex flex-col space-y-5 mt-4">
            {navItems.map((item) => {
              if (item.type === 'route' && item.to) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl sm:text-2xl font-light uppercase tracking-[0.15em] flex items-center justify-between py-2 border-b border-white/5 ${
                      location.pathname === item.to ? 'text-[#C8B89A]' : 'text-[#F5F3EF] hover:text-[#C8B89A]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-5 h-5 text-[#C8B89A] rtl-flip" />
                  </Link>
                );
              }
              return (
                <button
                  key={item.anchor}
                  onClick={() => item.anchor && handleAnchorNav(item.anchor)}
                  className="text-xl sm:text-2xl font-light uppercase tracking-[0.15em] text-[#F5F3EF] hover:text-[#C8B89A] flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-[#C8B89A] rtl-flip" />
                </button>
              );
            })}
          </div>

          {/* CONTACT INFO IN MOBILE */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-xs text-[#A8A8A8]">
              <Phone className="w-4 h-4 text-[#C8B89A]" />
              <a href="tel:+212668334555" className="hover:text-[#C8B89A] transition-colors">+212 668-334555</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
