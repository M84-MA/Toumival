import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import type { QuoteFormData } from '../types';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    city: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Veuillez saisir votre nom.';
    if (!formData.phone.trim()) newErrors.phone = 'Veuillez saisir votre téléphone.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }
    if (!formData.projectType || formData.projectType.includes('Sélectionner') || formData.projectType.includes('Select') || formData.projectType.includes('اختر')) {
      newErrors.projectType = 'Veuillez sélectionner un type de projet.';
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
    setSubmitStatus('idle');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        city: '',
        message: ''
      });
    }, 1200);
  };

  const projectOptions: string[] = t('contact.form.projectTypeOptions');

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#0B0B0B] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C8B89A]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8B89A] font-semibold">
                SERVICE CLIENT & ATELIER MARRAKECH
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#F5F3EF] font-heading">
              {t('contact.title')}
            </h2>
          </div>
          <p className="text-sm text-[#A8A8A8] font-light max-w-md mt-4 md:mt-0">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT CONTACT INFORMATIONS & WORKING HOURS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#121212] border border-white/10 space-y-6">
              
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-[#C8B89A]/10 border border-[#C8B89A]/30 flex items-center justify-center text-[#C8B89A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-mono text-[#A8A8A8] tracking-widest block">
                    {t('contact.phone')}
                  </span>
                  <a
                    href="tel:+212668334555"
                    className="text-base font-bold text-[#F5F3EF] hover:text-[#C8B89A] transition-colors"
                  >
                    +212 668-334555
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127zm11.393-4.707c-.29-.145-1.713-.846-1.979-.942-.266-.096-.46-.145-.654.145-.194.29-.75 1.042-.919 1.235-.17.193-.339.217-.629.072-1.632-.816-2.92-1.464-4.088-3.473-.312-.536.312-.498.894-1.663.096-.193.048-.362-.024-.508-.073-.145-.654-1.574-.896-2.155-.236-.566-.476-.489-.654-.498-.17-.008-.363-.008-.556-.008-.193 0-.508.072-.774.362-.266.29-1.016.993-1.016 2.423 0 1.43 1.041 2.81 1.187 3.003.145.193 2.049 3.129 4.965 4.389 2.115.913 2.926.969 3.992.812 1.139-.168 1.713-.7 1.954-1.376.241-.676.241-1.256.17-1.376-.072-.12-.266-.193-.556-.338z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] uppercase font-mono text-[#A8A8A8] tracking-widest block">
                    {t('contact.whatsapp')}
                  </span>
                  <a
                    href="https://wa.me/212668334555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#F5F3EF] hover:text-emerald-400 transition-colors"
                  >
                    +212 668-334555
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-[#C8B89A]/10 border border-[#C8B89A]/30 flex items-center justify-center text-[#C8B89A] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-mono text-[#A8A8A8] tracking-widest block">
                    {t('contact.email')}
                  </span>
                  <a
                    href="mailto:toumival@hotmail.com"
                    className="text-base font-bold text-[#F5F3EF] hover:text-[#C8B89A] transition-colors"
                  >
                    toumival@hotmail.com
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-[#C8B89A]/10 border border-[#C8B89A]/30 flex items-center justify-center text-[#C8B89A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-mono text-[#A8A8A8] tracking-widest block">
                    {t('contact.address')}
                  </span>
                  <p className="text-sm text-[#F5F3EF] font-light">
                    Quartier Industriel Hay Al Masar, Marrakech, Maroc
                  </p>
                </div>
              </div>

              {/* INSTAGRAM LINK */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-none bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <span className="text-[11px] uppercase font-mono text-[#A8A8A8] tracking-widest block">
                    {t('contact.socials')}
                  </span>
                  <a
                    href="https://instagram.com/toumival_sarl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#F5F3EF] hover:text-pink-400 transition-colors"
                  >
                    @toumival_sarl
                  </a>
                </div>
              </div>

              {/* OPENING HOURS WIDGET */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#C8B89A] font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>{t('contact.hoursTitle')}</span>
                </div>
                <div className="text-xs space-y-1 text-[#A8A8A8] font-light pl-6 rtl:pl-0 rtl:pr-6">
                  <p>{t('contact.hoursWeek')}</p>
                  <p className="text-rose-400 font-medium">{t('contact.hoursSunday')}</p>
                </div>
              </div>

            </div>

            {/* MARRAKECH HAY AL MASAR GOOGLE MAPS EMBED */}
            <div className="aspect-[16/9] w-full border border-white/10 overflow-hidden bg-[#121212]">
              <iframe
                title="TOUMIVAL Marrakech Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13583.567005882312!2d-8.035418195483259!3d31.664402636287903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8c0e764a77%3A0xb3340578848d7d96!2sHay%20Al%20Masar%2C%20Marrakech%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold uppercase text-[#F5F3EF] mb-8 font-heading">
              {t('contact.form.title')}
            </h3>

            {/* STATUS TOASTS */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">{t('contact.form.successTitle')}</h4>
                  <p className="text-xs font-light mt-0.5">{t('contact.form.successDesc')}</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-rose-950/80 border border-rose-500/50 text-rose-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">{t('contact.form.errorTitle')}</h4>
                  <p className="text-xs font-light mt-0.5">{t('contact.form.errorDesc')}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#A8A8A8]">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#C8B89A] text-sm text-[#F5F3EF] outline-none transition-colors"
                  />
                  {errors.name && <span className="text-[11px] text-rose-400">{errors.name}</span>}
                </div>

                {/* PHONE */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#A8A8A8]">
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#C8B89A] text-sm text-[#F5F3EF] outline-none transition-colors"
                  />
                  {errors.phone && <span className="text-[11px] text-rose-400">{errors.phone}</span>}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#A8A8A8]">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#C8B89A] text-sm text-[#F5F3EF] outline-none transition-colors"
                  />
                  {errors.email && <span className="text-[11px] text-rose-400">{errors.email}</span>}
                </div>

                {/* CITY */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#A8A8A8]">
                    {t('contact.form.city')}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder={t('contact.form.cityPlaceholder')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#C8B89A] text-sm text-[#F5F3EF] outline-none transition-colors"
                  />
                </div>

              </div>

              {/* PROJECT TYPE */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#A8A8A8]">
                  {t('contact.form.projectType')} *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/10 focus:border-[#C8B89A] text-sm text-[#F5F3EF] outline-none transition-colors"
                >
                  {projectOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-[#0B0B0B] text-[#F5F3EF]">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.projectType && <span className="text-[11px] text-rose-400">{errors.projectType}</span>}
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#A8A8A8]">
                  {t('contact.form.message')}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#C8B89A] text-sm text-[#F5F3EF] outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#C8B89A] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-3 shadow-xl"
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
    </section>
  );
};
