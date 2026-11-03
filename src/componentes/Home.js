import { useLocation, Link } from "react-router-dom";
import Boton from "./Boton";

function Home({ usuario, onLogout }) {
  const location = useLocation();
  const mensajeFlash = location.state?.mensaje;

  return (
    <div>
      {/* Mensaje de éxito tras redirección del Login */}
      {mensajeFlash && (
        <div className="alert alert-success" role="alert">
          <span>✅ {mensajeFlash}</span>
        </div>
      )}

      <div className="card">
        <h2 className="card-title">Bienvenido a La Pareja</h2>
        <p className="card-subtitle">
          Plataforma web interactiva desarrollada con React, componentes, eventos, formularios y React Router.
        </p>

        {usuario ? (
          <div style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", padding: "16px 20px", borderRadius: "10px", marginBottom: "20px" }}>
            <h3 style={{ margin: "0 0 8px 0", color: "#166534" }}>
              👤 Sesión activa: <strong>{usuario}</strong>
            </h3>
            <p style={{ margin: "0 0 16px 0", color: "#15803d", fontSize: "0.95rem" }}>
              Has iniciado sesión exitosamente. La redirección desde el formulario de login funcionó correctamente.
            </p>
            <button className="btn btn-danger" onClick={onLogout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", padding: "16px 20px", borderRadius: "10px", marginBottom: "20px" }}>
            <p style={{ margin: "0 0 12px 0", color: "#1e40af", fontSize: "0.95rem" }}>
              No has iniciado sesión todavía. Puedes probar la validación y redirección en el módulo de login.
            </p>
            <Link to="/login" className="btn btn-primary">
              Ir al Formulario de Login →
            </Link>
          </div>
        )}

        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "24px 0" }} />

        <h3>Demostración de Eventos en React</h3>
        <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
          Haz clic en los botones para comprobar los eventos personalizados de React (props + onClick):
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <Boton
            texto="Evento Primario"
            variant="primary"
            onClick={() => alert("Evento disparado: Botón Primario presionado")}
          />
          <Boton
            texto="Evento Notificación"
            variant="outline"
            onClick={() => alert("Evento disparado: Notificación mostrada correctamente")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
