import React from 'react';
import { StatsGrid, StatCard } from '../HomePage.styles';
import { EnvironmentalStat } from '../interfaces/HomePageInterfaces';

const EnvironmentalStats: React.FC = () => {
  const stats: EnvironmentalStat[] = [
    {
      id: 'sightings',
      number: '1,245',
      label: 'Avistamientos de vida silvestre registrados por nuestra comunidad este mes',
      icon: '🐾',
    },
    {
      id: 'routes',
      number: '328',
      label: 'Nuevas rutas de senderismo mapeadas y compartidas por exploradores',
      icon: '🏔️',
    },
    {
      id: 'members',
      number: '5,670',
      label: 'Miembros activos de la comunidad compartiendo conocimientos',
      icon: '👥',
    },
  ];

  return (
    <StatsGrid>
      {stats.map((stat) => (
        <StatCard key={stat.id}>
          <div className="icon">{stat.icon}</div>
          <div className="number">{stat.number}</div>
          <div className="label">{stat.label}</div>
        </StatCard>
      ))}
    </StatsGrid>
  );
};

export default EnvironmentalStats; 