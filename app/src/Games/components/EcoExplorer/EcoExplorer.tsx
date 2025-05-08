import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  EcoExplorerContainer,
  BreadcrumbNav,
  HeaderSection,
  FeaturesSection,
  FeatureCard,
  PrimaryButton,
  SecondaryButton,
  GameModesSection,
  TabsContainer,
  Tab,
  GamesList,
  GameListItem,
  UserProgressSection,
  ProgressContainer,
  ProgressItem,
  CommunitySection,
  ChallengesGrid,
  ChallengeCard
} from './EcoExplorer.styles';
import { 
  GameMode, 
  GameItem, 
  GameOverview, 
  GameRewards, 
  GameMultiplayer,
  UserProgressItem,
  CommunityChallenge
} from '../../interfaces/GamesInterfaces';

const EcoExplorer: React.FC = () => {
  const [activeModeIndex, setActiveModeIndex] = useState(0);

  const gameModes: GameMode[] = [
    { id: 'adventure', name: 'Aventura', active: true },
    { id: 'quiz', name: 'Cuestionario', active: false },
    { id: 'simulation', name: 'Simulación', active: false },
    { id: 'field-challenge', name: 'Desafío de Campo', active: false },
  ];

  const gameItems: Record<string, GameItem[]> = {
    'adventure': [
      {
        id: 'rainforest',
        title: 'Expedición a la Selva',
        description: 'Explora puntos de biodiversidad e identifica especies en peligro de extinción',
        icon: '🌴',
        link: '/games/eco-explorer/rainforest',
      },
      {
        id: 'ocean',
        title: 'Conservación Oceánica',
        description: 'Combate la contaminación marina y protege los ecosistemas de arrecifes de coral',
        icon: '🌊',
        link: '/games/eco-explorer/ocean',
      },
      {
        id: 'urban',
        title: 'Sostenibilidad Urbana',
        description: 'Diseña ciudades ecológicas e implementa soluciones verdes',
        icon: '🏙️',
        link: '/games/eco-explorer/urban',
      },
    ],
    'quiz': [
      {
        id: 'wildlife-quiz',
        title: 'Identificación de Vida Silvestre',
        description: 'Pon a prueba tu conocimiento de diferentes especies animales',
        icon: '🦊',
        link: '/games/eco-explorer/wildlife-quiz',
      },
      {
        id: 'conservation-quiz',
        title: 'Prácticas de Conservación',
        description: 'Aprende sobre estrategias efectivas de conservación',
        icon: '🌱',
        link: '/games/eco-explorer/conservation-quiz',
      },
    ],
    'simulation': [
      {
        id: 'ecosystem-sim',
        title: 'Constructor de Ecosistemas',
        description: 'Simula y equilibra diferentes ecosistemas',
        icon: '🌍',
        link: '/games/eco-explorer/ecosystem-sim',
      },
    ],
    'field-challenge': [
      {
        id: 'field-expedition',
        title: 'Expedición de Campo',
        description: 'Completa desafíos de conservación en el mundo real',
        icon: '🧭',
        link: '/games/eco-explorer/field-expedition',
      },
    ],
  };

  const gameOverview: GameOverview = {
    difficulty: 'MEDIO',
    title: 'Descripción del Juego',
    description: 'Navega a través de desafíos ambientales, identifica especies y toma decisiones de conservación para ganar puntos e insignias.',
    buttonText: 'Jugar Ahora',
    buttonLink: '/games/eco-explorer/play',
    secondaryButtonText: 'Tutorial',
    secondaryButtonLink: '/games/eco-explorer/tutorial',
  };

  const gameRewards: GameRewards = {
    title: 'Gana y Aprende',
    description: 'Completa desafíos para ganar Insignias de Explorador, desbloquea nuevos niveles y obtén puntos de conocimiento para la tabla de clasificación de la comunidad.',
    buttonText: 'Ver Recompensas',
    buttonLink: '/games/eco-explorer/rewards',
    secondaryButtonText: 'Tabla de Clasificación',
    secondaryButtonLink: '/games/eco-explorer/leaderboard',
  };

  const gameMultiplayer: GameMultiplayer = {
    title: 'Modo Multijugador',
    description: 'Desafía a amigos o únete a torneos comunitarios. Colabora para resolver enigmas ambientales y escenarios de conservación.',
    buttonText: 'Buscar Jugadores',
    buttonLink: '/games/eco-explorer/players',
    secondaryButtonText: 'Crear Sala',
    secondaryButtonLink: '/games/eco-explorer/create-room',
  };

  const userProgress: UserProgressItem = {
    level: 'Nivel 3: Defensor de la Conservación',
    percentComplete: 42,
    pointsEarned: 215,
    badgesUnlocked: 3,
  };

  const communityChallenges: CommunityChallenge[] = [
    {
      id: 'waste-reduction',
      title: 'Reducción de Residuos',
      description: 'Meta de la comunidad: 5,000 puntos. Actualmente en 3,245 puntos (65% completado).',
      goal: 5000,
      current: 3245,
      percentComplete: 65,
      buttonText: 'Contribuir',
      buttonLink: '/games/eco-explorer/contribute',
      secondaryButtonText: 'Detalles',
      secondaryButtonLink: '/games/eco-explorer/details',
    },
    {
      id: 'leaderboard',
      title: 'Tabla de Clasificación',
      description: 'Mira quién lidera los desafíos ambientales y esfuerzos de conservación de este mes.',
      goal: 100,
      current: 100,
      percentComplete: 100,
      buttonText: 'Ver Clasificación',
      buttonLink: '/games/eco-explorer/rankings',
      secondaryButtonText: 'Mi Posición',
      secondaryButtonLink: '/games/eco-explorer/my-position',
    },
  ];

  return (
    <EcoExplorerContainer>
      <BreadcrumbNav>
        <Link to="/">Inicio</Link>
        <span className="separator">&gt;</span>
        <Link to="/games">Juegos</Link>
        <span className="separator">&gt;</span>
        <span className="current">Desafío Eco Explorador</span>
      </BreadcrumbNav>

      <HeaderSection>
        <h1>Desafío Eco Explorador</h1>
        <p>Pon a prueba tus conocimientos ambientales y habilidades de conservación en este desafío interactivo</p>
      </HeaderSection>

      <FeaturesSection>
        {/* Game Overview */}
        <FeatureCard>
          <div className="feature-icon">⚙️</div>
          <div className="feature-tag">DIFICULTAD: {gameOverview.difficulty}</div>
          <h3>{gameOverview.title}</h3>
          <p>{gameOverview.description}</p>
          <div className="button-container">
            <PrimaryButton as={Link} to={gameOverview.buttonLink}>
              {gameOverview.buttonText}
            </PrimaryButton>
            <SecondaryButton as={Link} to={gameOverview.secondaryButtonLink || ''}>
              {gameOverview.secondaryButtonText}
            </SecondaryButton>
          </div>
        </FeatureCard>

        {/* Earn & Learn */}
        <FeatureCard>
          <div className="feature-icon">🏆</div>
          <div className="feature-tag">RECOMPENSAS</div>
          <h3>{gameRewards.title}</h3>
          <p>{gameRewards.description}</p>
          <div className="button-container">
            <PrimaryButton as={Link} to={gameRewards.buttonLink}>
              {gameRewards.buttonText}
            </PrimaryButton>
            <SecondaryButton as={Link} to={gameRewards.secondaryButtonLink || ''}>
              {gameRewards.secondaryButtonText}
            </SecondaryButton>
          </div>
        </FeatureCard>

        {/* Multiplayer Mode */}
        <FeatureCard>
          <div className="feature-icon">👥</div>
          <div className="feature-tag">COMUNIDAD</div>
          <h3>{gameMultiplayer.title}</h3>
          <p>{gameMultiplayer.description}</p>
          <div className="button-container">
            <PrimaryButton as={Link} to={gameMultiplayer.buttonLink}>
              {gameMultiplayer.buttonText}
            </PrimaryButton>
            <SecondaryButton as={Link} to={gameMultiplayer.secondaryButtonLink || ''}>
              {gameMultiplayer.secondaryButtonText}
            </SecondaryButton>
          </div>
        </FeatureCard>
      </FeaturesSection>

      <GameModesSection>
        <h2>Modos de Juego</h2>
        <TabsContainer>
          {gameModes.map((mode, index) => (
            <Tab 
              key={mode.id} 
              active={index === activeModeIndex}
              onClick={() => setActiveModeIndex(index)}
            >
              {mode.name}
            </Tab>
          ))}
        </TabsContainer>

        <GamesList>
          {gameItems[gameModes[activeModeIndex].id].map((game) => (
            <Link to={game.link} key={game.id} style={{ textDecoration: 'none' }}>
              <GameListItem>
                <div className="game-icon">{game.icon}</div>
                <div className="game-content">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </div>
                <div className="game-arrow">▶</div>
              </GameListItem>
            </Link>
          ))}
        </GamesList>
      </GameModesSection>

      <UserProgressSection>
        <h2>Tu Progreso</h2>
        <ProgressContainer>
          <ProgressItem>
            <div className="progress-icon">🏆</div>
            <div className="progress-label">{userProgress.level}</div>
            <div className="progress-value">{userProgress.percentComplete}% Completado</div>
          </ProgressItem>
          
          <ProgressItem>
            <div className="progress-icon">⭐</div>
            <div className="progress-label">Puntos Ganados</div>
            <div className="progress-value">{userProgress.pointsEarned}</div>
          </ProgressItem>
          
          <ProgressItem>
            <div className="progress-icon">🎖️</div>
            <div className="progress-label">Insignias Desbloqueadas</div>
            <div className="progress-value">{userProgress.badgesUnlocked}</div>
          </ProgressItem>
        </ProgressContainer>
      </UserProgressSection>

      <CommunitySection>
        <h2>Logros de la Comunidad</h2>
        <ChallengesGrid>
          {communityChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id}>
              <div className="challenge-icon">{challenge.id === 'waste-reduction' ? '♻️' : '📊'}</div>
              <div className="challenge-tag">
                {challenge.id === 'waste-reduction' ? 'DESAFÍO SEMANAL' : 'MEJORES JUGADORES'}
              </div>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              
              {challenge.id === 'waste-reduction' && (
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${challenge.percentComplete}%` }}
                  ></div>
                </div>
              )}
              
              <div className="button-container">
                <PrimaryButton as={Link} to={challenge.buttonLink}>
                  {challenge.buttonText}
                </PrimaryButton>
                <SecondaryButton as={Link} to={challenge.secondaryButtonLink || ''}>
                  {challenge.secondaryButtonText}
                </SecondaryButton>
              </div>
            </ChallengeCard>
          ))}
        </ChallengesGrid>
      </CommunitySection>
    </EcoExplorerContainer>
  );
};

export default EcoExplorer; 