export interface ExperienceCardData {
  tagType: "AGÊNCIA" | "VEÍCULO";
  logoUrl: string;
  companyName: string;
  title: string;
  description: string;
  period: string;
}

export interface CaseData {
  id: string;
  agency: string;
  client: string;
  product: string;
  description: string;
  mediaUrl: string;
  challenge: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  linkedinUrl?: string;
}

export interface SocialLink {
  type: 'linkedin' | 'email' | 'whatsapp' | 'website';
  url: string;
  label: string;
  icon?: string;
}