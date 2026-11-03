import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders app brand and navigation links', () => {
  render(<App />);
  const brandLink = screen.getByRole('link', { name: /La Pareja App/i });
  expect(brandLink).toBeInTheDocument();

  expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
  expect(screen.getByText(/Sobre Nosotros/i)).toBeInTheDocument();
  expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
});

test('validates login form showing error when fields are empty', async () => {
  render(<App />);

  // Ir al login
  const loginLink = screen.getByText(/Iniciar Sesión/i);
  fireEvent.click(loginLink);

  // Intentar enviar formulario vacío
  const submitButton = screen.getByRole('button', { name: /Ingresar/i });
  fireEvent.click(submitButton);

  // Verificar mensajes de error
  await waitFor(() => {
    expect(screen.getByText(/El nombre de usuario es obligatorio/i)).toBeInTheDocument();
    expect(screen.getByText(/La contraseña es obligatoria/i)).toBeInTheDocument();
  });
});
