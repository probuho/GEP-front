import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import useAuth from './context/useAuth.tsx';
import Layout from './componente/layout.tsx';
import Cargando from './componente/cargando.tsx';
// Rutas
const HomePage = lazy(() => import('./HomePage/HomePage'));
const Games = lazy(() => import('./Games/Games'));
const Sightings = lazy(() => import('./Sightings/Sightings'));
const HikingRoutes = lazy(() => import('./Routes/Routes'));
const Community = lazy(() => import('./Community/Community'));
const EcoExplorer = lazy(() => import('./Games/components/EcoExplorer/EcoExplorer'));
const Especies = lazy(() => import('./Especies/Especies.tsx'));
const CrearEspecies = lazy(() => import('./Especies/CrearEspecies'));
const ActualizarEspecies = lazy(() => import('./Especies/ActualizarEspecies'));
const Memoria = lazy(() => import('./Memoria/Memoria'));
const PaginaRegistro = lazy(() => import('./Usuarios/registro.tsx'));
const PaginaLogin = lazy(() => import('./Usuarios/login.tsx'));

function App () {
  // Componente de ruta protegida
  const AuthNecesario = ({ children }: { children: JSX.Element }) => {
    const { auth } = useAuth();
    return auth?.user ? children : <Navigate to="/iniciar-sesion" replace />;
  };
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Cargando />}>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/especies' element={<Especies />}></Route>
              <Route path="/iniciar-sesion" element={<PaginaLogin />} />
              <Route path="/registro" element={<PaginaRegistro />} />
              <Route path='/memoria' element={<Memoria />}></Route>
              {/* Rutas para los módulos de la página de inicio */}
              <Route path='/games' element={<Games />}></Route>
              <Route path='/games/eco-explorer' element={<EcoExplorer />}></Route>
              <Route path='/sightings' element={<Sightings />}></Route>
              <Route path='/routes' element={<HikingRoutes />}></Route>
              <Route path='/community' element={<Community />}></Route>
              <Route path='/discover' element={<Especies />}></Route>
              {/* Rutas que requieren de tener la sesión iniciada para acceder */}
              <Route path='/crear' element={<AuthNecesario><CrearEspecies /></AuthNecesario>}></Route>
              <Route path='/actualizar/:id' element={<AuthNecesario><ActualizarEspecies /></AuthNecesario>}></Route>
            </Routes>
          </Layout>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
    
  );
};

export default App;