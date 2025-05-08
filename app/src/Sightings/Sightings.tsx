import React, { useState, useEffect } from 'react';
import { FaSearch, FaEdit, FaTrash, FaLeaf, FaBinoculars, FaUsers } from 'react-icons/fa';
import { GiButterfly, GiDeer, GiBirdHouse, GiSnake } from 'react-icons/gi';
import axios from 'axios';

import { 
  SightingItem, 
  CommunityReport, 
  ConservationAlert,
  SpeciesOfMonth,
  SpeciesItem
} from './interfaces/SightingsInterfaces';

import {
  SightingsContainer,
  Header,
  Title,
  Subtitle,
  TabContainer,
  Tab,
  SightingGrid,
  SightingCard,
  SightingContent,
  SightingTitle,
  SightingDescription,
  SightingMeta,
  SightingTag,
  ReportTable,
  TableHeader,
  TableRow,
  UserInfo,
  Avatar,
  StatusBadge,
  AlertsContainer,
  AlertCard,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FeaturedContainer,
  FeaturedHeader,
  FeaturedLabel,
  FeaturedTitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  SearchContainer,
  SearchInput,
  SpeciesTable,
  TableHead,
  TableBody,
  ActionButton,
  NoResults,
  LoadingContainer,
  ErrorContainer
} from './styles/SightingsStyles';

// Datos de ejemplo para desarrollo
const sampleSightings: SightingItem[] = [
  {
    id: '1',
    title: 'Quetzal avistado en el bosque nuboso',
    description: 'Avistamiento raro de un quetzal macho adulto en su hábitat natural durante la temporada de apareamiento.',
    category: 'rare',
    timeAgo: 'hace 2 días',
    location: 'Sierra de las Minas, Guatemala'
  },
  {
    id: '2',
    title: 'Jaguar cerca de la reserva natural',
    description: 'Jaguar adulto fotografiado cerca del borde de la reserva. Se estima que tiene aproximadamente 5 años.',
    category: 'endangered',
    timeAgo: 'hace 1 semana',
    location: 'Reserva de la Biosfera Calakmul'
  },
  {
    id: '3',
    title: 'Grupo de monos aulladores',
    description: 'Familia de monos aulladores observados en la copa de los árboles. Incluían crías y adultos.',
    category: 'common',
    timeAgo: 'hace 3 días',
    location: 'Parque Nacional Tikal'
  },
  {
    id: '4',
    title: 'Halcón peregrino migratorio',
    description: 'Halcón peregrino observado durante su ruta migratoria anual. Presentaba plumaje juvenil.',
    category: 'rare',
    timeAgo: 'hace 5 días',
    location: 'Costa de Veracruz'
  }
];

