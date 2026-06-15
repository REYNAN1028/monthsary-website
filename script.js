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
    // Calculate next monthsary (30 days from today)
    const nextMonthsary = new Date();
    nextMonthsary.setDate(nextMonthsary.getDate() + 30);

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
// MUSIC PLAYER - FULLY FUNCTIONAL
// ============================

// Playlist with sample songs (UPDATE THESE WITH YOUR MUSIC URLs)
const playlist = [
    {
        title: "Our Special Song",
        artist: "Your Favorite Artist",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://via.placeholder.com/300x300/a8d5ba/ffffff?text=Your+Song+1",
        duration: 360
    },
    {
        title: "Love in Every Moment",
        artist: "Beautiful Melodies",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "https://via.placeholder.com/300x300/b8e6d5/ffffff?text=Your+Song+2",
        duration: 320
    },
    {
        title: "Forever With You",
        artist: "Romantic Dreams",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        image: "https://via.placeholder.com/300x300/c8dcc4/ffffff?text=Your+Song+3",
        duration: 280
    },
    {
        title: "Moonlight Memories",
        artist: "Soft Melodies",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        image: "https://via.placeholder.com/300x300/d5f0e8/ffffff?text=Your+Song+4",
        duration: 340
    },
    {
        title: "Hearts Intertwined",
        artist: "Love Songs Collection",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        image: "https://via.placeholder.com/300x300/e8f5f0/ffffff?text=Your+Song+5",
        duration: 300
    }
];

let currentSongIndex = 0;
let isPlaying = false;

// Get elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const albumArt = document.getElementById('albumArt');
const vinylRecord = document.getElementById('vinylRecord');
const playlistContainer = document.getElementById('playlist');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Initialize player
function initializePlayer() {
    loadSong(currentSongIndex);
    renderPlaylist();
    setupEventListeners();
}

// Load song
function loadSong(index) {
    if (index >= playlist.length) {
        currentSongIndex = 0;
        index = 0;
    }
    if (index < 0) {
        currentSongIndex = playlist.length - 1;
        index = playlist.length - 1;
    }

    const song = playlist[index];
    audioPlayer.src = song.url;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumArt.src = song.image;
    albumArt.alt = song.title;

    // Update playlist highlighting
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });

    currentSongIndex = index;
}

// Play/Pause
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = '▶';
        playBtn.style.background = 'linear-gradient(135deg, #6ccc8f, #52b788)';
        vinylRecord.classList.remove('playing');
    } else {
        audioPlayer.play();
        playBtn.textContent = '⏸';
        playBtn.style.background = 'linear-gradient(135deg, #ff6b6b, #ff8a80)';
        vinylRecord.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

// Next song
function nextSong() {
    currentSongIndex++;
    loadSong(currentSongIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// Previous song
function prevSong() {
    currentSongIndex--;
    loadSong(currentSongIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// Format time (seconds to MM:SS)
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress bar
function updateProgressBar() {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    }
}

// Set progress
function setProgress(e) {
    if (audioPlayer.duration) {
        const percent = (e.target.value / 100);
        audioPlayer.currentTime = percent * audioPlayer.duration;
    }
}

// Set volume
function setVolume(e) {
    audioPlayer.volume = e.target.value / 100;
}

// Render playlist
function renderPlaylist() {
    playlistContainer.innerHTML = '';
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        if (index === currentSongIndex) {
            item.classList.add('active');
        }
        item.innerHTML = `
            <img src="${song.image}" alt="${song.title}" class="playlist-item-image">
            <div class="playlist-item-info">
                <div class="playlist-item-title">${song.title}</div>
                <div class="playlist-item-artist">${song.artist}</div>
            </div>
            <div class="playlist-item-duration">${formatTime(song.duration)}</div>
        `;
        item.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            togglePlay();
        });
        playlistContainer.appendChild(item);
    });
}

// Setup event listeners
function setupEventListeners() {
    playBtn.addEventListener('click', togglePlay);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    volumeSlider.addEventListener('input', setVolume);
    progressBar.addEventListener('input', setProgress);
    
    // Update progress bar as song plays
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    
    // Play next song when current ends
    audioPlayer.addEventListener('ended', nextSong);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlayer);
} else {
    initializePlayer();
}

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

// ============================
// IMAGE VIEWER MODAL - LIGHTBOX
// ============================

