export interface GameMode {
  id: string;
  name: string;
  active: boolean;
}

export interface GameItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface GameOverview {
  difficulty: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export interface GameRewards {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export interface GameMultiplayer {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export interface UserProgressItem {
  level: string;
  percentComplete: number;
  pointsEarned: number;
  badgesUnlocked: number;
}

export interface CommunityChallenge {
  id: string;
  title: string;
  description: string;
  goal: number;
  current: number;
  percentComplete: number;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
} 