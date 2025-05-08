import styled from 'styled-components';

export const GamesContainer = styled.div`
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

export const GameSection = styled.div`
  margin-bottom: 3rem;
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const GameCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  .card-image {
    height: 180px;
    background-size: cover;
    background-position: center;
  }

  .card-content {
    padding: 1.5rem;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
  }
`;

export const GameButton = styled.a`
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