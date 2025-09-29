// ---------------- Preloader ----------------
function hidePreloaderAndInit(){
  const preloader = document.querySelector(".preloader-center");
  if(!preloader) return;

  const delay = 5000; // 5s de preloader

  setTimeout(()=>{
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = 0;
    setTimeout(()=>{
      preloader.style.display = "none";
      startAfterPreloader(); // Inicia tipado y scroll fade
    }, 500);
  }, delay);
}

// ---------------- Inicia efectos después del preloader ----------------
function startAfterPreloader(){
  initTyping();
  initScrollFade();
}

// ---------------- Tipado de texto ----------------
function initTyping(){
  const span = document.querySelector(".typing-text");
  if(!span) return;

  const text = "García Hnos S.R.L.";
  let index = 0;
  const typingSpeed = 180;
  const restartDelay = 1000;

  function type(){
    if(index < text.length){
      span.textContent += text[index++];
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(()=>{
        span.textContent = "";
        index = 0;
        type();
      }, restartDelay);
    }
  }
  type();
}

// ---------------- Scroll fade ----------------
function initScrollFade(){
  const fadeElems = document.querySelectorAll(".scroll-fade");
  if(fadeElems.length === 0) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => observer.observe(el));
}

// ---------------- Animación de imágenes en órbita ----------------
function initOrbitImages(){
  const imgs = document.querySelectorAll(".orbit-img");
  if(imgs.length === 0) return;

  imgs.forEach((img, i)=>{
    setTimeout(()=>{
      img.style.opacity = 1;
      img.style.transform = "scale(1)";
    }, i * 500);
  });

  setTimeout(()=>{
    imgs.forEach(img => img.classList.add("orbit-spin"));
  }, imgs.length * 500);
}

document.addEventListener("DOMContentLoaded", () => {
  const bubblesContainer = document.querySelector(".bubbles");
  if(!bubblesContainer) return; // Si no existe, corta la ejecución

  const numBubbles = 15;
  for(let i = 0; i < numBubbles; i++){
    const bubble = document.createElement("span");
    const size = 8 + Math.random() * 6; // 8-14px
    const duration = 3 + Math.random() * 2; // 3-5s
    const delay = Math.random() * 2; // delay random
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${i * (100 / numBubbles)}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;
    bubblesContainer.appendChild(bubble);
  }
});

// ---------------- Material Icons ----------------
function loadMaterialIcons(){
  if(!document.querySelector('link[href*="Material+Icons"]')){
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
}

// ---------------- Eventos ----------------
window.addEventListener("load", ()=>{
  hidePreloaderAndInit();
  initOrbitImages();
});

document.addEventListener("DOMContentLoaded", ()=>{
  loadMaterialIcons();
});

document.addEventListener("md:content-loaded", ()=>{
  hidePreloaderAndInit();
  loadMaterialIcons();
});
