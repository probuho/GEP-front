import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CommunityContainer,
  HeaderSection,
  VerifiedSightingsSection,
  VerifiedHeader,
  SightingsGrid,
  SightingCard,
  TabsContainer,
  Tab,
  SearchContainer,
  SearchInput,
  ButtonsContainer,
  NewPostButton,
  EditWikiButton,
  SectionTitle,
  DiscussionList,
  DiscussionItem,
  WikiArticlesSection,
  WikiArticlesList,
  WikiArticleItem,
  RecentActivitySection,
  ActivityList,
  ActivityItem,
  CommunityCardsGrid,
  CommunityCard
} from './Community.styles';
import {
  ForumTab,
  VerifiedSighting,
  PopularDiscussion,
  WikiArticle,
  RecentActivity,
  CommunityCard as CommunityCardInterface
} from './interfaces/CommunityInterfaces';

const Community: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [currentDiscussionPage, setCurrentDiscussionPage] = useState(1);
  const discussionPageSize = 5;
  const totalDiscussionPages = Math.ceil(popularDiscussions.length / discussionPageSize);
  const paginatedDiscussions = popularDiscussions.slice((currentDiscussionPage - 1) * discussionPageSize, currentDiscussionPage * discussionPageSize);

  const [currentWikiPage, setCurrentWikiPage] = useState(1);
  const wikiPageSize = 5;
  const totalWikiPages = Math.ceil(wikiArticles.length / wikiPageSize);
  const paginatedWikiArticles = wikiArticles.slice((currentWikiPage - 1) * wikiPageSize, currentWikiPage * wikiPageSize);

  const [currentActivityPage, setCurrentActivityPage] = useState(1);
  const activityPageSize = 5;
  const totalActivityPages = Math.ceil(recentActivities.length / activityPageSize);
  const paginatedActivities = recentActivities.slice((currentActivityPage - 1) * activityPageSize, currentActivityPage * activityPageSize);

  const tabs: ForumTab[] = [
    { id: 'all', name: 'Todos los Temas' },
    { id: 'discussions', name: 'Discusiones' },
    { id: 'questions', name: 'Preguntas' },
    { id: 'wiki', name: 'Wiki' },
    { id: 'events', name: 'Eventos' },
    { id: 'guides', name: 'Guías' },
  ];

  const verifiedSightings: VerifiedSighting[] = [
    {
      id: 'hawk',
      title: 'Halcón Cola Roja',
      description: '5 avistamientos verificados esta semana',
      icon: '🦅',
      action: {
        text: 'Ver Detalles',
        link: '/sightings/hawk',
      },
    },
    {
      id: 'lion',
      title: 'León de Montaña',
      description: 'Avistamiento raro confirmado ayer',
      icon: '🦁',
      action: {
        text: 'Ver Detalles',
        link: '/sightings/lion',
      },
    },
    {
      id: 'butterfly',
      title: 'Mariposa Monarca',
      description: 'Patrón de migración documentado',
      icon: '🦋',
      action: {
        text: 'Ver Detalles',
        link: '/sightings/butterfly',
      },
    },
    {
      id: 'all',
      title: 'Todos Verificados',
      description: 'Explora nuestra base de datos completa',
      icon: '🔍',
      action: {
        text: 'Explorar Wiki',
        link: '/wiki',
      },
    },
  ];

  const popularDiscussions: PopularDiscussion[] = [
    {
      id: 1,
      title: 'Mejores senderos para observación de aves esta primavera',
      user: {
        id: 1,
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      replies: 32,
      updatedTime: 'Actualizado hace 2 horas',
    },
    {
      id: 2,
      title: 'Avistamiento raro de búho en el Parque Nacional Redwood',
      user: {
        id: 2,
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      replies: 18,
      updatedTime: 'Actualizado ayer',
      addedToWiki: true,
    },
    {
      id: 3,
      title: 'Evento de voluntariado para conservación este fin de semana',
      user: {
        id: 3,
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      replies: 45,
      updatedTime: 'Actualizado hace 3 días',
    },
  ];

  const wikiArticles: WikiArticle[] = [
    {
      id: 'birds',
      title: 'Guía de Aves Locales',
      type: 'Wiki Colaborativa',
      lastUpdated: 'Última actualización hace 2 días',
      isStarred: true,
    },
    {
      id: 'endangered',
      title: 'Especies en Peligro en Nuestra Región',
      type: 'Wiki Colaborativa',
      lastUpdated: 'Última actualización hace 1 semana',
      isStarred: true,
    },
    {
      id: 'calendar',
      title: 'Calendario de Vida Silvestre por Temporada',
      type: 'Wiki Colaborativa',
      lastUpdated: 'Última actualización hace 3 días',
    },
  ];

  const recentActivities: RecentActivity[] = [
    {
      id: 1,
      type: 'post',
      user: {
        id: 1,
        name: 'María G.',
        avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      },
      title: 'Consejos para identificar huellas de animales',
      action: 'Iniciado por',
      time: 'hace 5 minutos',
    },
    {
      id: 2,
      type: 'wiki-edit',
      user: {
        id: 2,
        name: 'Juan D.',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      title: 'Wiki: Flores Silvestres Locales',
      action: 'Editado por',
      time: 'hace 1 hora',
    },
    {
      id: 3,
      type: 'sighting',
      user: {
        id: 3,
        name: 'Admin',
        avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      },
      title: 'Avistamiento Verificado: Águila Calva',
      action: 'Confirmado por',
      time: 'hace 3 horas',
    },
  ];

  const communityCards: CommunityCardInterface[] = [
    {
      id: 'guidelines',
      title: 'Directrices de la Comunidad',
      description: 'Conoce las reglas de nuestro foro y las mejores prácticas para interactuar con otros entusiastas de la naturaleza.',
      icon: 'ℹ️',
      action: {
        text: 'Leer Directrices',
        link: '/community/guidelines',
      },
    },
    {
      id: 'contribution',
      title: 'Contribución a la Wiki',
      description: 'Ayuda a construir nuestra base de conocimientos contribuyendo con avistamientos verificados e información sobre especies.',
      icon: '✏️',
      action: {
        text: 'Cómo Contribuir',
        link: '/wiki/contribute',
      },
    },
    {
      id: 'experts',
      title: 'Rincón de Expertos',
      description: 'Conéctate con biólogos, guardabosques y excursionistas experimentados para obtener consejos.',
      icon: '👩‍🔬',
      action: {
        text: 'Conocer Expertos',
        link: '/experts',
      },
    },
  ];

  return (
    <CommunityContainer>
      <HeaderSection>
        <h1>Foro de la Comunidad</h1>
      </HeaderSection>

      <VerifiedSightingsSection>
        <VerifiedHeader>
          <div className="icon">👁️</div>
          <div>
            <div className="verified-tag">VERIFICADO POR LA COMUNIDAD</div>
            <h2>Resumen de Avistamientos Verificados</h2>
            <p>Observaciones recientes de vida silvestre verificadas por nuestra red de exploradores.</p>
          </div>
        </VerifiedHeader>
        <SightingsGrid>
          {verifiedSightings.map((sighting) => (
            <SightingCard key={sighting.id}>
              <div className="icon">{sighting.icon}</div>
              <h3>{sighting.title}</h3>
              <p>{sighting.description}</p>
              <Link to={sighting.action.link} className="view-button">
                {sighting.action.text}
              </Link>
            </SightingCard>
          ))}
        </SightingsGrid>
      </VerifiedSightingsSection>

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
          placeholder="Buscar discusiones y wiki..."
        />
        <ButtonsContainer>
          <NewPostButton>Nueva Publicación</NewPostButton>
          <EditWikiButton>Editar Wiki</EditWikiButton>
        </ButtonsContainer>
      </SearchContainer>

      <SectionTitle>Discusiones Populares</SectionTitle>
      <DiscussionList>
        {paginatedDiscussions.map((discussion) => (
          <DiscussionItem key={discussion.id}>
            <div className="avatar">
              <img src={discussion.user.avatar} alt="Avatar del usuario" />
            </div>
            <div className="content">
              <div className="title">{discussion.title}</div>
              <div className="meta">
                {discussion.replies} respuestas • {discussion.updatedTime}
                {discussion.addedToWiki && (
                  <span className="wiki-badge">Añadido a Wiki</span>
                )}
              </div>
            </div>
            <div className="actions">
              <button className="action-button">💬</button>
              <button className="action-button">⋮</button>
            </div>
          </DiscussionItem>
        ))}
      </DiscussionList>

      {totalDiscussionPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
          <button onClick={() => setCurrentDiscussionPage(p => Math.max(1, p - 1))} disabled={currentDiscussionPage === 1}>Anterior</button>
          {Array.from({ length: totalDiscussionPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentDiscussionPage(i + 1)}
              style={{ fontWeight: currentDiscussionPage === i + 1 ? 'bold' : 'normal' }}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentDiscussionPage(p => Math.min(totalDiscussionPages, p + 1))} disabled={currentDiscussionPage === totalDiscussionPages}>Siguiente</button>
        </div>
      )}

      <WikiArticlesSection>
        <SectionTitle>Artículos Destacados de la Wiki</SectionTitle>
        <WikiArticlesList>
          {paginatedWikiArticles.map((article) => (
            <WikiArticleItem key={article.id} theme={{ starred: article.isStarred }}>
              <div className="article-icon">📄</div>
              <div className="article-info">
                <div className="article-title">{article.title}</div>
                <div className="article-type">{article.type}</div>
              </div>
              <div className="updated-time">
                {article.lastUpdated}
              </div>
              <div className="actions">
                <button className="star-button">
                  {article.isStarred ? '★' : '☆'}
                </button>
                <button className="navigate-button">→</button>
              </div>
            </WikiArticleItem>
          ))}
        </WikiArticlesList>
      </WikiArticlesSection>

      {totalWikiPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
          <button onClick={() => setCurrentWikiPage(p => Math.max(1, p - 1))} disabled={currentWikiPage === 1}>Anterior</button>
          {Array.from({ length: totalWikiPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentWikiPage(i + 1)}
              style={{ fontWeight: currentWikiPage === i + 1 ? 'bold' : 'normal' }}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentWikiPage(p => Math.min(totalWikiPages, p + 1))} disabled={currentWikiPage === totalWikiPages}>Siguiente</button>
        </div>
      )}

      <RecentActivitySection>
        <SectionTitle>Actividad Reciente</SectionTitle>
        <ActivityList>
          {paginatedActivities.map((activity) => (
            <ActivityItem key={activity.id}>
              <div className="avatar">
                <img src={activity.user.avatar} alt={activity.user.name} />
              </div>
              <div className="activity-info">
                <div className="activity-title">{activity.title}</div>
                <div className="activity-details">
                  {activity.action} {activity.user.name}
                </div>
              </div>
              <div className="time">
                {activity.time}
              </div>
              <button className="navigate-button">→</button>
            </ActivityItem>
          ))}
        </ActivityList>
      </RecentActivitySection>

      {totalActivityPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
          <button onClick={() => setCurrentActivityPage(p => Math.max(1, p - 1))} disabled={currentActivityPage === 1}>Anterior</button>
          {Array.from({ length: totalActivityPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentActivityPage(i + 1)}
              style={{ fontWeight: currentActivityPage === i + 1 ? 'bold' : 'normal' }}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrentActivityPage(p => Math.min(totalActivityPages, p + 1))} disabled={currentActivityPage === totalActivityPages}>Siguiente</button>
        </div>
      )}

      <CommunityCardsGrid>
        {communityCards.map((card) => (
          <CommunityCard key={card.id}>
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to={card.action.link} className="card-button">
              {card.action.text}
            </Link>
          </CommunityCard>
        ))}
      </CommunityCardsGrid>
    </CommunityContainer>
  );
};

export default Community; 