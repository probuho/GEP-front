import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RoutesContainer,
  HeaderSection,
  TabsContainer,
  Tab,
  SearchContainer,
  SearchInput,
  FilterButton,
  SectionTitle,
  FeaturedRoutesGrid,
  RouteCard,
  RouteCardHeader,
  RouteCardBody,
  RouteButtonsContainer,
  RouteButton,
  SaveButton,
  RecentlyAddedSection,
  RecentRoutesList,
  RecentRouteItem,
  CommunitySection,
  AchievementsGrid,
  AchievementCard,
  CreateRouteButton
} from './Routes.styles';
import {
  RouteTab,
  HikingRoute,
  RecentlyAddedRoute,
  CommunityAchievement,
  DifficultyLevel
} from './interfaces/RoutesInterfaces';

const Routes: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [currentFeaturedPage, setCurrentFeaturedPage] = useState(1);
  const featuredPageSize = 6;
  const totalFeaturedPages = Math.ceil(featuredRoutes.length / featuredPageSize);
  const paginatedFeaturedRoutes = featuredRoutes.slice((currentFeaturedPage - 1) * featuredPageSize, currentFeaturedPage * featuredPageSize);

  const [currentRecentPage, setCurrentRecentPage] = useState(1);
  const recentPageSize = 6;
  const totalRecentPages = Math.ceil(recentlyAddedRoutes.length / recentPageSize);
  const paginatedRecentlyAddedRoutes = recentlyAddedRoutes.slice((currentRecentPage - 1) * recentPageSize, currentRecentPage * recentPageSize);

  const tabs: RouteTab[] = [
    { id: 'all', name: 'Todas las Rutas' },
    { id: 'nearby', name: 'Cercanas' },
    { id: 'favorites', name: 'Favoritas' },
    { id: 'my-routes', name: 'Mis Rutas' },
  ];

  const featuredRoutes: HikingRoute[] = [
    {
      id: 'redwood-canyon',
      title: 'Sendero Cañón Secuoya',
      description: 'Bosque antiguo con secuoyas imponentes y vida silvestre diversa. Sendero bien mantenido con elevación moderada.',
      difficulty: DifficultyLevel.MODERATE,
      distance: 5.2,
    },
    {
      id: 'coastal-bluff',
      title: 'Ruta Costera Acantilado',
      description: 'Sendero costero con vistas panorámicas al océano. Perfecto para familias y principiantes con elevación mínima.',
      difficulty: DifficultyLevel.EASY,
      distance: 3.8,
    },
    {
      id: 'eagle-peak',
      title: 'Cumbre Pico Águila',
      description: 'Sendero montañoso desafiante con vistas espectaculares del valle. Las secciones empinadas requieren buena condición física y experiencia en senderismo.',
      difficulty: DifficultyLevel.DIFFICULT,
      distance: 8.7,
    },
  ];

  const recentlyAddedRoutes: RecentlyAddedRoute[] = [
    {
      id: 'wildflower-meadow',
      title: 'Sendero Prado de Flores Silvestres',
      description: 'Un hermoso camino a través de prados llenos de flores silvestres',
      difficulty: DifficultyLevel.EASY,
      distance: 2.4,
      addedDaysAgo: 2,
      rating: 4.8,
      totalReviews: 32,
    },
    {
      id: 'lakeside-mountain',
      title: 'Sendero Montaña Lacustre',
      description: 'Recorrido por la ladera montañosa con vistas al lago',
      difficulty: DifficultyLevel.MODERATE,
      distance: 6.1,
      addedDaysAgo: 3,
      rating: 4.6,
      totalReviews: 47,
    },
    {
      id: 'desert-canyon',
      title: 'Expedición Cañón Desierto',
      description: 'Travesía a través del cañón desértico con formaciones rocosas únicas',
      difficulty: DifficultyLevel.DIFFICULT,
      distance: 7.8,
      addedDaysAgo: 5,
      rating: 4.9,
      totalReviews: 18,
    },
    {
      id: 'riverside-nature',
      title: 'Paseo Natural Ribereño',
      description: 'Tranquilo paseo junto al río observando la flora y fauna local',
      difficulty: DifficultyLevel.EASY,
      distance: 1.9,
      addedDaysAgo: 7,
      rating: 4.5,
      totalReviews: 63,
    },
  ];

  const communityAchievements: CommunityAchievement[] = [
    {
      id: 'new-routes',
      value: '328',
      description: 'Nuevas rutas mapeadas por nuestros exploradores comunitarios este año',
      icon: '📍',
    },
    {
      id: 'miles-hiked',
      value: '12,450',
      description: 'Kilómetros recorridos colectivamente por usuarios de la Guía del Explorador',
      icon: '🥾',
    },
    {
      id: 'photos-shared',
      value: '4,872',
      description: 'Fotos compartidas desde senderos alrededor del mundo',
      icon: '📸',
    },
  ];

  // Función para renderizar el icono según la dificultad
  const getRouteIcon = (difficulty: DifficultyLevel) => {
    switch(difficulty) {
      case DifficultyLevel.EASY:
        return '🌊';
      case DifficultyLevel.MODERATE:
        return '🌲';
      case DifficultyLevel.DIFFICULT:
        return '⛰️';
      default:
        return '🥾';
    }
  };

  return (
    <RoutesContainer>
      <HeaderSection>
        <h1>Rutas de Senderismo</h1>
        <p>Descubre senderos escénicos y maravillas naturales</p>
      </HeaderSection>

      <TabsContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            active={index === activeTabIndex}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </Tab>
        ))}
      </TabsContainer>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar rutas por nombre, ubicación..."
        />
        <FilterButton>Filtros</FilterButton>
      </SearchContainer>

      <SectionTitle>Rutas Destacadas</SectionTitle>
      <FeaturedRoutesGrid>
        {paginatedFeaturedRoutes.map((route) => (
          <RouteCard key={route.id}>
            <RouteCardHeader difficulty={route.difficulty}>
              <div className="route-icon">
                {getRouteIcon(route.difficulty)}
              </div>
              <div className="route-info">
                <div className="difficulty">
                  {route.difficulty} • {route.distance} KM
                </div>
              </div>
            </RouteCardHeader>
            <RouteCardBody>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
            </RouteCardBody>
            <RouteButtonsContainer>
              <RouteButton>Ver Detalles</RouteButton>
              <SaveButton>Guardar</SaveButton>
            </RouteButtonsContainer>
          </RouteCard>
        ))}
      </FeaturedRoutesGrid>

      {/* Controles de paginación para rutas destacadas */}
      {totalFeaturedPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
          <button onClick={() => setCurrentFeaturedPage(p => Math.max(1, p - 1))} disabled={currentFeaturedPage === 1}>Anterior</button>
          {Array.from({ length: totalFeaturedPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentFeaturedPage(i + 1)}
              style={{ fontWeight: currentFeaturedPage === i + 1 ? 'bold' : 'normal' }}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentFeaturedPage(p => Math.min(totalFeaturedPages, p + 1))} disabled={currentFeaturedPage === totalFeaturedPages}>Siguiente</button>
        </div>
      )}

      <RecentlyAddedSection>
        <SectionTitle>Rutas Recientemente Añadidas</SectionTitle>
        <RecentRoutesList>
          {paginatedRecentlyAddedRoutes.map((route) => (
            <RecentRouteItem key={route.id}>
              <div className="route-icon">
                {getRouteIcon(route.difficulty)}
              </div>
              <div className="route-info">
                <div className="route-title">{route.title}</div>
                <div className="difficulty">
                  {route.difficulty} • {route.distance} KM
                </div>
              </div>
              <div>
                {route.addedDaysAgo === 7 
                  ? `Agregada hace 1 semana` 
                  : `Agregada hace ${route.addedDaysAgo} días`}
              </div>
              <div className="rating">
                {route.rating} ★ 
                <span className="rating-count">({route.totalReviews})</span>
              </div>
              <div className="actions">
                <button className="favorite-button">❤️</button>
                <button className="more-button">⋮</button>
              </div>
            </RecentRouteItem>
          ))}
        </RecentRoutesList>

        {/* Controles de paginación para rutas recientes */}
        {totalRecentPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
            <button onClick={() => setCurrentRecentPage(p => Math.max(1, p - 1))} disabled={currentRecentPage === 1}>Anterior</button>
            {Array.from({ length: totalRecentPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentRecentPage(i + 1)}
                style={{ fontWeight: currentRecentPage === i + 1 ? 'bold' : 'normal' }}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => setCurrentRecentPage(p => Math.min(totalRecentPages, p + 1))} disabled={currentRecentPage === totalRecentPages}>Siguiente</button>
          </div>
        )}
      </RecentlyAddedSection>

      <CommunitySection>
        <SectionTitle>Logros de la Comunidad</SectionTitle>
        <AchievementsGrid>
          {communityAchievements.map((achievement) => (
            <AchievementCard key={achievement.id}>
              <div className="icon">{achievement.icon}</div>
              <div className="value">{achievement.value}</div>
              <div className="description">{achievement.description}</div>
            </AchievementCard>
          ))}
        </AchievementsGrid>
      </CommunitySection>

      <CreateRouteButton>Crear Nueva Ruta</CreateRouteButton>
    </RoutesContainer>
  );
};

export default Routes; 