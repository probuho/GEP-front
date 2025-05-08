import React, { useState } from "react";
import axios, {AxiosError} from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import RespuestaError from "../componente/interfaces/Error";
import "../styles.scss";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CrearEspecies = () => {
    const [nombre, setNombre] = useState<string>('');
    const [tamano, setTamano] = useState<number>(0);
    const [peso, setPeso] = useState<number>(0);
    const [habitat, setHabitat] = useState<string>('');
    const [alimentacion, setAlimentacion] = useState<string>('');
    const [tipo, setTipo] = useState<string>('');
    const [descripcion, setDescripcion] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { auth } = useAuth();

    const validarDatos = () => {
        if (!nombre.trim()) {
            setError("El nombre es requerido");
            return false;
        }
        if (tamano < 0) {
            setError("El tamaño no puede ser negativo");
            return false;
        }
        if (peso < 0) {
            setError("El peso no puede ser negativo");
            return false;
        }
        return true;
    };

    const Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        
        if (!validarDatos()) {
            return;
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/especies`, {
                nombre,
                tamano,
                peso,
                habitat,
                alimentacion,
                tipo,
                descripcion
            }, {
                headers: {
                    Authorization: `Bearer ${auth?.token}`
                }
            });
            if (response.status === 201) {
                navigate('/');
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    const responseData = axiosError.response.data as RespuestaError;
                    setError(responseData.error || "Error al crear la especie");
                } else {
                    setError("Error al crear la especie");
                }
            }
        }
    };

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
           <div className="w-50 white-bg rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Agregar Especie</h2>
                    <div className="mb-2">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            placeholder="Introduzca el nombre de la especie" 
                            className="form-control" 
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tamano">Tamaño (cm)</label>
                        <input 
                            type="number" 
                            placeholder="Introduzca el tamaño de la especie" 
                            className="form-control" 
                            id="tamano"
                            value={tamano}
                            onChange={(e) => setTamano(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="peso">Peso (kg)</label>
                        <input 
                            type="number" 
                            placeholder="Introduzca el peso de la especie" 
                            className="form-control" 
                            id="peso"
                            value={peso}
                            onChange={(e) => setPeso(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="habitat">Habitat</label>
                        <input 
                            type="text" 
                            placeholder="Introduzca el habitat de la especie" 
                            className="form-control" 
                            id="habitat"
                            value={habitat}
                            onChange={(e) => setHabitat(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="alimentacion">Alimentación</label>
                        <input 
                            type="text" 
                            placeholder="Introduzca la alimentación de la especie" 
                            className="form-control" 
                            id="alimentacion" 
                            value={alimentacion}
                            onChange={(e) => setAlimentacion(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tipo">Tipo</label>
                        <input 
                            type="text" 
                            placeholder="Introduzca el tipo de la especie" 
                            className="form-control" 
                            id="tipo"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="descripcion">Descripción</label>
                        <input 
                            type="text" 
                            placeholder="Introduzca la descripción de la especie" 
                            className="form-control" 
                            id="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Registrar</button>
                    <Link to={"/"} className="btn btn-danger">Cancelar</Link>
                    {error && <p className="mensaje-error">{error}</p>}
                </form>
            </div>
        </div>
    )
};

export default CrearEspecies;