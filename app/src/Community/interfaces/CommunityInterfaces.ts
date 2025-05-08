export interface ForumTab {
  id: string;
  name: string;
}

export interface VerifiedSighting {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: {
    text: string;
    link: string;
  };
}

export interface PopularDiscussion {
  id: number;
  title: string;
  user: {
    id: number;
    avatar: string;
  };
  replies: number;
  updatedTime: string;
  addedToWiki?: boolean;
}

export interface WikiArticle {
  id: string;
  title: string;
  type: string;
  lastUpdated: string;
  isStarred?: boolean;
}

export interface RecentActivity {
  id: number;
  type: 'post' | 'wiki-edit' | 'sighting';
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  title: string;
  action: string;
  time: string;
}

export interface CommunityCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: {
    text: string;
    link: string;
  };
} 