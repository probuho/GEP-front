import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, {AxiosError} from "axios";
import useAuth from "../context/useAuth";
import styled from "styled-components";
import "../styles.scss";
//Interface
import Especie from "../componente/interfaces/Especies";
import RespuestaError from "../componente/interfaces/Error";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Estilos para mejorar la apariencia visual
const EspeciesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeaderSection = styled.div`
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

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchBox = styled.div`
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

const AddButton = styled(Link)`
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
  text-decoration: none;

  &:hover {
    background-color: #388e3c;
  }
`;

const TableContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: #f8f9fa;
    color: #333;
    font-weight: 600;
    text-align: left;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }

  td {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    color: #666;
  }

  tr:hover {
    background-color: #f8f9fa;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;

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
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #777;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #d32f2f;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: #666;
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

function Especies () {
    const [especies, setEspecies] = useState<Especie[]>([]);
    const [filteredEspecies, setFilteredEspecies] = useState<Especie[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const { auth } = useAuth();

    // Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const totalPages = Math.ceil(filteredEspecies.length / pageSize);
    const paginatedEspecies = filteredEspecies.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
        setCurrentPage(1); // Reiniciar a la primera página al buscar
    }, [searchTerm, especies]);
    
    const handleDelete = (id: string) => {
        if (window.confirm("¿Está seguro de que desea eliminar esta especie?")) {
            axios.delete(`${BACKEND_URL}/especies/${id}`, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`, // Incluye el token del contexto
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
    }

    if (loading) {
        return (
            <EspeciesContainer>
                <HeaderSection>
                    <h1>Descubre la Naturaleza</h1>
                    <p>Explora la diversidad de especies de nuestro planeta</p>
                </HeaderSection>
                <LoadingContainer>
                    Cargando los datos de las especies...
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

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <SearchContainer>
                <SearchBox>
                    <span className="search-icon">🔍</span>
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre, tipo, hábitat..." 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                </SearchBox>
                {auth?.user && (
                    <AddButton to="/crear">
                        <span>+</span>
                        Añadir Especie
                    </AddButton>
                )}
            </SearchContainer>

            <TableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Nombre</th>
                            <th>Tamaño (cm)</th>
                            <th>Peso (kg)</th>
                            <th>Habitat</th>
                            <th>Alimentación</th>
                            <th>Descripción</th>
                            {auth?.user && <th>Acción</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedEspecies.length === 0 ? (
                            <tr>
                                <td colSpan={auth?.user ? 8 : 7}>
                                    <EmptyState>
                                        No hay datos de especies disponibles en este momento.
                                    </EmptyState>
                                </td>
                            </tr>
                        ) : (
                            paginatedEspecies.map((especie) => (
                                <tr key={especie.id}>
                                    <td>{getEspecieIcon(especie.tipo)} {especie.tipo}</td>
                                    <td>{especie.nombre}</td>
                                    <td>{especie.tamano}</td>
                                    <td>{especie.peso}</td>
                                    <td>{especie.habitat}</td>
                                    <td>{especie.alimentacion}</td>
                                    <td>
                                        {especie.descripcion.length > 100 
                                            ? `${especie.descripcion.substring(0, 100)}...` 
                                            : especie.descripcion}
                                    </td>
                                    {auth?.user && (
                                        <td>
                                            <ActionButton as={Link} to={`/actualizar/${especie.id}`} className="edit">
                                                Actualizar
                                            </ActionButton>
                                            <ActionButton onClick={() => handleDelete(especie.id)} className="delete">
                                                Eliminar
                                            </ActionButton>
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </StyledTable>
            </TableContainer>

            {/* Controles de paginación */}
            {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Anterior</button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Siguiente</button>
                </div>
            )}
        </EspeciesContainer>
    ) 
};

export default Especies;