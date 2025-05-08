import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GamesContainer, 
  BreadcrumbNav, 
  GameSection, 
  GamesGrid,
  GameCard,
  GameButton
} from './Games.styles';
import { GameItem } from './interfaces/GamesInterfaces';

const Games: React.FC = () => {
  const games: GameItem[] = [
    {
      id: 'eco-explorer',
      title: 'Desafío Eco Explorador',
      description: 'Pon a prueba tus conocimientos ambientales y habilidades de conservación en este desafío interactivo',
      icon: '🌍',
      link: '/games/eco-explorer',
    },
    {
      id: 'memoria',
      title: 'Memoria',
      description: 'Pon a prueba tus habilidades de memoria emparejando tarjetas con especies de vida silvestre',
      icon: '🧠',
      link: '/memoria',
    },
    {
      id: 'species-identification',
      title: 'Cuestionario de Identificación de Especies',
      description: 'Prueba tu capacidad para identificar diferentes especies de plantas y animales',
      icon: '🦋',
      link: '/games/species-quiz',
    },
    {
      id: 'conservation-simulation',
      title: 'Simulación de Conservación',
      description: 'Simula ecosistemas y aprende sobre esfuerzos de conservación',
      icon: '🌱',
      link: '/games/conservation-sim',
    },
  ];

  return (
    <GamesContainer>
      <BreadcrumbNav>
        <Link to="/">Inicio</Link>
        <span className="separator">&gt;</span>
        <span className="current">Juegos</span>
      </BreadcrumbNav>

      <GameSection>
        <h1>Juegos Educativos</h1>
        <p>
          Explora nuestra colección de juegos interactivos diseñados para educar y entretener
          a los jugadores sobre conservación ambiental, protección de la vida silvestre y prácticas
          sostenibles.
        </p>

        <GamesGrid>
          {games.map((game) => (
            <GameCard key={game.id}>
              <div 
                className="card-image" 
                style={{ 
                  backgroundColor: '#e9ecef',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '4rem'
                }}
              >
                {game.icon}
              </div>
              <div className="card-content">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <GameButton as={Link} to={game.link}>
                  Jugar Ahora
                </GameButton>
              </div>
            </GameCard>
          ))}
        </GamesGrid>
      </GameSection>
    </GamesContainer>
  );
};

export default Games; 