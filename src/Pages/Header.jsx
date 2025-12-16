// La ruta es ../components/Style/ porque Header está en Pages/
import "../components/Style/index.css"; 
import Navigation from "../components/Navigation.jsx";

export default function Header() {
    return (
        <header>
            <h1>Mi Portafolio</h1>
            <Navigation />
        </header>
    );
}