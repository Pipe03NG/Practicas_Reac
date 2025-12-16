import { Link } from 'react-router-dom'; 
import "./Style/estilos_Navigation.css"; // Ruta directa dentro de components/

export default function Navigation() {
    return (
        <ul className="main-nav">
            <li><Link to="/">Inicio</Link></li> 
            <li><Link to="/Presentacion">Presentación</Link></li>
            <li><Link to="/Experiencia">Experiencia</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
            <li><Link to="/Consumo">Consumo</Link></li>
            <li><Link to="/Envio">Envío</Link></li>
        </ul>
    );
}