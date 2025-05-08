import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedModules from './components/FeaturedModules';
import CommunityContributions from './components/CommunityContributions';
import EnvironmentalStats from './components/EnvironmentalStats';
import NavModules from './components/NavModules';
import { 
  HomeContainer, 
  MainHeader, 
  DiscoverButton, 
  Section, 
  SectionTitle,
  JoinCommunityContainer,
  JoinCommunityButton
} from './HomePage.styles';

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      {/* Encabezado principal */}
      <MainHeader>
        <h1>Guía del Explorador</h1>
        <h2>Explora, Aprende y Conserva</h2>
        <DiscoverButton as={Link} to="/discover">
          Descubrir la Naturaleza
        </DiscoverButton>
      </MainHeader>

      {/* Navegación de módulos */}
      <NavModules />

      {/* Módulos destacados */}
      <Section>
        <SectionTitle>Módulos Destacados</SectionTitle>
        <FeaturedModules />
      </Section>

      {/* Contribuciones de la comunidad */}
      <Section>
        <SectionTitle>Últimas Contribuciones de la Comunidad</SectionTitle>
        <CommunityContributions />
      </Section>

      {/* Estadísticas ambientales */}
      <Section>
        <SectionTitle>Estadísticas Ambientales</SectionTitle>
        <EnvironmentalStats />
      </Section>

      <JoinCommunityContainer>
        <JoinCommunityButton as={Link} to="/community">
          Únete a Nuestra Comunidad
        </JoinCommunityButton>
      </JoinCommunityContainer>
    </HomeContainer>
  );
};

export default HomePage; 