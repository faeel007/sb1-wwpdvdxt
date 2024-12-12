export type ExperienceLevel = 'beginner' | 'intermediate' | 'professional';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  level: ExperienceLevel;
  benefits: string[];
}

export interface ChatbotResponse {
  message: string;
  options?: string[];
  products?: Product[];
}