import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavModule {
  id: string;
  title: string;
  icon: string;
  link: string;
}

const ModulesNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const ModuleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background-color: #f0f0f0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const NavModules: React.FC = () => {
  const modules: NavModule[] = [
    {
      id: 'home',
      title: 'Inicio',
      icon: '🏠',
      link: '/',
    },
    {
      id: 'games',
      title: 'Juegos',
      icon: '🎮',
      link: '/games',
    },
    {
      id: 'routes',
      title: 'Rutas',
      icon: '🥾',
      link: '/routes',
    },
    {
      id: 'sightings',
      title: 'Avistamientos',
      icon: '👁️',
      link: '/sightings',
    },
    {
      id: 'community',
      title: 'Comunidad',
      icon: '👥',
      link: '/community',
    },
  ];

  return (
    <ModulesNav>
      {modules.map((module) => (
        <ModuleLink key={module.id} to={module.link}>
          <div className="icon">{module.icon}</div>
          <span className="title">{module.title}</span>
        </ModuleLink>
      ))}
    </ModulesNav>
  );
};

export default NavModules; 