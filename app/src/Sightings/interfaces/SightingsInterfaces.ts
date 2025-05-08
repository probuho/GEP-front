export interface SightingTab {
  id: string;
  name: string;
  active: boolean;
}

export interface SightingItem {
  id: string;
  title: string;
  description: string;
  category: 'rare' | 'common' | 'endangered';
  timeAgo: string;
  location?: string;
}

export interface CommunityReport {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  location: string;
  species: string;
  date: string;
  status: string;
}

export interface ConservationAlert {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SpeciesOfMonth {
  id: string;
  month: string;
  title: string;
  description: string;
  icon: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

// Interfaz para Especies, tomada del módulo de Especies
export interface SpeciesItem {
  id: string; 
  nombre: string;
  tamano: number; 
  peso: number; 
  habitat: string;
  alimentacion: string;
  tipo: string;
  descripcion: string;
}
