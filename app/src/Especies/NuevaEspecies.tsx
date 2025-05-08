import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
import useAuth from "../context/useAuth";
import {
  EspeciesContainer,
  HeaderSection,
  FilterSection,
  SearchBox,
  FilterControls,
  FilterButton,
  AddButton,
  EspeciesGrid,
  EspecieCard,
  EspecieImageContainer,
  EspecieTypeTag,
  EspecieContent,
  EspecieTitle,
  EspecieDetails,
  DetailItem,
  EspecieDescription,
  CardActions,
  ActionButton,
  LoadingContainer,
  ErrorContainer,
  EmptyStateContainer
} from "./styles/Especies.styles";
import Especie from "../componente/interfaces/Especies";
import RespuestaError from "../componente/interfaces/Error";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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

const NuevaEspecies: React.FC = () => {
  const [especies, setEspecies] = useState<Especie[]>([]);
  const [filteredEspecies, setFilteredEspecies] = useState<Especie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    axios.get(`${BACKEND_URL}/especies`)
      .then((result) => {
        setEspecies(result.data);
        setFilteredEspecies(result.data);
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const responseData = axiosError.response.data as RespuestaError;
            setError(responseData.error || "La carga de datos de las especies falló.");
          } else {
            setError("La carga de datos de las especies falló.");
          }
        } else {
          setError("La carga de datos de las especies falló.");
        }
        console.error("Error al recibir las especies:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredEspecies(especies);
    } else {
      const filtered = especies.filter(especie => 
        especie.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        especie.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        especie.habitat.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEspecies(filtered);
    }
  }, [searchTerm, especies]);

  const handleDelete = (id: string) => {
    if (window.confirm("¿Está seguro de que desea eliminar esta especie?")) {
      axios.delete(`${BACKEND_URL}/especies/${id}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then(result => {
        console.log(result);
        setEspecies(especies.filter(especie => especie.id !== id));
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const responseData = axiosError.response.data as RespuestaError;
            setError(responseData.error || "Error al borrar la especie");
          } else {
            setError("Error al borrar la especie");
          }
        } else {
          setError("Error al borrar la especie");
        }
        console.error(error);
      });
    }
  };

  if (loading) {
    return (
      <EspeciesContainer>
        <HeaderSection>
          <h1>Descubre la Naturaleza</h1>
          <p>Explora la diversidad de especies de nuestro planeta</p>
        </HeaderSection>
        <LoadingContainer>
          Cargando especies...
        </LoadingContainer>
      </EspeciesContainer>
    );
  }

  return (
    <EspeciesContainer>
      <HeaderSection>
        <h1>Descubre la Naturaleza</h1>
        <p>Explora la diversidad de especies de nuestro planeta</p>
      </HeaderSection>

      {error && (
        <ErrorContainer>
          {error}
        </ErrorContainer>
      )}

      <FilterSection>
        <SearchBox>
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar por nombre, tipo, hábitat..." 
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </SearchBox>
        <FilterControls>
          <FilterButton>
            <span className="filter-icon">🏷️</span>
            Tipo
          </FilterButton>
          <FilterButton>
            <span className="filter-icon">🌍</span>
            Hábitat
          </FilterButton>
          {auth?.user && (
            <AddButton as={Link} to="/crear">
              <span>+</span>
              Añadir Especie
            </AddButton>
          )}
        </FilterControls>
      </FilterSection>

      {filteredEspecies.length === 0 ? (
        <EmptyStateContainer>
          <div className="empty-icon">🔍</div>
          <h3>No se encontraron especies</h3>
          <p>Intenta cambiar tu búsqueda o filtros</p>
          {auth?.user && (
            <AddButton as={Link} to="/crear">
              <span>+</span>
              Añadir Especie
            </AddButton>
          )}
        </EmptyStateContainer>
      ) : (
        <EspeciesGrid>
          {filteredEspecies.map((especie) => (
            <EspecieCard key={especie.id}>
              <EspecieImageContainer>
                <div className="placeholder-icon">
                  {getEspecieIcon(especie.tipo)}
                </div>
                <EspecieTypeTag tipo={especie.tipo}>{especie.tipo}</EspecieTypeTag>
              </EspecieImageContainer>
              <EspecieContent>
                <EspecieTitle>{especie.nombre}</EspecieTitle>
                <EspecieDetails>
                  <DetailItem>
                    <div className="label">Tamaño</div>
                    <div className="value">{especie.tamano} cm</div>
                  </DetailItem>
                  <DetailItem>
                    <div className="label">Peso</div>
                    <div className="value">{especie.peso} kg</div>
                  </DetailItem>
                  <DetailItem>
                    <div className="label">Hábitat</div>
                    <div className="value">{especie.habitat}</div>
                  </DetailItem>
                  <DetailItem>
                    <div className="label">Alimentación</div>
                    <div className="value">{especie.alimentacion}</div>
                  </DetailItem>
                </EspecieDetails>
                <EspecieDescription>
                  {especie.descripcion}
                </EspecieDescription>
                <CardActions>
                  {auth?.user && (
                    <>
                      <ActionButton as={Link} to={`/actualizar/${especie.id}`} className="edit">
                        ✏️ Editar
                      </ActionButton>
                      <ActionButton onClick={() => handleDelete(especie.id)} className="delete">
                        🗑️ Eliminar
                      </ActionButton>
                    </>
                  )}
                  <ActionButton as={Link} to={`/especies/${especie.id}`}>
                    👁️ Ver más
                  </ActionButton>
                </CardActions>
              </EspecieContent>
            </EspecieCard>
          ))}
        </EspeciesGrid>
      )}
    </EspeciesContainer>
  );
};

export default NuevaEspecies; 