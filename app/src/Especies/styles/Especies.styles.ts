import styled from 'styled-components';

export const EspeciesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeaderSection = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  width: 300px;

  input {
    border: none;
    background: transparent;
    width: 100%;
    padding: 0.3rem;
    font-size: 0.9rem;
    outline: none;
    color: #333;

    &::placeholder {
      color: #aaa;
    }
  }

  .search-icon {
    color: #aaa;
    margin-right: 0.5rem;
  }
`;

export const FilterControls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const FilterButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  .filter-icon {
    font-size: 1rem;
  }
`;

export const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

export const EspeciesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const EspecieCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const EspecieImageContainer = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
  background-color: #e9e9f2;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-icon {
    font-size: 3rem;
    color: #9f9fb7;
  }
`;

export const EspecieTypeTag = styled.div<{ tipo: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${props => {
    switch (props.tipo.toLowerCase()) {
      case 'mamífero':
      case 'mamifero':
        return 'rgba(76, 175, 80, 0.85)';
      case 'ave':
        return 'rgba(33, 150, 243, 0.85)';
      case 'reptil':
        return 'rgba(255, 152, 0, 0.85)';
      case 'anfibio':
        return 'rgba(156, 39, 176, 0.85)';
      case 'pez':
        return 'rgba(0, 188, 212, 0.85)';
      case 'insecto':
        return 'rgba(233, 30, 99, 0.85)';
      default:
        return 'rgba(158, 158, 158, 0.85)';
    }
  }};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const EspecieContent = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  height: calc(100% - 180px);
`;

export const EspecieTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const EspecieDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
`;

export const DetailItem = styled.div`
  .label {
    color: #888;
    font-weight: 500;
  }
  
  .value {
    color: #333;
  }
`;

export const EspecieDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  flex-grow: 1;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #6c5ce7;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f7;
  }

  &.edit {
    color: #4caf50;
  }

  &.delete {
    color: #f44336;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: #666;
`;

export const ErrorContainer = styled.div`
  background-color: #ffebee;
  color: #d32f2f;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

export const EmptyStateContainer = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  
  .empty-icon {
    font-size: 4rem;
    color: #ddd;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #888;
    margin-bottom: 1.5rem;
  }
`; 