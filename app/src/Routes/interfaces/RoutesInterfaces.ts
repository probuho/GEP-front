export interface RouteTab {
  id: string;
  name: string;
}

export enum DifficultyLevel {
  EASY = 'FACIL',
  MODERATE = 'MODERADO',
  DIFFICULT = 'DIFICIL'
}

export interface HikingRoute {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  distance: number;
  isMetric?: boolean;
}

export interface RecentlyAddedRoute extends HikingRoute {
  addedDaysAgo: number;
  rating: number;
  totalReviews: number;
}

export interface CommunityAchievement {
  id: string;
  value: string;
  description: string;
  icon: string;
} 