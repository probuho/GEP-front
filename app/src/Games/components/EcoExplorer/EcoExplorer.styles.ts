import styled from 'styled-components';

export const EcoExplorerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #666;
    text-decoration: none;
    
    &:hover {
      color: #6c5ce7;
      text-decoration: underline;
    }
  }

  .separator {
    margin: 0 0.5rem;
    color: #aaa;
  }

  .current {
    color: #999;
  }
`;

export const HeaderSection = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

export const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const FeatureCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #6c5ce7;
  }

  .feature-tag {
    display: inline-block;
    background-color: #e9ecef;
    color: #666;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.8rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .button-container {
    display: flex;
    gap: 1rem;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-block;
  background-color: #6c5ce7;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5649c0;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #6c5ce7;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #6c5ce7;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #6c5ce7;
    color: white;
  }
`;

export const GameModesSection = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 2rem;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.active ? '#6c5ce7' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-right: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#6c5ce7' : '#f0f0f0'};
  }
`;

export const GamesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GameListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f1f3f5;
  }

  .game-icon {
    font-size: 1.5rem;
    margin-right: 1.5rem;
    color: #6c5ce7;
    width: 40px;
    height: 40px;
    background-color: #e9ecef;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .game-content {
    flex: 1;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }

  .game-arrow {
    font-size: 1.2rem;
    color: #aaa;
  }
`;

export const UserProgressSection = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const ProgressItem = styled.div`
  text-align: center;

  .progress-icon {
    font-size: 1.5rem;
    color: #6c5ce7;
    margin-bottom: 0.5rem;
  }

  .progress-label {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.3rem;
  }

  .progress-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
  }
`;

export const CommunitySection = styled.div`
  h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

export const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ChallengeCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  .challenge-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #6c5ce7;
  }

  .challenge-tag {
    display: inline-block;
    background-color: #e9ecef;
    color: #666;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.8rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .progress-bar-container {
    width: 100%;
    height: 10px;
    background-color: #e9ecef;
    border-radius: 5px;
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background-color: #6c5ce7;
    border-radius: 5px;
  }

  .button-container {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`; 