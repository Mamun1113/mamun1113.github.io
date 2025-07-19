window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const top = section.offsetTop - 50;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      document.querySelectorAll('.navbar-nav li').forEach(li => li.classList.remove('active'));
      const activeClass = section.id + '-nav';
      const navItem = document.querySelector(`.navbar-nav .${activeClass}`);
      if (navItem) navItem.classList.add('active');
    }
  });
});


// ===== Word Loop Animation =====
const words = [
  "Software Developer",
  "Low Code/No Code Expert",
  "AI/ML Learner"
];

let currentIndex = 0;
const wordLoopDiv = document.getElementById("word-loop");

// Show the first word immediately on page load
if (wordLoopDiv) {
  wordLoopDiv.textContent = words[currentIndex];
  wordLoopDiv.classList.add("show"); // Initial fade-in
}

// Function to cycle words
function showNextWord() {
  if (!wordLoopDiv) return;

  wordLoopDiv.classList.remove("show");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % words.length;
    wordLoopDiv.textContent = words[currentIndex];
    wordLoopDiv.classList.add("show");
  }, 2000);
}

// Start word loop
setInterval(showNextWord, 4000);

// ===== Flip-card Click Support (Mobile only) =====
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 767) {
    document.querySelectorAll('.flip-card').forEach(card => {
      console.log("Adding click event to flip-card");
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }

  // ===== Expand Image Overlay Support =====
  const overlay = document.getElementById('expand-image-overlay');
  if (overlay) {
    const overlayImg = overlay.querySelector('img');
    const images = document.querySelectorAll('.expand-image'); // Corrected selector

    images.forEach(img => {
      img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('show');
      });
    });

    overlay.addEventListener('click', () => {
      overlay.classList.remove('show');
    });
  }
});
