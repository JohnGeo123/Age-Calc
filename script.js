// Obținem referințele la elementele HTML
const birthDateInput = document.getElementById('birth-date');
const ageDisplay = document.getElementById('age-display');

// Funcția pentru calcularea vârstei
function calculateAge() {
  const birthDate = new Date(birthDateInput.value);
  const currentDate = new Date();

  // Calculăm diferența dintre datele curentă și cea de naștere
  const ageInMillis = currentDate - birthDate;

  // Convertim diferența în ani
  const ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365));

  // Afișăm vârsta în div
  ageDisplay.textContent = `Ai ${ageInYears} ani.`;
}

// Adăugăm evenimentul "input" pentru a calcula vârsta la fiecare schimbare de dată
birthDateInput.addEventListener('input', calculateAge);
