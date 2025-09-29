// --- FUNCIÓN PARA EFECTO FADE AL HACER SCROLL ---
function initScrollFade() {
  // Selecciona todos los elementos con la clase .scroll-fade
  const elements = document.querySelectorAll(".scroll-fade");

  // Crea un IntersectionObserver para detectar si los elementos entran/salen de pantalla
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si el elemento es visible, le agrega la clase "visible"
        entry.target.classList.add("visible");
      } else {
        // Si deja de ser visible, le quita la clase "visible"
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 }); // Se activa cuando al menos el 10% del elemento es visible

  // Pone a observar a cada elemento encontrado
  elements.forEach(el => observer.observe(el));
}

// Inicializa el efecto al cargar la página
document.addEventListener("DOMContentLoaded", initScrollFade);

// También lo reinicia cuando MkDocs carga nueva sección
document.addEventListener("md:content-loaded", initScrollFade);


// --- FUNCIÓN PARA EFECTO DE TEXTO ESCRIBIÉNDOSE ---
function initTyping() {
  // Busca el span que tenga la clase .typing-text
  const span = document.querySelector(".typing-text");
  if(!span) return; // Si no existe, corta la función

  const text = "García Hnos S.R.L."; // Texto a escribir
  let index = 0; // Posición actual en el texto
  const typingSpeed = 180; // Velocidad de escritura (ms por letra)
  const restartDelay = 1000; // Pausa antes de reiniciar (1 segundo)

  // Función que escribe letra por letra
  function type() {
    if(index < text.length){
      span.textContent += text[index++]; // Agrega la letra
      setTimeout(type, typingSpeed); // Llama de nuevo hasta completar
    } else {
      // Cuando termina, espera y reinicia
      setTimeout(()=>{
        span.textContent="";
        index=0;
        type();
      }, restartDelay);
    }
  }
  type(); // Arranca la animación
}


// --- FUNCIÓN PARA OCULTAR EL PRELOADER Y ARRANCAR EFECTOS ---
function hidePreloaderAndInit(){
  const preloader = document.getElementById("preloader"); // Busca el preloader
  const delay = window.location.pathname === "/" ? 2000 : 2000; // Tiempo de espera (2s)

  setTimeout(()=>{
    preloader.classList.add("hidden"); // Le agrega clase para animación de salida
    setTimeout(()=>{
      preloader.style.display="none"; // Lo oculta definitivamente
      initScrollFade(); // Activa el efecto de scroll fade
      initTyping(); // Activa el efecto de typing
    },500); // Medio segundo después
  },delay); // Espera 2 segundos
}

// Ejecuta hidePreloaderAndInit cuando carga todo
window.addEventListener("load", hidePreloaderAndInit);

// También lo ejecuta cuando MkDocs recarga contenido
document.addEventListener("md:content-loaded", hidePreloaderAndInit);


// --- FUNCIÓN PARA CARGAR GOOGLE MATERIAL ICONS ---
function loadMaterialIcons() {
  // Revisa si ya está cargada la fuente Material Icons
  if (!document.querySelector('link[href*="Material+Icons"]')) {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    document.head.appendChild(link); // La agrega al <head>
  }
}

// Carga Material Icons al inicio y cuando MkDocs actualiza contenido
document.addEventListener('DOMContentLoaded', loadMaterialIcons);
document.addEventListener('md:content-loaded', loadMaterialIcons);
