
// src/Pages/Presentacion.jsx
import "../components/Style/estilos_Prentacion.css"; 

export default function Presentacion() {
    return (
        
        <div className="portafolio-container"> 
            {}

            <div className="perfil-contenedor">
                <h1>Felipe Nieto</h1>{}
            </div>
            
            <div className="perfil">
                <h2>Perfil laboral</h2>
                <p>
                     Profesional proactivo y adaptable con un enfoque en la resolución de problemas y la eficiencia operativa. Demuestra un marcado interés y competencia en áreas de análisis de datos y razonamiento lógico, como lo indica su frecuente uso de terminología técnica y precisión en las consultas.

Capaz de comunicarse con claridad y concisión, adaptando el lenguaje según la necesidad, y con una clara orientación a la mejora continua y la investigación metódica para alcanzar resultados óptimos.
                </p>
            </div>





            <div className="seccion">
                <h2>Habilidades</h2> {}
                
                
                <div className="habilidades-grid"> 
                    
                    {}
                    <div>
                        <h3>Infraestructura y Sistemas (Hard Skills)</h3>
                        <ul className="habilidades-lista"> {}
                            <li>Infraestructura y Sistemas: Administración de la plataforma de virtualización Microsoft Hyper-V y gestión de Máquinas Virtuales (VMs).</li>
                            <li>Directorio Activo (AD): Creación y Administración de Usuarios de Dominio en Active Directory.</li>
                            <li>Continuidad del Negocio (DR): Generación de Snapshots y Backups para la Recuperación ante Desastres.</li>
                            <li>Sistemas Operativos: Soporte y Administración de entornos Windows.</li>
                            <li>Mesa de Ayuda (Help Desk): Soporte técnico de primer y segundo nivel.</li>
                            <li>Soporte de Aplicaciones: Asistencia especializada en SISE, Aurora Online, Isodoc y Siadoc.</li>
                            <li>Diagnóstico y Troubleshooting: Detección y resolución de fallas, incluyendo errores de tipo AYR.</li>
                            <li>Hardware: Configuración, Reseteo y despliegue de equipos (PC y portátiles).</li>
                            <li>Inventario de Activos: Control y registro de equipos tecnológicos de la compañía.</li>
                        </ul>
                    </div>
                    
                    {}
                    <div>
                        <h3>Habilidades Blandas (Soft Skills)</h3>
                        <ul className="habilidades-lista"> {}
                            <li>Orientación al Servicio: Capacidad para brindar soporte eficiente a 70 colaboradores, enfocándose en la satisfacción del usuario final.</li>
                            <li>Gestión de Prioridades: Habilidad para manejar y asegurar la disponibilidad 24/7 de sistemas críticos.</li>
                            <li>Comunicación Técnica: Experiencia en escalación de problemas y gestión de la relación con proveedores externos.</li>
                            <li>Responsabilidad: Manejo de tareas críticas como la seguridad de accesos y el resguardo de información (Backups).</li>
                        </ul>
                    </div>
                </div> {}
            </div>

            {}
        </div>
    );
}