import styled from 'styled-components';

export const RoutesContainer = styled.div`
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

  p {
    color: #666;
    font-size: 1.1rem;
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
  background-color: ${props => props.active ? '#5a67d8' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#5a67d8' : '#f0f0f0'};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
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
    border-color: #5a67d8;
    box-shadow: 0 0 0 2px rgba(90, 103, 216, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #5a67d8;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4c56c9;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const FeaturedRoutesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const RouteCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const RouteCardHeader = styled.div<{ difficulty: string }>`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${props => {
    switch (props.difficulty) {
      case 'FACIL':
        return '#ebf4ff'; // Light blue
      case 'MODERADO':
        return '#ebf8ff'; // Light teal
      case 'DIFICIL':
        return '#fef3f2'; // Light red
      default:
        return '#f8f9fa';
    }
  }};

  .route-icon {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => {
      switch (props.difficulty) {
        case 'FACIL':
          return '#bcdefa'; // Blue
        case 'MODERADO':
          return '#a3ccd7'; // Teal
        case 'DIFICIL':
          return '#fab4b2'; // Red
        default:
          return '#e2e8f0';
      }
    }};
  }

  .route-info {
    display: flex;
    flex-direction: column;
  }

  .difficulty {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${props => {
      switch (props.difficulty) {
        case 'FACIL':
          return '#3182ce'; // Blue
        case 'MODERADO':
          return '#319795'; // Teal
        case 'DIFICIL':
          return '#e53e3e'; // Red
        default:
          return '#718096';
      }
    }};
  }

  .distance {
    font-size: 0.8rem;
    color: #718096;
  }
`;

export const RouteCardBody = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.4;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    flex-grow: 1;
  }
`;

export const RouteButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem 1rem 1rem;
`;

export const RouteButton = styled.button`
  background-color: #5a67d8;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4c56c9;
  }
`;

export const SaveButton = styled(RouteButton)`
  background-color: transparent;
  color: #5a67d8;
  border: 1px solid #5a67d8;

  &:hover {
    background-color: #f0f0ff;
  }
`;

export const RecentlyAddedSection = styled.div`
  margin-bottom: 3rem;
`;

export const RecentRoutesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecentRouteItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;
  gap: 1.5rem;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }

  .route-icon {
    font-size: 1.2rem;
  }

  .route-info {
    display: flex;
    flex-direction: column;
  }

  .route-title {
    font-weight: 500;
    color: #333;
  }

  .difficulty {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.9rem;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #f59e0b;
  }

  .rating-count {
    color: #666;
    font-size: 0.9rem;
  }

  .favorite-button, .more-button {
    background: none;
    border: none;
    color: #aaa;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }
`;

export const CommunitySection = styled.div`
  margin-bottom: 3rem;
`;

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const AchievementCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);

  .icon {
    font-size: 2rem;
    color: #5a67d8;
    margin-bottom: 1rem;
  }

  .value {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const CreateRouteButton = styled.button`
  background-color: #ed8936;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto;
  margin-bottom: 3rem;

  &:hover {
    background-color: #dd6b20;
  }
`; 