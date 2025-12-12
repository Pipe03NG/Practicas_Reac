// src/Pages/Contacto.jsx
import "../components/Style/estilos_Contacto.css";

export default function Contacto() {
    return (
        <div className="contenido">
            <h2>Contacto</h2>
            <hr/>
            {}
            <ul className="contactos-lista">
                <li>Email: fnietogalvis@gmail.com</li>
                <li>Teléfono: +57 3114856034</li>
                {}
                <li>LinkedIn: <a href="https://linkedin.com/in/tuUsuario" target="_blank" rel="noopener noreferrer">linkedin.com/in/tuUsuario</a></li> 
            </ul>
        </div>
    );
}