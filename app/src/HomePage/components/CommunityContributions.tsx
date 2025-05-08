import React from 'react';
import { ContributionsList, ContributionItem } from '../HomePage.styles';
import { CommunityContribution } from '../interfaces/HomePageInterfaces';

const CommunityContributions: React.FC = () => {
  // En un escenario real, estos datos vendrían de una API
  const contributions: CommunityContribution[] = [
    {
      id: 1,
      title: 'Técnicas de Reforestación Local',
      author: 'María García',
      category: 'Conservación',
      timeAgo: 'hace 2 horas',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      id: 2,
      title: 'Observación de Aves para Principiantes',
      author: 'Carlos Méndez',
      category: 'Vida Silvestre',
      timeAgo: 'hace 5 horas',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      title: 'Senderismo Seguro Durante la Temporada de Lluvias',
      author: 'Sofía Chen',
      category: 'Senderismo',
      timeAgo: 'hace 1 día',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  return (
    <ContributionsList>
      {contributions.map((contribution) => (
        <ContributionItem key={contribution.id}>
          <div className="avatar">
            <img src={contribution.avatar} alt={contribution.author} />
          </div>
          <div className="content">
            <h3>{contribution.title}</h3>
            <div className="meta">
              <span>Por {contribution.author}</span>
              <span> • {contribution.category}</span>
              <span> • {contribution.timeAgo}</span>
            </div>
            <div className="stats">
              <span>👁️ </span>
              <span>❤️ </span>
            </div>
          </div>
        </ContributionItem>
      ))}
    </ContributionsList>
  );
};

export default CommunityContributions; 