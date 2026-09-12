/**
 * Aurora Comunidad Creativa - Frontend App JavaScript
 * Maneja la interacción del usuario y la conexión con el servidor Node.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos DOM
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeOpenIcon = togglePasswordBtn.querySelector('.eye-open');
  const eyeClosedIcon = togglePasswordBtn.querySelector('.eye-closed');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const registerBtn = document.getElementById('registerBtn');
  const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toast-icon');
  const toastMessage = document.getElementById('toast-message');

  let toastTimeout = null;

  // 1. Mostrar/Ocultar Contraseña
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    
    if (isPassword) {
      eyeOpenIcon.classList.add('hidden');
      eyeClosedIcon.classList.remove('hidden');
      togglePasswordBtn.setAttribute('aria-label', 'Ocultar contraseña');
    } else {
      eyeOpenIcon.classList.remove('hidden');
      eyeClosedIcon.classList.add('hidden');
      togglePasswordBtn.setAttribute('aria-label', 'Mostrar contraseña');
    }
  });

  // 2. Botones decorativos de "Crear cuenta" y "¿Olvidaste tu contraseña?"
  registerBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('La función de registro no está habilitada en esta demo.', 'error');
  });

  forgotPasswordBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Función de recuperación no disponible en esta demo.', 'error');
  });

  // 3. Envío del Formulario de Login
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validación en el cliente
    if (!email || !password) {
      showToast('Por favor, ingresa tu correo y contraseña.', 'error');
      return;
    }

    // Estado de carga en el botón
    setLoadingState(true);

    try {
      // Determinamos la URL de la API: Si se abre por HTTP usa ruta relativa, si no, localhost:3000
      const apiUrl = window.location.protocol.startsWith('http') 
        ? '/api/login' 
        : 'http://localhost:3000/api/login';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok && data.exito) {
        showToast(data.mensaje || '¡Inicio de sesión exitoso!', 'success');
        // Limpieza opcional del formulario
        setTimeout(() => {
          loginForm.reset();
        }, 1500);
      } else {
        showToast(data.mensaje || 'Correo o contraseña incorrectos.', 'error');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      showToast('No se pudo conectar con el servidor. ¿Está ejecutándose el backend?', 'error');
    } finally {
      setLoadingState(false);
    }
  });

  // Función para activar/desactivar estado de carga
  function setLoadingState(isLoading) {
    if (isLoading) {
      submitBtn.disabled = true;
      btnText.textContent = 'Verificando...';
    } else {
      submitBtn.disabled = false;
      btnText.textContent = 'Iniciar Sesión';
    }
  }

  // Función Helper para Notificaciones Toast
  function showToast(message, type = 'success') {
    if (toastTimeout) clearTimeout(toastTimeout);

    toastMessage.textContent = message;
    toast.className = `toast ${type}`;

    if (type === 'success') {
      toastIcon.innerHTML = '✅';
    } else {
      toastIcon.innerHTML = '⚠️';
    }

    // Auto-ocultar tras 4 segundos
    toastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 4000);
  }
});
