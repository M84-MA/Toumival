export type Language = 'fr' | 'en' | 'ar';

export interface ServiceItem {
  id: string;
  number: string;
  category: 'aluminium' | 'architecture' | 'glass';
  slug: {
    fr: string;
    en: string;
    ar: string;
  };
  title: {
    fr: string;
    en: string;
    ar: string;
  };
  subtitle?: {
    fr: string;
    en: string;
    ar: string;
  };
  shortDescription: {
    fr: string;
    en: string;
    ar: string;
  };
  fullDescription: {
    fr: string;
    en: string;
    ar: string;
  };
  heroImage: string;
  heroVideo?: string;
  galleryImages: string[];
  examples: {
    title: { fr: string; en: string; ar: string };
    subtitle?: { fr: string; en: string; ar: string };
    image: string;
  }[];
  keyFeatures: {
    fr: string[];
    en: string[];
    ar: string[];
  };
  technicalSpecs?: {
    label: { fr: string; en: string; ar: string };
    value: { fr: string; en: string; ar: string };
  }[];
}

export interface ProjectItem {
  id: string;
  title: {
    fr: string;
    en: string;
    ar: string;
  };
  category: {
    fr: string;
    en: string;
    ar: string;
  };
  categoryKey: 'aluminium' | 'glass' | 'pergola' | 'facade' | 'staircase' | 'shower';
  location: {
    fr: string;
    en: string;
    ar: string;
  };
  year: string;
  mainImage: string;
  galleryImages: string[];
  description: {
    fr: string;
    en: string;
    ar: string;
  };
  servicesUsed: string[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  city: string;
  message: string;
}
