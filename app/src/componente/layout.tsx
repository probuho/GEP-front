import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth';
import "../styles.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { auth, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => { //Redirección y limpieza de valores al cerrar sesión
        logout();
        navigate('/');
    };

    return (
        <div className="app-container">
            <header className="main-header">
                <div className="header-content">
                    <div className="logo-nav">
                        <h1 className="site-logo">Guía del Explorador</h1>
                        <nav className="main-navigation">
                            <Link to="/" className='nav-link'>
                                <span className="nav-icon">🏠</span>
                                Inicio
                            </Link>
                            <Link to="/games" className='nav-link'>
                                <span className="nav-icon">🎮</span>
                                Juegos
                            </Link>
                            <Link to="/routes" className='nav-link'>
                                <span className="nav-icon">🥾</span>
                                Rutas
                            </Link>
                            <Link to="/sightings" className='nav-link'>
                                <span className="nav-icon">👁️</span>
                                Avistamientos
                            </Link>
                            <Link to="/community" className='nav-link'>
                                <span className="nav-icon">👥</span>
                                Comunidad
                            </Link>
                            <Link to="/especies" className='nav-link'>
                                <span className="nav-icon">🦋</span>
                                Especies
                            </Link>
                        </nav>
                    </div>
                    <div className="user-actions">
                        {auth?.user ? (
                            <>  {/* Se muestra información del usuario y se cierra sesión */}
                                <Link to="/profile" className="profile-link">
                                    Mi Perfil
                                </Link>
                                <button 
                                    type="button" 
                                    className="start-exploring-btn" 
                                    onClick={handleLogout}
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <>  {/* Se inicia sesión o se registra en caso de no haber una sesión iniciada */}
                                <Link to="/iniciar-sesion" className="profile-link">
                                    Mi Perfil
                                </Link>
                                <Link to="/registro" className="start-exploring-btn">
                                    Comenzar a Explorar
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
            <main className="main-content">{children}</main>
            <footer className="main-footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Guía del Explorador. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;