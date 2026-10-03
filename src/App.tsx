import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { PergolaFeaturedSection } from './components/PergolaFeaturedSection';
import { GlassArchitectureSection } from './components/GlassArchitectureSection';
import { AluminiumSection } from './components/AluminiumSection';
import { CurtainWallSection } from './components/CurtainWallSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ExpertisePage } from './pages/ExpertisePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';

/* ─── HOME PAGE ─────────────────────────────────────────────────────────── */
const HomePage: React.FC = () => {
  // No modal/service state needed on home page anymore — expertise & solutions are separate pages.
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F3EF] selection:bg-[#C8B89A] selection:text-[#0B0B0B]">
      <Navbar />

      <main>
        {/* 1. HERO VIDEO */}
        <HeroSection />

        {/* 2. BRAND STATEMENT */}
        <IntroSection />

        {/* 3. PERGOLA BIOCLIMATIQUE CINEMATIC SECTION */}
        <PergolaFeaturedSection onSelectService={() => {}} />

        {/* 4. GLASS ARCHITECTURE HORIZONTAL GALLERY */}
        <GlassArchitectureSection />

        {/* 5. ALUMINIUM ATTRIBUTES SECTION */}
        <AluminiumSection />

        {/* 6. MUR RIDEAU / CURTAIN WALL SECTION */}
        <CurtainWallSection onSelectService={() => {}} />

        {/* 7. CRAFTSMANSHIP & MACRO PHOTOGRAPHY */}
        <CraftsmanshipSection />

        {/* 8. 5-STEP PROCESS TIMELINE */}
        <ProcessSection />

        {/* 9. ABOUT COMPANY */}
        <AboutSection />

        {/* 10. DRAMATIC CTA SECTION */}
        <CTASection />

        {/* 11. CONTACT SECTION */}
        <ContactSection />
      </main>

      <Footer onSelectService={() => {}} />

      {/* GLOBAL QUOTE MODAL */}
      <QuoteModal />
    </div>
  );
};

/* ─── APP WITH ROUTER ───────────────────────────────────────────────────── */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/"             element={<HomePage />} />
      <Route path="/expertise"    element={<ExpertisePage />} />
      <Route path="/solutions"    element={<SolutionsPage />} />
      <Route path="/realisations" element={<ProjectsPage />} />
      {/* Catch-all → home */}
      <Route path="*"             element={<HomePage />} />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
