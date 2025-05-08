export interface FeaturedModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  link: string;
}

export interface CommunityContribution {
  id: number;
  title: string;
  author: string;
  category: string;
  timeAgo: string;
  avatar: string;
}

export interface EnvironmentalStat {
  id: string;
  number: string;
  label: string;
  icon: string;
} 