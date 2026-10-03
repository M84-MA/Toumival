import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import type { QuoteFormData } from '../types';

export const QuoteModal: React.FC = () => {
  const { t, isQuoteModalOpen, closeQuoteModal, selectedQuoteService } = useLanguage();

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: selectedQuoteService || '',
    city: '',
    message: ''
  });

  useEffect(() => {
    if (selectedQuoteService) {
      setFormData((prev) => ({ ...prev, projectType: selectedQuoteService }));
    }
  }, [selectedQuoteService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isQuoteModalOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Veuillez saisir votre nom.';
    if (!formData.phone.trim()) newErrors.phone = 'Veuillez saisir votre téléphone.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir un email valide.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus('error');
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => {
        closeQuoteModal();
        setSubmitStatus('idle');
      }, 2000);
    }, 1000);
  };

  const projectOptions: string[] = t('contact.form.projectTypeOptions');

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="relative max-w-2xl w-full bg-[#121212] border border-white/20 p-8 md:p-12 shadow-2xl my-8">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={closeQuoteModal}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-[#A8A8A8] hover:text-[#F5F3EF] p-2"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C8B89A]"></span>
              <span className="text-[11px] font-mono text-[#C8B89A] uppercase tracking-widest">
                OFFICIAL QUOTE REQUEST
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#F5F3EF] font-heading">
              {t('quoteModal.title')}
            </h3>
            <p className="text-xs text-[#A8A8A8] font-light mt-1">
              {t('quoteModal.subtitle')}
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold">{t('contact.form.successTitle')}</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-rose-950/80 border border-rose-500/50 text-rose-200 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <span className="text-xs font-semibold">{t('contact.form.errorTitle')}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-xs text-[#F5F3EF] outline-none focus:border-[#C8B89A]"
                />
                {errors.name && <span className="text-[10px] text-rose-400">{errors.name}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                  {t('contact.form.phone')} *
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t('contact.form.phonePlaceholder')}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-xs text-[#F5F3EF] outline-none focus:border-[#C8B89A]"
                />
                {errors.phone && <span className="text-[10px] text-rose-400">{errors.phone}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-xs text-[#F5F3EF] outline-none focus:border-[#C8B89A]"
                />
                {errors.email && <span className="text-[10px] text-rose-400">{errors.email}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                  {t('contact.form.city')}
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder={t('contact.form.cityPlaceholder')}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-xs text-[#F5F3EF] outline-none focus:border-[#C8B89A]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                {t('contact.form.projectType')}
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-white/10 text-xs text-[#F5F3EF] outline-none focus:border-[#C8B89A]"
              >
                {projectOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-wider text-[#A8A8A8]">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('contact.form.messagePlaceholder')}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 text-xs text-[#F5F3EF] outline-none focus:border-[#C8B89A]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? (
                <span>{t('contact.form.submitting')}</span>
              ) : (
                <>
                  <Send className="w-4 h-4 rtl-flip" />
                  <span>{t('contact.form.submitBtn')}</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
