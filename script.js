// Timer
const startDate = new Date("2024-10-11T00:00:00");

function updateTimer() {
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  const days = now.getDate() - startDate.getDate();
  const hours = now.getHours() - startDate.getHours();
  const minutes = now.getMinutes() - startDate.getMinutes();
  const seconds = now.getSeconds() - startDate.getSeconds();

  document.getElementById("timer").innerHTML = `
    <h2>Eu estou apaixonado por você há:</h2>
    <p>${years} anos, ${months} meses, ${days} dias</p>
    <p>${Math.abs(hours)} horas, ${Math.abs(minutes)} minutos, ${Math.abs(seconds)} segundos</p>
  `;
}

setInterval(updateTimer, 1000);

// Música
const music = document.getElementById("music");
const playMusic = document.getElementById("playMusic");

playMusic.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playMusic.textContent = "⏸️"; // Alterna para o ícone de pausa
  } else {
    music.pause();
    playMusic.textContent = "▶️"; // Alterna para o ícone de play
  }
});

// Carrossel
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides.clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 4; // 4 itens no carrossel
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 4) % 4; // 4 itens no carrossel
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
