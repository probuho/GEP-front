import styled from 'styled-components';

// Nueva paleta de colores según las especificaciones
const SPACE_CADET = '#2D3142'; // Fondo principal, encabezados, textos importantes
const SILVER_SAND = '#BFC0C0'; // Fondos secundarios, bordes, elementos de separación
const WHITE = '#FFFFFF'; // Fondo de áreas de texto, botones destacados
const BURNT_SIENNA = '#EF8354'; // Botones principales, llamadas a la acción
const INDEPENDENCE = '#4F5D75'; // Texto secundario, íconos, información adicional

// Estilos generales de la página
export const SightingsContainer = styled.div`
  font-family: 'Rubik', sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: ${SPACE_CADET};
`;

export const Header = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-family: 'Alegreya SC', serif;
  font-size: 2.5rem;
  color: ${SPACE_CADET};
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${INDEPENDENCE};
  margin-bottom: 20px;
`;

// Estilos para pestañas
export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid ${SILVER_SAND};
`;

export const Tab = styled.button<{ active: boolean }>`
  font-family: 'Kanit', sans-serif;
  padding: 12px 24px;
  background: ${props => (props.active ? WHITE : 'transparent')};
  color: ${props => (props.active ? BURNT_SIENNA : INDEPENDENCE)};
  border: none;
  border-bottom: ${props => (props.active ? `3px solid ${BURNT_SIENNA}` : 'none')};
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${props => (props.active ? '600' : '400')};
  transition: all 0.3s ease;

  &:hover {
    background: ${WHITE};
    color: ${BURNT_SIENNA};
  }
`;

// Estilos para la sección de avistamientos
export const SightingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const SightingCard = styled.div`
  background: ${WHITE};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SightingContent = styled.div`
  padding: 16px;
`;

export const SightingTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${SPACE_CADET};
`;

export const SightingDescription = styled.p`
  font-size: 0.9rem;
  color: ${INDEPENDENCE};
  margin-bottom: 12px;
`;

export const SightingMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${INDEPENDENCE};
`;

export const SightingTag = styled.span<{ category: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => {
    switch (props.category) {
      case 'rare':
        return '#f8edeb';
      case 'endangered':
        return '#fcf0ef';
      default:
        return '#edf6f9';
    }
  }};
  color: ${props => {
    switch (props.category) {
      case 'rare':
        return '#e07a5f';
      case 'endangered':
        return '#d62828';
      default:
        return '#457b9d';
    }
  }};
  margin-right: 8px;
`;

// Estilos para la sección de comunidad
export const ReportTable = styled.div`
  background: ${WHITE};
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 1fr 1fr 0.8fr;
  padding: 16px;
  background: ${SPACE_CADET};
  color: ${WHITE};
  font-weight: 600;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 1fr 1fr 0.8fr;
  padding: 16px;
  border-bottom: 1px solid ${SILVER_SAND};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(191, 192, 192, 0.1);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${SILVER_SAND};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  background: ${props => {
    switch (props.status) {
      case 'verified':
        return '#d8f3dc';
      case 'pending':
        return '#ffefb5';
      default:
        return '#f8d7da';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'verified':
        return '#2d6a4f';
      case 'pending':
        return '#cc8b00';
      default:
        return '#842029';
    }
  }};
`;

// Estilos para alertas
export const AlertsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const AlertCard = styled.div`
  background: ${WHITE};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AlertIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(239, 131, 84, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${BURNT_SIENNA};
  font-size: 1.5rem;
`;

export const AlertTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${SPACE_CADET};
`;

export const AlertDescription = styled.p`
  font-size: 0.9rem;
  color: ${INDEPENDENCE};
  line-height: 1.5;
`;

export const FeaturedContainer = styled.div`
  background: ${WHITE};
  border-radius: 12px;
  padding: 30px;
  margin-top: 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const FeaturedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FeaturedLabel = styled.span`
  font-family: 'Kanit', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${BURNT_SIENNA};
  letter-spacing: 1px;
`;

export const FeaturedTitle = styled.h2`
  font-family: 'Alegreya SC', serif;
  font-size: 2rem;
  color: ${SPACE_CADET};
  margin: 12px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const PrimaryButton = styled.button`
  font-family: 'Kanit', sans-serif;
  background: ${BURNT_SIENNA};
  color: ${WHITE};
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #e06334;
  }
`;

export const SecondaryButton = styled.button`
  font-family: 'Kanit', sans-serif;
  background: transparent;
  color: ${INDEPENDENCE};
  border: 1px solid ${INDEPENDENCE};
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${INDEPENDENCE};
    color: ${WHITE};
  }
`;

// Estilos para la búsqueda y tabla de especies
export const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

export const SearchInput = styled.input`
  padding: 10px 16px;
  border: 1px solid ${SILVER_SAND};
  border-radius: 6px;
  font-family: 'Rubik', sans-serif;
  font-size: 0.9rem;
  flex: 1;
  color: ${SPACE_CADET};
  
  &:focus {
    outline: none;
    border-color: ${BURNT_SIENNA};
    box-shadow: 0 0 0 1px ${BURNT_SIENNA}33;
  }
  
  &::placeholder {
    color: ${SILVER_SAND};
  }
`;

export const SpeciesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${WHITE};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background: ${SPACE_CADET};
  color: ${WHITE};
  
  th {
    padding: 14px 16px;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${SILVER_SAND};
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background: rgba(191, 192, 192, 0.1);
    }
  }
  
  td {
    padding: 14px 16px;
    font-size: 0.9rem;
    color: ${INDEPENDENCE};
  }
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${INDEPENDENCE};
  cursor: pointer;
  margin-right: 8px;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${BURNT_SIENNA};
    background: rgba(239, 131, 84, 0.1);
  }
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 30px;
  color: ${INDEPENDENCE};
  font-size: 1rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: ${INDEPENDENCE};
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 30px;
  color: #842029;
  background: #f8d7da;
  border-radius: 8px;
  margin: 20px 0;
`;
