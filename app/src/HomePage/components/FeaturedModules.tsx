import React from 'react';
import { Link } from 'react-router-dom';
import { ModulesGrid, ModuleCard, ModuleButton } from '../HomePage.styles';
import { FeaturedModule } from '../interfaces/HomePageInterfaces';

const FeaturedModules: React.FC = () => {
  const modules: FeaturedModule[] = [
    {
      id: 'games',
      title: 'Juegos Educativos',
      description: 'Juegos interactivos para aprender sobre conservación ambiental y vida silvestre',
      icon: '🎮',
      buttonText: 'Jugar Ahora',
      link: '/games',
    },
    {
      id: 'routes',
      title: 'Rutas de Senderismo',
      description: 'Descubre senderos escénicos y rutas con mapas detallados y niveles de dificultad',
      icon: '🥾',
      buttonText: 'Explorar Rutas',
      link: '/routes',
    },
    {
      id: 'sightings',
      title: 'Avistamientos de Vida Silvestre',
      description: 'Registra y comparte tus observaciones de vida silvestre con la comunidad',
      icon: '🦉',
      buttonText: 'Registrar Avistamiento',
      link: '/sightings',
    },
    {
      id: 'community',
      title: 'Explorador Comunitario',
      description: 'Conéctate con otros entusiastas de la naturaleza y comparte conocimientos',
      icon: '👥',
      buttonText: 'Unirse a la Comunidad',
      link: '/community',
    },
  ];

  return (
    <ModulesGrid>
      {modules.map((module) => (
        <ModuleCard key={module.id}>
          <div className="icon">{module.icon}</div>
          <h3>{module.title}</h3>
          <p>{module.description}</p>
          <ModuleButton as={Link} to={module.link}>
            {module.buttonText}
          </ModuleButton>
        </ModuleCard>
      ))}
    </ModulesGrid>
  );
};

export default FeaturedModules; 