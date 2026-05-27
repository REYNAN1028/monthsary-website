// ============================
// PASSCODE LOCK SCREEN
// ============================

const CORRECT_PASSCODE = '16'; // May 16, 2026 - Your special date
const passcodeInput = document.getElementById('passcodeInput');
const passcodeBtn = document.getElementById('passcodeBtn');
const passcodeError = document.getElementById('passcodeError');
const passcodeModal = document.getElementById('passcodeModal');
const mainContent = document.getElementById('mainContent');

// Handle passcode submission
function checkPasscode() {
    const enteredCode = passcodeInput.value.trim();
    
    if (enteredCode === CORRECT_PASSCODE) {
        // Correct passcode
        passcodeError.textContent = '';
        passcodeModal.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Play success animation
        passcodeBtn.textContent = '✓ Unlocked!';
        passcodeBtn.style.background = 'linear-gradient(135deg, #6ccc8f, #52b788)';
        
        setTimeout(() => {
            passcodeBtn.textContent = 'Unlock 🔓';
            passcodeBtn.style.background = 'linear-gradient(135deg, var(--sage-green), var(--pastel-green))';
        }, 1500);
    } else {
        // Wrong passcode
        passcodeError.textContent = '💔 Not quite right... Try again!';
        passcodeInput.value = '';
        passcodeInput.shake = true;
        
        // Add shake animation
        passcodeInput.style.animation = 'none';
        setTimeout(() => {
            passcodeInput.style.animation = 'shake 0.5s ease-in-out';
        }, 10);
    }
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Event listeners
passcodeBtn.addEventListener('click', checkPasscode);
passcodeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPasscode();
    }
});

// Auto-focus on input
passcodeInput.focus();

// ============================
// PARTICLES & PETALS ANIMATION
// ============================


function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 30 + 10;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 10 + 15;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
    }
}

function createPetals() {
    const container = document.getElementById('petalsContainer');
    const flowers = ['🌷', '🌹', '🌸', '🌺'];
    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        const x = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 8;
        const delay = Math.random() * 10;
        
        petal.style.left = x + 'px';
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        
        container.appendChild(petal);
    }
}

createParticles();
createPetals();

// Recreate petals periodically for continuous effect
setInterval(() => {
    const oldPetals = document.querySelectorAll('.petal');
    if (oldPetals.length < 20) {
        createPetals();
    }
}, 5000);

// ============================
// COUNTDOWN TIMER
// ============================

function updateCountdown() {
    // Calculate next monthsary (28 days from today)
    const nextMonthsary = new Date();
    nextMonthsary.setDate(nextMonthsary.getDate() + 28);

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = nextMonthsary - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

updateCountdown();

// ============================
// LETTER ENVELOPE OPENING
// ============================

const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letterContent');
const letterBtn = document.getElementById('letterBtn');

// Set current date in letter
const today = new Date();
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('letterDate').textContent = today.toLocaleDateString('en-US', dateOptions);

letterBtn.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        letterContent.classList.add('show');
        letterBtn.textContent = 'Close Letter';
    } else {
        envelope.classList.remove('open');
        letterContent.classList.remove('show');
        letterBtn.textContent = 'Click to Read My Letter 💌';
    }
});

// Close letter when clicking outside
document.addEventListener('click', (e) => {
    if (!envelope.contains(e.target) && !letterBtn.contains(e.target) && letterContent.classList.contains('show')) {
        envelope.classList.remove('open');
        letterContent.classList.remove('show');
        letterBtn.textContent = 'Click to Read My Letter 💌';
    }
});

// ============================
// MUSIC PLAYER
// ============================

const vinylRecord = document.getElementById('vinylRecord');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        vinylRecord.classList.add('playing');
        playBtn.textContent = '⏸';
        playBtn.style.background = 'linear-gradient(135deg, #ff6b6b, #ff8a80)';
    } else {
        vinylRecord.classList.remove('playing');
        playBtn.textContent = '▶';
        playBtn.style.background = 'linear-gradient(135deg, var(--sage-green), var(--pastel-green))';
    }
});

prevBtn.addEventListener('click', () => {
    if (isPlaying) {
        playBtn.click();
    }
});

nextBtn.addEventListener('click', () => {
    if (isPlaying) {
        playBtn.click();
    }
});

// ============================
// SMOOTH SCROLL BEHAVIOR
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================
// INTERSECTION OBSERVER FOR FADE-IN EFFECTS
// ============================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe timeline items and reason cards
document.querySelectorAll('.timeline-item, .reason-card, .gallery-item, .countdown-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// ============================
// REASON CARD CLICK ANIMATIONS
// ============================

document.querySelectorAll('.reason-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const heartClick = this.querySelector('.heart-click');
        
        // Get random position within the card
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        heartClick.style.left = x + 'px';
        heartClick.style.top = y + 'px';
        
        // Trigger animation
        heartClick.offsetHeight; // Trigger reflow
        heartClick.style.animation = 'popHeart 0.6s ease-out forwards';
        
        setTimeout(() => {
            heartClick.style.animation = '';
            heartClick.style.opacity = '0';
        }, 600);
    });
});

// ============================
// FOOTER DATE
// ============================

const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);

// ============================
// PARALLAX SCROLLING EFFECT
// ============================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.2;
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================
// HERO BUTTON SMOOTH SCROLL
// ============================

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============================
// RESPONSIVE ADJUSTMENTS
// ============================

function adjustForMobile() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.fontSize = '0.85rem';
        });
    }
}

window.addEventListener('resize', adjustForMobile);
adjustForMobile();

// ============================
// PAGE LOAD ANIMATION
// ============================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.querySelector('.hero').style.animation = 'fadeIn 0.5s ease-out';
});

// ============================
// SUBTLE SOUND EFFECTS (Optional - uncomment to enable)
// ============================

// You can uncomment this section and add sound files to enable sound effects
/*
function playSound(frequency = 440, duration = 100) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

// Play sound on button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        playSound(600, 100);
    });
});
*/

// ============================
// DYNAMIC THEME CUSTOMIZATION
// ============================

// You can uncomment and modify these to allow custom color themes
/*
function setCustomColor(colorName, colorValue) {
    document.documentElement.style.setProperty(`--${colorName}`, colorValue);
}

// Example: setCustomColor('sage-green', '#b8d4c0');
*/

// ============================
// CONSOLE MESSAGE
// ============================

console.log('%cHappy Monthsary! 💚', 'font-size: 24px; color: #9caf88; font-weight: bold;');
console.log('%cThis beautiful website was made with love ✨', 'font-size: 16px; color: #a8d5ba;');
