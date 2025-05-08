import styled from 'styled-components';

export const CommunityContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeaderSection = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

export const VerifiedSightingsSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const VerifiedHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;

  .icon {
    color: #6c5ce7;
    font-size: 1.2rem;
  }

  .verified-tag {
    background-color: #eeedf5;
    color: #6c5ce7;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.2rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

export const SightingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;

export const SightingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #6c5ce7;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .view-button {
    background-color: #6c5ce7;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5649c0;
    }
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 2rem;
  overflow-x: auto;
  white-space: nowrap;
  position: relative;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.active ? '#6c5ce7' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#6c5ce7' : '#f0f0f0'};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const NewPostButton = styled.button`
  background-color: #4e6ef2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4058db;
  }
`;

export const EditWikiButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #43a047;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const DiscussionList = styled.div`
  margin-bottom: 3rem;
`;

export const DiscussionItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.2rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    flex: 1;
  }

  .title {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.2rem;
    font-weight: 500;
  }

  .meta {
    color: #666;
    font-size: 0.85rem;
  }

  .wiki-badge {
    display: inline-block;
    background-color: #e9ecef;
    color: #666;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.7rem;
    margin-left: 0.5rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }

  .action-button {
    background: none;
    border: none;
    color: #999;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }
`;

export const WikiArticlesSection = styled.div`
  margin-bottom: 3rem;
`;

export const WikiArticlesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WikiArticleItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  align-items: center;
  gap: 1.5rem;

  &:last-child {
    border-bottom: none;
  }

  .article-icon {
    font-size: 1.2rem;
    color: #6c5ce7;
  }

  .article-info {
    display: flex;
    flex-direction: column;
  }

  .article-title {
    font-weight: 500;
    color: #333;
    margin-bottom: 0.2rem;
  }

  .article-type {
    color: #666;
    font-size: 0.85rem;
  }

  .updated-time {
    color: #666;
    font-size: 0.85rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }

  .star-button, .navigate-button {
    background: none;
    border: none;
    color: ${props => props.theme.starred ? '#f59e0b' : '#ddd'};
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.starred ? '#f59e0b' : '#ccc'};
    }
  }

  .navigate-button {
    color: #6c5ce7;
  }
`;

export const RecentActivitySection = styled.div`
  margin-bottom: 3rem;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivityItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  align-items: center;
  gap: 1.5rem;

  &:last-child {
    border-bottom: none;
  }

  .activity-icon {
    font-size: 1.2rem;
    color: #6c5ce7;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f7;
    border-radius: 50%;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .activity-info {
    display: flex;
    flex-direction: column;
  }

  .activity-title {
    font-weight: 500;
    color: #333;
    margin-bottom: 0.2rem;
  }

  .activity-details {
    color: #666;
    font-size: 0.85rem;
  }

  .time {
    color: #666;
    font-size: 0.85rem;
  }

  .navigate-button {
    background: none;
    border: none;
    color: #6c5ce7;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #5649c0;
    }
  }
`;

export const CommunityCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const CommunityCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .card-icon {
    font-size: 1.5rem;
    color: #6c5ce7;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.8rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .card-button {
    background-color: #6c5ce7;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: inline-block;

    &:hover {
      background-color: #5649c0;
    }
  }
`; 