let currentImageIndex = 0;
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.querySelector('.image-modal-close');
const modalPrev = document.querySelector('.image-modal-prev');
const modalNext = document.querySelector('.image-modal-next');

// Gallery captions mapping
const galleryGalleryItems = [
    { caption: '💚 A moment in time' },
    { caption: '✨ Pure happiness' },
    { caption: '🌹 Unforgettable' },
    { caption: '💫 Forever cherished' },
    { caption: '📸 Love in focus' },
    { caption: '👫 Together always' }
];

// Get all gallery items
function getGalleryItems() {
    return Array.from(document.querySelectorAll('.gallery-item'));
}

// Open image modal
function openImageModal(index) {
    const items = getGalleryItems();
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    
    currentImageIndex = index;
    const item = items[index];
    const fullImageUrl = item.getAttribute('data-fullimage');
    const caption = galleryGalleryItems[index]?.caption || 'Beautiful Moment';
    
    modalImage.src = fullImageUrl;
    modalCaption.textContent = caption;
    imageModal.classList.add('active');
}

// Close image modal
function closeImageModal() {
    imageModal.classList.remove('active');
}

// Navigate to next image
function nextImage() {
    const items = getGalleryItems();
    currentImageIndex = (currentImageIndex + 1) % items.length;
    openImageModal(currentImageIndex);
}

// Navigate to previous image
function prevImage() {
    const items = getGalleryItems();
    currentImageIndex = (currentImageIndex - 1 + items.length) % items.length;
    openImageModal(currentImageIndex);
}

// Add click listeners to all gallery items and their view buttons
function setupGalleryListeners() {
    const items = getGalleryItems();
    items.forEach((item, index) => {
        const viewBtn = item.querySelector('.view-full-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openImageModal(index);
            });
        }
        // Also allow clicking on the entire item to view full image
        item.addEventListener('click', () => {
            openImageModal(index);
        });
    });
}

// Modal controls
modalClose.addEventListener('click', closeImageModal);
modalPrev.addEventListener('click', prevImage);
modalNext.addEventListener('click', nextImage);

// Close modal when clicking outside the image
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeImageModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!imageModal.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeImageModal();
});

// Touch/Swipe navigation for mobile photos
let modalTouchStartX = 0;
let modalTouchEndX = 0;
let modalTouchStartY = 0;
let modalTouchEndY = 0;

imageModal.addEventListener('touchstart', (e) => {
    if (!imageModal.classList.contains('active')) return;
    modalTouchStartX = e.changedTouches[0].screenX;
    modalTouchStartY = e.changedTouches[0].screenY;
}, false);

imageModal.addEventListener('touchend', (e) => {
    if (!imageModal.classList.contains('active')) return;
    modalTouchEndX = e.changedTouches[0].screenX;
    modalTouchEndY = e.changedTouches[0].screenY;
    handleModalSwipe();
}, false);

function handleModalSwipe() {
    const swipeThreshold = 50;
    const horizontalDiff = modalTouchStartX - modalTouchEndX;
    const verticalDiff = Math.abs(modalTouchStartY - modalTouchEndY);
    
    // Only register swipe if it's more horizontal than vertical
    if (Math.abs(horizontalDiff) > swipeThreshold && verticalDiff < 100) {
        if (horizontalDiff > 0) {
            // Swiped left, go to next photo
            nextImage();
        } else {
            // Swiped right, go to previous photo
            prevImage();
        }
    }
}

// Load More Images functionality
const loadMoreBtn = document.getElementById('loadMoreBtn');
const moreImages = [
    { thumb: 'https://via.placeholder.com/300x300/a8d5ba/ffffff?text=Memory+7', full: 'https://via.placeholder.com/800x800/a8d5ba/ffffff?text=Memory+7', caption: '💚 New Memory 1' },
    { thumb: 'https://via.placeholder.com/300x300/b8e6d5/ffffff?text=Memory+8', full: 'https://via.placeholder.com/800x800/b8e6d5/ffffff?text=Memory+8', caption: '✨ New Memory 2' },
    { thumb: 'https://via.placeholder.com/300x300/c8dcc4/ffffff?text=Memory+9', full: 'https://via.placeholder.com/800x800/c8dcc4/ffffff?text=Memory+9', caption: '🌹 New Memory 3' }
];

