import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="card not-found-container">
      <h1 className="not-found-code">404</h1>
      <h2 className="card-title">Página no encontrada</h2>
      <p className="card-subtitle">
        La ruta que intentas visitar no existe o ha sido movida.
      </p>
      <Link to="/" className="btn btn-primary">
        ← Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;

