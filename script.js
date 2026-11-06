// Audio toggle
const bgMusic = document.getElementById('bg-music');
let isMuted = true;

function toggleAudio(btn) {
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

document.getElementById('audio-toggle').addEventListener('click', () => toggleAudio(document.getElementById('audio-toggle')));
document.getElementById('audio-toggle-2').addEventListener('click', () => toggleAudio(document.getElementById('audio-toggle-2')));

// Particle system
function createParticles(containerId, count = 60) {
    const container = document.getElementById(containerId);
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

// Page transition
const enterText = document.getElementById('enter-text');
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');

enterText.addEventListener('click', () => {
    enterText.classList.add('clicked');
    enterText.textContent = 'ENTERING...';
    
    setTimeout(() => {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
        
        // Ensure music plays on page 2
        if (isMuted) {
            bgMusic.play().catch(() => {});
            isMuted = false;
        }
        
        // Update audio buttons
        document.getElementById('audio-toggle').classList.remove('muted');
        document.getElementById('audio-toggle').querySelector('.audio-icon').textContent = '🔊';
        document.getElementById('audio-toggle-2').classList.remove('muted');
        document.getElementById('audio-toggle-2').querySelector('.audio-icon').textContent = '🔊';
    }, 800);
});

// Music player controls
const pauseBtn = document.querySelector('.pause-btn');
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
    if (isPlaying) {
        progress += 0.5;
        if (progress > 100) progress = 8;
        progressFill.style.width = progress + '%';
    }
}, 200);