loadMoreBtn.addEventListener('click', () => {
    const galleryContainer = document.getElementById('galleryContainer');
    
    moreImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-fullimage', image.full);
        galleryItem.innerHTML = `
            <img src="${image.thumb}" alt="Memory">
            <div class="gallery-overlay">
                <p>${image.caption}</p>
                <button class="view-full-btn">View Full Image 👁️</button>
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
        
        // Add event listeners to new item
        const viewBtn = galleryItem.querySelector('.view-full-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = getGalleryItems().indexOf(galleryItem);
                openImageModal(index);
            });
        }
        
        galleryItem.addEventListener('click', () => {
            const index = getGalleryItems().indexOf(galleryItem);
            openImageModal(index);
        });
    });
    
    // Update gallery captions array
    galleryGalleryItems.push(
        ...moreImages.map(img => ({ caption: img.caption }))
    );
    
    // Hide load more button after first click (optional)
    loadMoreBtn.style.opacity = '0.5';
    loadMoreBtn.disabled = true;
});

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', setupGalleryListeners);

// ============================
// FULLSCREEN GALLERY MODAL - NEW FEATURE
// ============================

/**
 * GALLERY IMAGES CONFIGURATION
 * 
 * ADD MORE IMAGES HERE:
 * Simply add new image objects to this array in the format shown below.
 * The gallery will automatically display all images without requiring code changes.
 * 
 * Format:
 * {
 *     thumb: 'path/to/thumbnail.jpg',  // Small image for grid (used if thumb is provided)
 *     full: 'path/to/fullsize.jpg',     // High quality image for lightbox
 *     caption: 'Beautiful caption 💚'   // Text shown when hovering/viewing
 * }
 * 
 * You can use:
 * - Local file paths: 'images/photo1.jpg'
 * - Full file paths: 'C:/Users/YourName/Pictures/photo.jpg'
 * - URLs: 'https://example.com/image.jpg'
 */
const fullscreenGalleryImages = [
    {
        thumb: 'images/img3.png',
        full: 'images/img3.png',
        caption: '💚 A moment in time'
    },
    {
        thumb: 'images/img4.png',
        full: 'images/img4.png',
        caption: '✨ Pure happiness'
    },
    {
        thumb: 'images/img5.png',
        full: 'images/img5.png',
        caption: '🌹 Unforgettable'
    },
    {
        thumb: 'images/img6.png',
        full: 'images/img6.png',
        caption: '💫 Forever cherished'
    },
    {
        thumb: 'images/img7.png',
        full: 'images/img7.png',
        caption: '📸 Love in focus'
    },
    {
        thumb: 'images/img8.png',
        full: 'images/img8.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img9.jpg',
        full: 'images/img9.jpg',
        caption: '💚 A moment in time'
    },
    {
        thumb: 'images/img10.png',
        full: 'images/img10.png',
        caption: '✨ Pure happiness'
    },
    {
        thumb: 'images/img11.png',
        full: 'images/img11.png',
        caption: '🌹 Unforgettable'
    },
    {
        thumb: 'images/img12.png',
        full: 'images/img12.png',
        caption: '💫 Forever cherished'
    },
    {
        thumb: 'images/img13.png',
        full: 'images/img13.png',
        caption: '📸 Love in focus'
    },
    {
        thumb: 'images/img14.jpg',
        full: 'images/img14.jpg',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img15.png',
        full: 'images/img15.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img16.jpg',
        full: 'images/img16.jpg',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img17.jpg',
        full: 'images/img17.jpg',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img18.jpg',
        full: 'images/img18.jpg',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img19.jpg',
        full: 'images/img19.jpg',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img20.jpg',
        full: 'images/img20.jpg',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img21.png',
        full: 'images/img21.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img22.png',
        full: 'images/img22.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img23.png',
        full: 'images/img23.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img24.png',
        full: 'images/img24.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img25.png',
        full: 'images/img25.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img26.png',
        full: 'images/img26.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img27.png',
        full: 'images/img27.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img28.png',
        full: 'images/img28.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img29.png',
        full: 'images/img29.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img30.png',
        full: 'images/img30.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img31.png',
        full: 'images/img31.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img32.png',
        full: 'images/img32.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img33.png',
        full: 'images/img33.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img34.png',
        full: 'images/img34.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img35.png',
        full: 'images/img35.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img36.png',
        full: 'images/img36.png',
        caption: '👫 Together always'
    },
    {
        thumb: 'images/img37.png',
        full: 'images/img37.png',
        caption: '👫 Together always'
    },
   
    // ADD MORE IMAGES BELOW - Copy the format above and paste new entries here
    // Example:
    // {
    //     thumb: 'path/to/your/image.jpg',
    //     full: 'path/to/your/image-hq.jpg',
    //     caption: '💚 Your custom caption'
    // },
];

let fullscreenGalleryCurrentIndex = 0;
let fullscreenGalleryTouchStartX = 0;
let fullscreenGalleryTouchStartY = 0;

// Zoom state variables
let galleryImageZoomLevel = 1;
let galleryImagePanX = 0;
let galleryImagePanY = 0;
let galleryLastTouchTime = 0;
let galleryLastTouchX = 0;
let galleryLastTouchY = 0;
let galleryPinchStartDistance = 0;

// Get fullscreen gallery elements
const fullscreenGalleryModal = document.getElementById('fullscreenGalleryModal');
const galleryModalGrid = document.getElementById('galleryModalGrid');
const galleryBackBtn = document.getElementById('galleryBackBtn');
const galleryLightboxModal = document.getElementById('galleryLightboxModal');
const galleryLightboxImage = document.getElementById('galleryLightboxImage');
const galleryLightboxCaption = document.getElementById('galleryLightboxCaption');
const galleryLightboxClose = document.querySelector('.gallery-lightbox-close');
const galleryLightboxPrev = document.querySelector('.gallery-lightbox-prev');
const galleryLightboxNext = document.querySelector('.gallery-lightbox-next');
const galleryModalPetals = document.getElementById('galleryModalPetals');
const galleryZoomResetBtn = document.querySelector('.gallery-zoom-reset');
const galleryImageContainer = document.querySelector('.gallery-image-container');

/**
 * Initialize fullscreen gallery
 * Renders all images from the fullscreenGalleryImages array
 */
function initializeFullscreenGallery() {
    renderGalleryGrid();
    setupFullscreenGalleryEventListeners();
    createGalleryPetals();
}

/**
 * Render gallery grid with all images
 * Creates responsive grid of clickable image items
 */
function renderGalleryGrid() {
    galleryModalGrid.innerHTML = '';
    
    fullscreenGalleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-modal-item';
        
        const img = document.createElement('img');
        img.src = image.thumb || image.full;
        img.alt = image.caption;
        img.loading = 'lazy';
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-modal-item-overlay';
        
        const caption = document.createElement('div');
        caption.className = 'gallery-modal-item-caption';
        caption.textContent = image.caption;
        
        overlay.appendChild(caption);
        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        
        galleryItem.addEventListener('click', () => openFullscreenGalleryLightbox(index));
        
        galleryModalGrid.appendChild(galleryItem);
    });
}

/**
 * Open fullscreen gallery modal
 */
function openFullscreenGallery() {
    fullscreenGalleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close fullscreen gallery modal
 */
function closeFullscreenGallery() {
    fullscreenGalleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Open lightbox viewer for a specific image in fullscreen gallery
 */
function openFullscreenGalleryLightbox(index) {
    if (index < 0) {
        fullscreenGalleryCurrentIndex = fullscreenGalleryImages.length - 1;
    } else if (index >= fullscreenGalleryImages.length) {
        fullscreenGalleryCurrentIndex = 0;
    } else {
        fullscreenGalleryCurrentIndex = index;
    }
    
    const image = fullscreenGalleryImages[fullscreenGalleryCurrentIndex];
    galleryLightboxImage.src = image.full;
    galleryLightboxCaption.textContent = image.caption;
    
    // Update image counter
    document.getElementById('currentImageNum').textContent = fullscreenGalleryCurrentIndex + 1;
    document.getElementById('totalImages').textContent = fullscreenGalleryImages.length;
    
    // Reset zoom
    resetGalleryImageZoom();
    
    galleryLightboxModal.classList.add('active');
}

/**
 * Close lightbox modal in fullscreen gallery
 */
function closeFullscreenGalleryLightbox() {
    galleryLightboxModal.classList.remove('active');
}

/**
 * Navigate to next image in lightbox
 */
function nextFullscreenGalleryImage() {
    fullscreenGalleryCurrentIndex++;
    openFullscreenGalleryLightbox(fullscreenGalleryCurrentIndex);
}

/**
 * Navigate to previous image in lightbox
 */
function prevFullscreenGalleryImage() {
    fullscreenGalleryCurrentIndex--;
    openFullscreenGalleryLightbox(fullscreenGalleryCurrentIndex);
}

/**
 * Create floating flower petals in gallery modal
 */
function createGalleryPetals() {
    const flowers = ['🌷', '🌹', '🌸', '🌺'];
    const petalCount = 10;
    
    // Clear existing petals
    galleryModalPetals.innerHTML = '';
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'gallery-petal';
        petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        const size = Math.random() * 20 + 20;
        petal.style.fontSize = size + 'px';
        
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = -50 + 'px';
        
        const duration = Math.random() * 10 + 10;
        petal.style.animationDuration = duration + 's';
        
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        galleryModalPetals.appendChild(petal);
    }
    
    // Recreate petals periodically for continuous effect
    setInterval(() => {
        if (fullscreenGalleryModal.classList.contains('active')) {
            createGalleryPetals();
        }
    }, 15000);
}

/**
 * Reset gallery image zoom to normal
 */
function resetGalleryImageZoom() {
    galleryImageZoomLevel = 1;
    galleryImagePanX = 0;
    galleryImagePanY = 0;
    applyGalleryImageTransform();
    galleryLightboxImage.classList.remove('zoomed');
}

/**
 * Apply zoom and pan transform to image
 */
function applyGalleryImageTransform() {
    galleryLightboxImage.style.transform = `translate(${galleryImagePanX}px, ${galleryImagePanY}px) scale(${galleryImageZoomLevel})`;
}

/**
 * Zoom in on image
 */
function zoomGalleryImageIn() {
    if (galleryImageZoomLevel < 3) {
        galleryImageZoomLevel += 0.5;
        if (galleryImageZoomLevel > 1) {
            galleryLightboxImage.classList.add('zoomed');
        }
        applyGalleryImageTransform();
    }
}

/**
 * Zoom out from image
 */
function zoomGalleryImageOut() {
    if (galleryImageZoomLevel > 1) {
        galleryImageZoomLevel -= 0.5;
        if (galleryImageZoomLevel <= 1) {
            galleryImageZoomLevel = 1;
            galleryImagePanX = 0;
            galleryImagePanY = 0;
            galleryLightboxImage.classList.remove('zoomed');
        }
        applyGalleryImageTransform();
    }
}

/**
 * Handle pinch zoom gesture
 */
function handleGalleryPinchZoom(distance) {
    if (galleryPinchStartDistance === 0) {
        galleryPinchStartDistance = distance;
        return;
    }
    
    const scale = distance / galleryPinchStartDistance;
    const newZoom = galleryImageZoomLevel * scale;
    
    if (newZoom > 1 && newZoom < 3) {
        galleryImageZoomLevel = newZoom;
        applyGalleryImageTransform();
    }
}

/**
 * Calculate distance between two touch points
 */
function getGalleryTouchDistance(touches) {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Setup event listeners for fullscreen gallery
 */
function setupFullscreenGalleryEventListeners() {
    // Back button
    galleryBackBtn.addEventListener('click', closeFullscreenGallery);
    
    // Lightbox controls
    galleryLightboxClose.addEventListener('click', closeFullscreenGalleryLightbox);
    galleryLightboxPrev.addEventListener('click', prevFullscreenGalleryImage);
    galleryLightboxNext.addEventListener('click', nextFullscreenGalleryImage);
    
    // Zoom reset button
    if (galleryZoomResetBtn) {
        galleryZoomResetBtn.addEventListener('click', resetGalleryImageZoom);
    }
    
    // Close lightbox when clicking outside image
    galleryLightboxModal.addEventListener('click', (e) => {
        if (e.target === galleryLightboxModal) {
            closeFullscreenGalleryLightbox();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (!galleryLightboxModal.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight') {
            nextFullscreenGalleryImage();
        } else if (e.key === 'ArrowLeft') {
            prevFullscreenGalleryImage();
        } else if (e.key === 'Escape') {
            closeFullscreenGalleryLightbox();
        } else if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            zoomGalleryImageIn();
        } else if (e.key === '-') {
            e.preventDefault();
            zoomGalleryImageOut();
        }
    });
    
    // Image double-tap zoom
    let galleryDoubleTapTimer = null;
    galleryLightboxImage.addEventListener('click', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - galleryLastTouchTime;
        
        if (tapLength < 300 && galleryDoubleTapTimer === null) {
            // Double tap detected
            e.preventDefault();
            if (galleryImageZoomLevel > 1) {
                resetGalleryImageZoom();
            } else {
                galleryImageZoomLevel = 2;
                galleryLightboxImage.classList.add('zoomed');
                applyGalleryImageTransform();
            }
            galleryLastTouchTime = 0;
        } else {
            // Single tap
            galleryLastTouchTime = currentTime;
            galleryDoubleTapTimer = setTimeout(() => {
                galleryDoubleTapTimer = null;
            }, 300);
        }
    });
    
    // Touch events for swipe and pinch zoom
    galleryImageContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            // Single touch - swipe
            fullscreenGalleryTouchStartX = e.touches[0].clientX;
            fullscreenGalleryTouchStartY = e.touches[0].clientY;
            galleryLastTouchX = fullscreenGalleryTouchStartX;
            galleryLastTouchY = fullscreenGalleryTouchStartY;
        } else if (e.touches.length === 2) {
            // Two finger touch - pinch zoom
            e.preventDefault();
            galleryPinchStartDistance = getGalleryTouchDistance(e.touches);
        }
    }, { passive: false });
    
    galleryImageContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            // Pinch zoom
            e.preventDefault();
            const distance = getGalleryTouchDistance(e.touches);
            handleGalleryPinchZoom(distance);
        }
    }, { passive: false });
    
    galleryImageContainer.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            // All touches released
            galleryPinchStartDistance = 0;
            
            // Check for swipe
            if (Math.abs(fullscreenGalleryTouchStartX) > 0) {
                const currentX = e.changedTouches[0].clientX;
                const currentY = e.changedTouches[0].clientY;
                const diffX = fullscreenGalleryTouchStartX - currentX;
                const diffY = fullscreenGalleryTouchStartY - currentY;
                
                // Only detect horizontal swipes if not zoomed
                if (galleryImageZoomLevel <= 1 && Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX > 50) {
                        // Swiped left - show next image
                        nextFullscreenGalleryImage();
                    } else if (diffX < -50) {
                        // Swiped right - show previous image
                        prevFullscreenGalleryImage();
                    }
                }
                
                fullscreenGalleryTouchStartX = 0;
                fullscreenGalleryTouchStartY = 0;
            }
        }
    }, { passive: false });
    
    // Mouse wheel zoom (for desktop users)
    galleryImageContainer.addEventListener('wheel', (e) => {
        if (galleryLightboxModal.classList.contains('active')) {
            e.preventDefault();
            if (e.deltaY < 0) {
                zoomGalleryImageIn();
            } else {
                zoomGalleryImageOut();
            }
        }
    }, { passive: false });
    
    // Prevent default drag behavior
    galleryLightboxImage.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
}

/**
 * Handle swipe gestures in lightbox
 */
function handleFullscreenGallerySwipe() {
    const touchEndX = event.changedTouches[0].screenX;
    const touchEndY = event.changedTouches[0].screenY;
    const diffX = fullscreenGalleryTouchStartX - touchEndX;
    const diffY = fullscreenGalleryTouchStartY - touchEndY;
    
    // Only detect horizontal swipes (not vertical)
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) {
            // Swiped left - show next image
            nextFullscreenGalleryImage();
        } else if (diffX < -50) {
            // Swiped right - show previous image
            prevFullscreenGalleryImage();
        }
    }
}

/**
 * Update "More Images" button to open fullscreen gallery
 */
if (loadMoreBtn) {
    // Remove the old event listener by cloning and replacing
    const newLoadMoreBtn = loadMoreBtn.cloneNode(true);
    loadMoreBtn.parentNode.replaceChild(newLoadMoreBtn, loadMoreBtn);
    
    // Add new click listener
    newLoadMoreBtn.addEventListener('click', openFullscreenGallery);
    newLoadMoreBtn.style.opacity = '1';
    newLoadMoreBtn.disabled = false;
}

// Initialize fullscreen gallery when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFullscreenGallery);
} else {
    initializeFullscreenGallery();
}
