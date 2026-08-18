export interface ServiceInfo {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  summary: string;
  description: string[];
  keyFeatures: string[];
  benefits: { title: string; desc: string; iconName?: string }[];
  processSteps?: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  beforeAfterCases?: {
    id: string;
    title: string;
    description: string;
    duration: string;
    beforeImg: string;
    afterImg: string;
  }[];
  heroImage: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  city: string;
  avatarImg?: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  content: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export interface ClinicInfo {
  doctorName: string;
  cro: string;
  certification: string;
  experienceYears: number;
  startYear: number;
  city: string;
  state: string;
  fullAddress: string;
  buildingName: string;
  neighborhood: string;
  cep: string;
  phone: string;
  phoneRaw: string;
  whatsappMessageDefault: string;
  email: string;
  workingHours: {
    days: string;
    morning: string;
    afternoon: string;
    fullText: string;
  };
  googleRating: number;
  googleReviewCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsEmbedUrl: string;
}
