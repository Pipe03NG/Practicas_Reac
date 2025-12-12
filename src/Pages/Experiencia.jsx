// src/Pages/Experiencia.jsx
import "../components/Style/estilos_Experiencia.css"; // ¡Asegúrate de importar!

export default function Experiencia() {
    return (
        
        <div className="experiencia-contenido">
            <h2>Experiencia</h2>
            <hr/>
            
            <div className="bloque-experiencia">
              
                <h4>Asistente de Tecnología</h4> 
                <p>
                    En mi rol como Asistente de Tecnología, soy responsable de la operación y soporte de la infraestructura de TI, con un enfoque clave en la continuidad del negocio y la disponibilidad 24/7 de los servicios.
                    Mi gestión de infraestructura incluye la administración de la plataforma de virtualización Hyper-V, la creación y mantenimiento de máquinas virtuales y la supervisión constante para asegurar la alta disponibilidad de los servidores. Para garantizar la recuperación ante desastres, realizo periódicamente la generación de snapshots y backups de las máquinas virtuales y bases de datos.
                    Administro de forma integral las cuentas de usuario, encargándome de la creación de usuarios de dominio en Active Directory y en las diversas aplicaciones (correo electrónico, SISE, Aurora Online, Isodoc, Siadoc, etc.). Además, configuro la Red Privada Virtual (VPN) para el acceso remoto seguro de los usuarios autorizados.
                    Brindo soporte técnico de primer y segundo nivel a un total de 70 colaboradores en entornos Windows, gestionando incidencias a través de la Mesa de Ayuda. Lidero la comunicación y escalación de problemas irresolubles con los proveedores de software, manteniendo el seguimiento activo. Finalmente, me encargo del diagnóstico de fallas, la configuración inicial y reseteo de hardware, y el control del inventario de activos tecnológicos.
                </p>
            </div>
            {/* Aquí podrías añadir más bloques de experiencia si tuvieras */}
        </div>
    );
}