const sampleReports: CommunityReport[] = [
  {
    id: 1,
    user: {
      name: 'Carlos Mendoza',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    location: 'Parque Natural Sierra de Huautla',
    species: 'Águila real (Aquila chrysaetos)',
    date: '15/05/2023',
    status: 'verified'
  },
  {
    id: 2,
    user: {
      name: 'Ana Gutiérrez',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    location: 'Reserva de la Biosfera El Triunfo',
    species: 'Quetzal (Pharomachrus mocinno)',
    date: '10/05/2023',
    status: 'pending'
  },
  {
    id: 3,
    user: {
      name: 'Miguel Ángel López',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    location: 'Parque Nacional Izta-Popo',
    species: 'Zorra gris (Urocyon cinereoargenteus)',
    date: '05/05/2023',
    status: 'verified'
  }
];

const conservationAlerts: ConservationAlert[] = [
  {
    id: '1',
    title: 'Protección del ajolote mexicano',
    description: 'Nueva iniciativa para proteger el hábitat del ajolote mexicano en Xochimilco.',
    icon: '🌊'
  },
  {
    id: '2',
    title: 'Temporada de anidación de tortugas',
    description: 'La temporada de anidación de tortugas marinas ha comenzado. Se solicitan voluntarios para vigilancia nocturna.',
    icon: '🐢'
  },
  {
    id: '3',
    title: 'Avistamientos de ballena jorobada',
    description: 'Reporta tus avistamientos de ballenas jorobadas durante su migración anual a lo largo de la costa pacífica.',
    icon: '🐋'
  }
];

const speciesOfMonth: SpeciesOfMonth = {
  id: '1',
  month: 'Mayo 2023',
  title: 'Mariposa Monarca (Danaus plexippus)',
  description: 'La mariposa monarca es conocida por su extraordinaria migración anual desde Canadá y Estados Unidos hasta los bosques de oyamel en México. Durante este mes, puedes observar su llegada a las regiones montañosas del centro del país.',
  icon: '🦋',
  primaryButtonText: 'Conocer más',
  primaryButtonLink: '/especies/monarca',
  secondaryButtonText: 'Reportar avistamiento',
  secondaryButtonLink: '/reporte'
};

// Componente principal
const Sightings: React.FC = () => {
  // Estados para las pestañas
  const [activeTab, setActiveTab] = useState('sightings');
  
  // Estados para el catálogo de especies
  const [species, setSpecies] = useState<SpeciesItem[]>([]);
  const [filteredSpecies, setFilteredSpecies] = useState<SpeciesItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Datos de ejemplo para especies
  const sampleSpecies: SpeciesItem[] = [
    {
      id: '1',
      nombre: 'Lobo Mexicano',
      tamano: 70,
      peso: 35,
      habitat: 'Bosques de pino-encino, pastizales',
      alimentacion: 'Carnívoro (venados, liebres, roedores)',
      tipo: 'Mamífero',
      descripcion: 'El lobo mexicano es una subespecie en peligro de extinción. Es de menor tamaño que otras subespecies de lobos grises.'
    },
    {
      id: '2',
      nombre: 'Quetzal Resplandeciente',
      tamano: 36,
      peso: 0.21,
      habitat: 'Bosques nubosos',
      alimentacion: 'Frugívoro (aguacates silvestres, bayas)',
      tipo: 'Ave',
      descripcion: 'El quetzal resplandeciente es conocido por su colorido plumaje. Los machos tienen plumas de cola que pueden exceder los 60 cm.'
    },
    {
      id: '3',
      nombre: 'Jaguar',
      tamano: 170,
      peso: 95,
      habitat: 'Selvas tropicales, pantanos, manglares',
      alimentacion: 'Carnívoro (pecaríes, tapires, caimanes)',
      tipo: 'Mamífero',
      descripcion: 'El jaguar es el felino más grande de América y el tercero más grande del mundo. Es conocido por su fuerza y capacidad para romper caparazones de tortugas.'
    },
    {
      id: '4',
      nombre: 'Rana de Cristal',
      tamano: 3,
      peso: 0.02,
      habitat: 'Bosques tropicales húmedos',
      alimentacion: 'Insectívoro',
      tipo: 'Anfibio',
      descripcion: 'Las ranas de cristal tienen una piel transparente a través de la cual se pueden ver sus órganos internos.'
    },
    {
      id: '5',
      nombre: 'Ajolote Mexicano',
      tamano: 25,
      peso: 0.1,
      habitat: 'Lagos y canales de agua dulce',
      alimentacion: 'Carnívoro (pequeños crustáceos, larvas)',
      tipo: 'Anfibio',
      descripcion: 'El ajolote mexicano es conocido por su capacidad única de regeneración de extremidades y órganos.'
    }
  ];

  // Efectos para cargar datos
  useEffect(() => {
    if (activeTab === 'species') {
      fetchSpecies();
    }
  }, [activeTab]);

  // Efecto para filtrar especies
  useEffect(() => {
    if (species.length > 0) {
      const filtered = species.filter(item => 
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.habitat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.alimentacion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSpecies(filtered);
    }
  }, [searchTerm, species]);

  // Función para obtener especies desde la API
  const fetchSpecies = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Para desarrollo, usamos datos de ejemplo
      // En producción, descomentar esta línea y comentar la siguiente
      // const response = await axios.get('/api/especies');
      // setSpecies(response.data);
      
      // Simulación de carga para desarrollo
      setTimeout(() => {
        setSpecies(sampleSpecies);
        setFilteredSpecies(sampleSpecies);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError('Error al cargar las especies. Por favor, intenta de nuevo.');
      setLoading(false);
    }
  };

  // Función para manejar eliminación de especie
  const handleDeleteSpecies = async (id: string) => {
    // En producción, descomentar esta línea
    // await axios.delete(`/api/especies/${id}`);
    
    // Eliminar de la lista local
    const updatedSpecies = species.filter(item => item.id !== id);
    setSpecies(updatedSpecies);
    setFilteredSpecies(updatedSpecies.filter(item => 
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.habitat.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  // Función para mostrar ícono según tipo de especie
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mamífero':
        return <GiDeer size={20} />;
      case 'ave':
        return <GiBirdHouse size={20} />;
      case 'reptil':
        return <GiSnake size={20} />;
      case 'anfibio':
        return <FaLeaf size={20} />;
      case 'insecto':
        return <GiButterfly size={20} />;
      default:
        return <FaLeaf size={20} />;
    }
  };

  return (
    <SightingsContainer>
      <Header>
        <Title>Avistamientos de Vida Silvestre</Title>
        <Subtitle>
          Descubre y comparte avistamientos de especies en su hábitat natural, contribuye a la conservación 
          y participa en nuestra comunidad de observadores.
        </Subtitle>
      </Header>
      
      <TabContainer>
        <Tab 
          active={activeTab === 'sightings'} 
          onClick={() => setActiveTab('sightings')}
        >
          <FaBinoculars style={{ marginRight: '8px' }} /> Avistamientos
        </Tab>
        <Tab 
          active={activeTab === 'community'} 
          onClick={() => setActiveTab('community')}
        >
          <FaUsers style={{ marginRight: '8px' }} /> Comunidad
        </Tab>
        <Tab 
          active={activeTab === 'species'} 
          onClick={() => setActiveTab('species')}
        >
          <GiButterfly style={{ marginRight: '8px' }} /> Catálogo de Especies
        </Tab>
      </TabContainer>
      
      {/* Contenido de la pestaña de avistamientos */}
      {activeTab === 'sightings' && (
        <>
          <SightingGrid>
            {sampleSightings.map(sighting => (
              <SightingCard key={sighting.id}>
                <SightingContent>
                  <SightingTitle>{sighting.title}</SightingTitle>
                  <SightingDescription>{sighting.description}</SightingDescription>
                  <SightingMeta>
                    <div>
                      <SightingTag category={sighting.category}>
                        {sighting.category === 'rare' ? 'Raro' : 
                          sighting.category === 'endangered' ? 'En peligro' : 'Común'}
                      </SightingTag>
                    </div>
                    <div>{sighting.timeAgo} • {sighting.location}</div>
                  </SightingMeta>
                </SightingContent>
              </SightingCard>
            ))}
          </SightingGrid>
          
          <FeaturedContainer>
            <FeaturedHeader>
              <FeaturedLabel>Especie del Mes</FeaturedLabel>
            </FeaturedHeader>
            <FeaturedTitle>{speciesOfMonth.title}</FeaturedTitle>
            <AlertDescription>{speciesOfMonth.description}</AlertDescription>
            <ButtonGroup>
              <PrimaryButton>{speciesOfMonth.primaryButtonText}</PrimaryButton>
              <SecondaryButton>{speciesOfMonth.secondaryButtonText}</SecondaryButton>
            </ButtonGroup>
          </FeaturedContainer>
          
          <Title style={{ fontSize: '1.8rem', marginTop: '40px' }}>Alertas de Conservación</Title>
          <AlertsContainer>
            {conservationAlerts.map(alert => (
              <AlertCard key={alert.id}>
                <AlertIcon>{alert.icon}</AlertIcon>
                <div>
                  <AlertTitle>{alert.title}</AlertTitle>
                  <AlertDescription>{alert.description}</AlertDescription>
                </div>
              </AlertCard>
            ))}
          </AlertsContainer>
        </>
      )}
      
      {/* Contenido de la pestaña de comunidad */}
      {activeTab === 'community' && (
        <>
          <Title style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Reportes de la Comunidad</Title>
          <ReportTable>
            <TableHeader>
              <div>Usuario</div>
              <div>Ubicación</div>
              <div>Especie</div>
              <div>Fecha</div>
              <div>Estado</div>
            </TableHeader>
            {sampleReports.map(report => (
              <TableRow key={report.id}>
                <UserInfo>
                  <Avatar>
                    <img src={report.user.avatar} alt={report.user.name} />
                  </Avatar>
                  <span>{report.user.name}</span>
                </UserInfo>
                <div>{report.location}</div>
                <div>{report.species}</div>
                <div>{report.date}</div>
                <div>
                  <StatusBadge status={report.status}>
                    {report.status === 'verified' ? 'Verificado' : 
                     report.status === 'pending' ? 'Pendiente' : 'Rechazado'}
                  </StatusBadge>
                </div>
              </TableRow>
            ))}
          </ReportTable>
        </>
      )}
      
      {/* Contenido de la pestaña de especies */}
      {activeTab === 'species' && (
        <>
          <Title style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Catálogo de Especies</Title>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Buscar por nombre, tipo, hábitat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <PrimaryButton>
              <FaSearch style={{ marginRight: '8px' }} />
              Buscar
            </PrimaryButton>
          </SearchContainer>
          
          {loading ? (
            <LoadingContainer>Cargando catálogo de especies...</LoadingContainer>
          ) : error ? (
            <ErrorContainer>{error}</ErrorContainer>
          ) : (
            <SpeciesTable>
              <TableHead>
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Tamaño (cm)</th>
                  <th>Peso (kg)</th>
                  <th>Hábitat</th>
                  <th>Acciones</th>
                </tr>
              </TableHead>
              <TableBody>
                {filteredSpecies.length > 0 ? (
                  filteredSpecies.map(item => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {getTypeIcon(item.tipo)}
                          {item.tipo}
                        </div>
                      </td>
                      <td>{item.tamano}</td>
                      <td>{item.peso}</td>
                      <td>{item.habitat}</td>
                      <td>
                        <ActionButton title="Editar">
                          <FaEdit />
                        </ActionButton>
                        <ActionButton 
                          title="Eliminar" 
                          onClick={() => handleDeleteSpecies(item.id)}
                        >
                          <FaTrash />
                        </ActionButton>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>
                      <NoResults>
                        No se encontraron especies que coincidan con tu búsqueda.
                      </NoResults>
                    </td>
                  </tr>
                )}
              </TableBody>
            </SpeciesTable>
          )}
        </>
      )}
    </SightingsContainer>
  );
};

export default Sightings;
