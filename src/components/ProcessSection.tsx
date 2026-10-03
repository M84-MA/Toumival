import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = t('process.steps') as Array<{ number: string; title: string; desc: string }>;

  return (
    <section className="py-24 lg:py-36 bg-[#0B0B0B] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C8B89A]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                MÉTHODOLOGIE ET PROCESSUS (5 ÉTAPES)
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">
              {t('process.title')}
            </h2>
          </div>
          <p className="text-sm text-[#A8A8A8] font-light max-w-md mt-4 md:mt-0">
            {t('process.subtitle')}
          </p>
        </div>

        {/* PROCESS STEPS HORIZONTAL TIMELINE */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* CONNECTOR LINE */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 z-0"></div>

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 cursor-pointer p-6 bg-[#121212] border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-[#C8B89A] shadow-2xl scale-105'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-colors ${
                      isActive
                        ? 'bg-[#C8B89A] text-[#0B0B0B]'
                        : isCompleted
                        ? 'bg-white/20 text-[#C8B89A]'
                        : 'bg-white/5 text-[#A8A8A8]'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : step.number}
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#A8A8A8]/60">
                    STEP {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3
                    className={`text-base font-bold uppercase tracking-wider font-heading transition-colors ${
                      isActive ? 'text-[#C8B89A]' : 'text-[#F5F3EF]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
