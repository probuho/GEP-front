import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';
import useAuth from '../context/useAuth';
import Especie from '../componente/interfaces/Especies';
import RespuestaError from '../componente/interfaces/Error';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Estilos para el componente de detalle
const DetalleContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #6c5ce7;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const DetalleCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const DetalleHeader = styled.div<{ tipo: string }>`
  background-color: ${props => {
    switch (props.tipo.toLowerCase()) {
      case 'mamífero':
      case 'mamifero':
        return '#4caf50';
      case 'ave':
        return '#2196f3';
      case 'reptil':
        return '#ff9800';
      case 'anfibio':
        return '#9c27b0';
      case 'pez':
        return '#00bcd4';
      case 'insecto':
        return '#e91e63';
      default:
        return '#9e9e9e';
    }
  }};
  color: white;
  padding: 2rem;
  position: relative;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .tipo {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  
  .icono {
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 5rem;
    opacity: 0.3;
  }
`;

const DetalleContent = styled.div`
  padding: 2rem;
`;

const DetalleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const DetalleItem = styled.div`
  .label {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.3rem;
  }
  
  .value {
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
  }
`;

const DetalleDescripcion = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
  
  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.7;
    color: #555;
    font-size: 1.1rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &.edit {
    background-color: #4caf50;
    color: white;
    border: none;
    
    &:hover {
      background-color: #388e3c;
    }
  }
  
  &.delete {
    background-color: #f44336;
    color: white;
    border: none;
    
    &:hover {
      background-color: #d32f2f;
    }
  }
  
  &.back {
    background-color: transparent;
    color: #555;
    border: 1px solid #ddd;
    
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: #666;
`;

const ErrorContainer = styled.div`
  background-color: #ffebee;
  color: #d32f2f;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

// Función para obtener el ícono según el tipo de especie
const getEspecieIcon = (tipo: string): string => {
  switch (tipo.toLowerCase()) {
    case 'mamífero':
    case 'mamifero':
      return '🦊';
    case 'ave':
      return '🦉';
    case 'reptil':
      return '🦎';
    case 'anfibio':
      return '🐸';
    case 'pez':
      return '🐠';
    case 'insecto':
      return '🦋';
    default:
      return '🌱';
  }
};

const DetallePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [especie, setEspecie] = useState<Especie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    axios.get(`${BACKEND_URL}/especies/${id}`)
      .then((response) => {
        setEspecie(response.data);
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const responseData = axiosError.response.data as RespuestaError;
            setError(responseData.error || "No se pudo cargar la información de la especie.");
          } else {
            setError("No se pudo cargar la información de la especie.");
          }
        } else {
          setError("No se pudo cargar la información de la especie.");
        }
        console.error("Error al obtener la especie:", error);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!id || !especie) return;
    
    if (window.confirm(`¿Está seguro de que desea eliminar la especie ${especie.nombre}?`)) {
      axios.delete(`${BACKEND_URL}/especies/${id}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then(() => {
        navigate('/especies');
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const responseData = axiosError.response.data as RespuestaError;
            setError(responseData.error || "Error al eliminar la especie");
          } else {
            setError("Error al eliminar la especie");
          }
        } else {
          setError("Error al eliminar la especie");
        }
        console.error(error);
      });
    }
  };

  if (loading) {
    return (
      <DetalleContainer>
        <BackLink to="/especies">
          ← Volver a la lista de especies
        </BackLink>
        <LoadingContainer>
          Cargando información de la especie...
        </LoadingContainer>
      </DetalleContainer>
    );
  }

  if (error || !especie) {
    return (
      <DetalleContainer>
        <BackLink to="/especies">
          ← Volver a la lista de especies
        </BackLink>
        <ErrorContainer>
          {error || "No se pudo encontrar la información de la especie solicitada."}
        </ErrorContainer>
      </DetalleContainer>
    );
  }

  return (
    <DetalleContainer>
      <BackLink to="/especies">
        ← Volver a la lista de especies
      </BackLink>
      
      <DetalleCard>
        <DetalleHeader tipo={especie.tipo}>
          <h1>{especie.nombre}</h1>
          <div className="tipo">{especie.tipo}</div>
          <div className="icono">{getEspecieIcon(especie.tipo)}</div>
        </DetalleHeader>
        
        <DetalleContent>
          <DetalleGrid>
            <DetalleItem>
              <div className="label">Tamaño</div>
              <div className="value">{especie.tamano} cm</div>
            </DetalleItem>
            <DetalleItem>
              <div className="label">Peso</div>
              <div className="value">{especie.peso} kg</div>
            </DetalleItem>
            <DetalleItem>
              <div className="label">Hábitat</div>
              <div className="value">{especie.habitat}</div>
            </DetalleItem>
            <DetalleItem>
              <div className="label">Alimentación</div>
              <div className="value">{especie.alimentacion}</div>
            </DetalleItem>
          </DetalleGrid>
          
          <DetalleDescripcion>
            <h3>Descripción</h3>
            <p>{especie.descripcion}</p>
          </DetalleDescripcion>
          
          {auth?.user && (
            <ActionButtons>
              <ActionButton as={Link} to={`/actualizar/${especie.id}`} className="edit">
                ✏️ Editar Especie
              </ActionButton>
              <ActionButton onClick={handleDelete} className="delete">
                🗑️ Eliminar Especie
              </ActionButton>
            </ActionButtons>
          )}
        </DetalleContent>
      </DetalleCard>
    </DetalleContainer>
  );
};

export default DetallePage; 