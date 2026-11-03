import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  // Estados para errores y validaciones
  const [errores, setErrores] = useState({});
  const [mensajeErrorGlobal, setMensajeErrorGlobal] = useState("");
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  // Función de validación exhaustiva
  function validarFormulario() {
    const nuevosErrores = {};

    // Validación de usuario
    if (!usuario.trim()) {
      nuevosErrores.usuario = "El nombre de usuario es obligatorio.";
    } else if (usuario.trim().length < 3) {
      nuevosErrores.usuario = "El usuario debe tener al menos 3 caracteres.";
    }

    // Validación de contraseña
    if (!password) {
      nuevosErrores.password = "La contraseña es obligatoria.";
    } else if (password.length < 4) {
      nuevosErrores.password = "La contraseña debe tener al menos 4 caracteres.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  // Manejo de cambio en los inputs (limpia errores específicos)
  function manejarCambioUsuario(e) {
    setUsuario(e.target.value);
    if (errores.usuario) {
      setErrores((prev) => ({ ...prev, usuario: "" }));
    }
    if (mensajeErrorGlobal) setMensajeErrorGlobal("");
  }

  function manejarCambioPassword(e) {
    setPassword(e.target.value);
    if (errores.password) {
      setErrores((prev) => ({ ...prev, password: "" }));
    }
    if (mensajeErrorGlobal) setMensajeErrorGlobal("");
  }

  function manejarSubmit(e) {
    e.preventDefault();
    setMensajeErrorGlobal("");

    // 1. Ejecutar validación de campos
    const esValido = validarFormulario();
    if (!esValido) {
      return;
    }

    // 2. Simulación de autenticación y manejo de errores de credenciales
    setCargando(true);

    setTimeout(() => {
      // Simulación: Si se ingresa contraseña incorrecta como '0000', simular credencial inválida
      if (password === "0000") {
        setMensajeErrorGlobal("Credenciales inválidas. Comprueba tu usuario y contraseña.");
        setCargando(false);
        return;
      }

      // Login exitoso
      setCargando(false);

      if (onLogin) {
        onLogin(usuario.trim());
      }

      // 3. Redirección después del login usando React Router
      navigate("/", {
        replace: true,
        state: {
          mensaje: `¡Sesión iniciada con éxito! Bienvenido, ${usuario.trim()}.`
        }
      });
    }, 600);
  }

  return (
    <div className="card login-card">
      <h2 className="card-title">Iniciar Sesión</h2>
      <p className="card-subtitle">Ingresa tus datos para acceder al sistema</p>

      {/* Manejo de error global */}
      {mensajeErrorGlobal && (
        <div className="alert alert-error" role="alert">
          <span>⚠️ {mensajeErrorGlobal}</span>
          <button
            type="button"
            className="alert-close-btn"
            onClick={() => setMensajeErrorGlobal("")}
            title="Cerrar"
          >
            ×
          </button>
        </div>
      )}

      <form onSubmit={manejarSubmit} noValidate>
        {/* Campo Usuario */}
        <div className="form-group">
          <label className="form-label" htmlFor="usuario">
            Usuario
          </label>
          <input
            id="usuario"
            type="text"
            className={`form-input ${errores.usuario ? "input-error" : ""}`}
            value={usuario}
            onChange={manejarCambioUsuario}
            placeholder="Ej: admin o tu nombre"
            disabled={cargando}
            autoComplete="username"
          />
          {errores.usuario && (
            <span className="error-text">❌ {errores.usuario}</span>
          )}
        </div>

        {/* Campo Contraseña */}
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className={`form-input ${errores.password ? "input-error" : ""}`}
            value={password}
            onChange={manejarCambioPassword}
            placeholder="Mínimo 4 caracteres"
            disabled={cargando}
            autoComplete="current-password"
          />
          {errores.password && (
            <span className="error-text">❌ {errores.password}</span>
          )}
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={cargando}
        >
          {cargando ? "Validando e iniciando..." : "Ingresar"}
        </button>
      </form>

      {/* Caja de ayuda informativa */}
      <div className="demo-credentials-box">
        <strong>💡 Modo de prueba:</strong>
        <br />
        Puedes usar cualquier usuario (mínimo 3 caracteres) y contraseña (mínimo 4 caracteres).
        <br />
        <em>Nota para probar error: usa la contraseña <code>0000</code> para simular credenciales rechazadas.</em>
      </div>
    </div>
  );
}

export default Login;
