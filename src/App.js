import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Login from "./componentes/Login";
import NotFound from "./componentes/NotFound";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState(() => {
    // Recuperar usuario guardado si existiera en sesión
    return localStorage.getItem("usuario_sesion") || null;
  });

  function handleLogin(nombreUsuario) {
    setUsuario(nombreUsuario);
    localStorage.setItem("usuario_sesion", nombreUsuario);
  }

  function handleLogout() {
    setUsuario(null);
    localStorage.removeItem("usuario_sesion");
  }

  return (
    <BrowserRouter>
      <div className="App">
        {/* Encabezado y Navegación Principal */}
        <header className="app-header">
          <div className="navbar-container">
            <NavLink to="/" className="brand-logo">
              <span role="img" aria-label="logo">🚀</span>
              <span>La Pareja App</span>
            </NavLink>

            <nav>
              <ul className="nav-links">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                    end
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  >
                    Sobre Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  >
                    {usuario ? "Cambiar Cuenta" : "Iniciar Sesión"}
                  </NavLink>
                </li>
              </ul>
            </nav>

            {usuario && (
              <div className="user-badge">
                <span className="user-name">👤 {usuario}</span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline"
                  style={{ padding: "4px 10px", fontSize: "0.8rem" }}
                  title="Cerrar Sesión"
                >
                  Salir
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Contenido Principal con Enrutamiento */}
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home usuario={usuario} onLogout={handleLogout} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
            {/* Manejo de Rutas Inexistentes (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Pie de página */}
        <footer className="app-footer">
          <p>
            © {new Date().getFullYear()} La Pareja App - Seminario de Complementación Práctica II
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
