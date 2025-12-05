import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Presentacion from "./Pages/Presentacion";
import Experiencia from "./Pages/Experiencia";
import Contacto from "./Pages/Contacto";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Header visible en TODAS las páginas */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;