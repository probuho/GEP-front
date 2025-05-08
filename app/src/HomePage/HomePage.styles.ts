import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const MainHeader = styled.div`
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  h2 {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

export const DiscoverButton = styled.a`
  display: inline-block;
  background-color: #ff8c5a;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7a40;
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const ModuleCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .icon {
    color: #6c5ce7;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ModuleButton = styled.a`
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

export const ContributionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContributionItem = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f3f5;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }

  .content {
    flex: 1;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .meta {
    display: flex;
    color: #6c757d;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  .stats {
    display: flex;
    gap: 1rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const StatCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #6c5ce7;
    margin-bottom: 0.5rem;
  }

  .label {
    color: #6c757d;
    line-height: 1.4;
  }

  .icon {
    color: #6c5ce7;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const JoinCommunityContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const JoinCommunityButton = styled.a`
  display: inline-block;
  background-color: #ff8c5a;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7a40;
  }
`; 