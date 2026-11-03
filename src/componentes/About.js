import { Link } from "react-router-dom";

function About() {
  return (
    <div className="card">
      <h2 className="card-title">Sobre Nosotros y la Arquitectura</h2>
      <p className="card-subtitle">
        Seminario de Complementación Práctica II - Sesión 11-2.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #e2e8f0", padding: "16px", borderRadius: "10px", background: "#f8fafc" }}>
          <h4 style={{ margin: "0 0 8px 0", color: "#2563eb" }}>🧩 Componentes</h4>
          <p style={{ margin: 0, fontSize: "0.88rem", color: "#64748b" }}>
            Estructuras modulares y reutilizables con soporte de props y estados internos.
          </p>
        </div>

        <div style={{ border: "1px solid #e2e8f0", padding: "16px", borderRadius: "10px", background: "#f8fafc" }}>
          <h4 style={{ margin: "0 0 8px 0", color: "#2563eb" }}>🚦 React Router</h4>
          <p style={{ margin: 0, fontSize: "0.88rem", color: "#64748b" }}>
            Navegación SPA sin recarga de pantalla utilizando BrowserRouter, NavLink y Routes.
          </p>
        </div>

        <div style={{ border: "1px solid #e2e8f0", padding: "16px", borderRadius: "10px", background: "#f8fafc" }}>
          <h4 style={{ margin: "0 0 8px 0", color: "#2563eb" }}>⚡ Eventos</h4>
          <p style={{ margin: 0, fontSize: "0.88rem", color: "#64748b" }}>
            Manejo declarativo en JSX (onClick, onChange, onSubmit) con camelCase.
          </p>
        </div>

        <div style={{ border: "1px solid #e2e8f0", padding: "16px", borderRadius: "10px", background: "#f8fafc" }}>
          <h4 style={{ margin: "0 0 8px 0", color: "#2563eb" }}>📝 Formularios</h4>
          <p style={{ margin: 0, fontSize: "0.88rem", color: "#64748b" }}>
            Componentes controlados con validación en tiempo real, manejo de errores y redirección.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "24px" }}>
        <Link to="/" className="btn btn-outline">
          ← Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default About;
