function Boton({ texto = "Haz clic", onClick, variant = "primary", disabled = false }) {
  function manejarClickDefault() {
    alert("¡Hiciste clic en el botón!");
  }

  const claseBoton = `btn btn-${variant}`;

  return (
    <button
      className={claseBoton}
      onClick={onClick || manejarClickDefault}
      disabled={disabled}
    >
      {texto}
    </button>
  );
}

export default Boton;
