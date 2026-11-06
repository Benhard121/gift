// Audio toggle
function setupAudio(audioId, btnId) {
    const bgMusic = document.getElementById(audioId);
    const btn = document.getElementById(btnId);
    if (!bgMusic || !btn) return;

    let isMuted = true;

    function toggleAudio() {
        if (isMuted) {
            bgMusic.play().catch(() => {});
            btn.classList.remove('muted');
            btn.querySelector('.audio-icon').textContent = '🔊';
        } else {
            bgMusic.pause();
            btn.classList.add('muted');
            btn.querySelector('.audio-icon').textContent = '🔇';
        }
        isMuted = !isMuted;
    }

    btn.addEventListener('click', toggleAudio);
}

setupAudio('bg-music', 'audio-toggle');
setupAudio('bg-music-2', 'audio-toggle-2');

// Particle system
function createParticles(containerId, count = 60) {
    const container = document.getElementById(containerId);
    if (!container) return;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.opacity = Math.random() * 0.6 + 0.2;

        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `floatParticle ${duration}s linear ${delay}s infinite`;

        container.appendChild(particle);
    }
}

createParticles('particles-1', 50);
createParticles('particles-2', 50);

// Page 1: Enter to continue -> navigate to page2.html
const enterText = document.getElementById('enter-text');
if (enterText) {
    enterText.addEventListener('click', () => {
        enterText.classList.add('clicked');
        enterText.textContent = 'ENTERING...';

        setTimeout(() => {
            window.location.href = 'page2.html';
        }, 800);
    });
}

// Music player controls (only on page 2)
const pauseBtn = document.querySelector('.pause-btn');
if (pauseBtn) {
    let isPlaying = true;

    pauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseBtn.textContent = '▶';
            pauseBtn.title = 'Play';
        } else {
            pauseBtn.textContent = '⏸';
            pauseBtn.title = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    // Progress bar animation
    const progressFill = document.querySelector('.progress-fill');
    let progress = 8;

    setInterval(() => {
        if (isPlaying && progressFill) {
            progress += 0.5;
            if (progress > 100) progress = 8;
            progressFill.style.width = progress + '%';
        }
    }, 200);
}