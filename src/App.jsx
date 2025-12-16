import { Routes, Route } from 'react-router-dom';
import './App.css'; // Estilos globales

// 1. Importación de todos los componentes de Página (RUTAS CORRECTAS)
import Presentacion from './Pages/Presentacion.jsx';
import Experiencia from './Pages/Experiencia.jsx';
import Contacto from './Pages/Contacto.jsx';
import Consumo from './Pages/Consumo.jsx';
import Envio from './Pages/Envio.jsx';
import Header from './Pages/Header.jsx'; 

function App() {
  return (
    <>
      {/* El Header se renderiza siempre (contiene la navegación) */}
      <Header /> 
      
      <main>
        {/* Aquí es donde se intercambia el contenido de la página */}
        <Routes>
          
          {/* Ruta principal */}
          <Route path="/" element={<Presentacion />} /> 
          
          {/* Rutas para la navegación */}
          <Route path="/Presentacion" element={<Presentacion />} />
          <Route path="/Experiencia" element={<Experiencia />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Consumo" element={<Consumo />} />
          <Route path="/Envio" element={<Envio />} />
          
          <Route path="*" element={<h2>404: Página no encontrada</h2>} />
          
        </Routes>
      </main>
    </>
  );
}

export default App;