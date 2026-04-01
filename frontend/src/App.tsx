import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Directorio from './pages/Directorio';
import Asistencias from './pages/Asistencias';
import Registro from './pages/Registro';
import Settings from './pages/Settings';
import RecuperarPassword from './pages/RecuperarPassword';
import DetalleGrupo from './pages/DetalleGrupo';
import DetalleUsuario from './pages/DetalleUsuario';

// TODO: Re-activar protección de rutas al conectar el backend real
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta Pública */}
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />

        {/* Layout para el resto de la aplicación */}
        <Route path="/" element={<Layout />}>
          {/* Dashboard como ruta raíz */}
          <Route index element={<Dashboard />} />
          
          {/* Directorio de Usuarios */}
          <Route path="directorio" element={<Directorio />} />
          
          {/* Control de Asistencias */}
          <Route path="asistencias" element={<Asistencias />} />
          
          {/* Alta de Nuevo Registro (Junior Curator) */}
          <Route path="registro" element={<Registro />} />
          
          {/* Detalle de Grupo */}
          <Route path="grupos/:id" element={<DetalleGrupo />} />
          
          {/* Detalle de Usuario */}
          <Route path="usuarios/:id" element={<DetalleUsuario />} />

          {/* Configuración del Sistema */}
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback universal: Redirigir al inicio o login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
