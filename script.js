// ===== LYNZGPT WEBSITE ROMANTIS - SCRIPT.JS =====
// Author: LynzGPT Core
// Description: Full functionality for romantic anniversary website
// Date: Generated with precision and creativity

// ===== CONFIGURATION & DATA =====
const CONFIG = {
    // Anniversay date (format: YYYY-MM-DD)
    anniversaryDate: '2023-02-14',
    
    // Music configuration
    musicUrl: 'https://assets.mixkit.co/music/preview/mixkit-loving-you-117.mp3',
    initialVolume: 0.5,
    
    // Gallery data
    galleryItems: [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Pertemuan Pertama',
            date: '14 Februari 2023',
            description: 'Hari pertama kita bertemu, saat dunia terasa lebih berwarna.'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=81',
            title: 'Kencan Romantis',
            date: '14 Maret 2023',
            description: 'Makan malam pertama kita di restoran favoritmu.'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=82',
            title: 'Liburan Bersama',
            date: '15 April 2023',
            description: 'Perjalanan pertama kita ke pantai, matahari terbenam yang indah.'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=83',
            title: 'Ulang Tahun Pertama',
            date: '14 Mei 2023',
            description: 'Merayakan ulang tahun pertamamu sebagai pasanganku.'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=84',
            title: 'Momen Spesial',
            date: '14 Juni 2023',
            description: 'Ketika kamu membuatkan kejutan romantis untukku.'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85',
            title: 'Kenangan Terbaru',
            date: '14 Juli 2023',
            description: 'Foto terakhir kita sebelum anniversary ini.'
        }
    ],
    
    // Timeline data
    timelineItems: [
        {
            date: '14 Feb 2023',
            title: 'Pertemuan Pertama',
            description: 'Hari dimana takdir mempertemukan kita untuk pertama kalinya. Percakapan pertama yang takkan pernah terlupakan.',
            icon: '💘'
        },
        {
            date: '14 Mar 2023',
            title: 'Kencan Pertama',
            description: 'Makan malam romantis di restoran dengan pemandangan kota. Saat itu aku tahu, kamu adalah orang yang spesial.',
            icon: '💑'
        },
        {
            date: '14 Apr 2023',
            title: 'Jadian Resmi',
            description: 'Hari yang paling ditunggu. Akhirnya kita resmi menjadi pasangan. Janji untuk saling mencintai selamanya.',
            icon: '💍'
        },
        {
            date: '14 May 2023',
            title: 'Liburan Bersama',
            description: 'Perjalanan pertama kita ke pantai. Matahari terbenam, ombak, dan tawa kita bersatu dalam satu momen indah.',
            icon: '🌴'
        },
        {
            date: '14 Jun 2023',
            title: 'Ulang Tahun Pertama',
            description: 'Merayakan ulang tahun pertamamu sebagai pasanganku. Kue, lilin, dan harapan untuk tahun-tahun berikutnya.',
            icon: '🎂'
        },
        {
            date: '14 Jul 2023',
            title: 'Anniversary 6 Bulan',
            description: 'Setengah tahun penuh kebahagiaan. Setiap hari bersamamu adalah anugerah yang tak ternilai.',
            icon: '📅'
        }
    ]
};

// ===== STATE MANAGEMENT =====
let state = {
    musicPlaying: false,
    currentGalleryIndex: 0,
    mouseX: 0,
    mouseY: 0,
    heartsClicked: 0
};

// ===== DOM ELEMENTS =====
const elements = {
    // Loading
    loadingScreen: document.getElementById('loading-screen'),
    
    // Music
    backgroundMusic: document.getElementById('backgroundMusic'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    playIcon: document.getElementById('playIcon'),
    pauseIcon: document.getElementById('pauseIcon'),
    volumeSlider: document.getElementById('volumeSlider'),
    
    // Background effects containers
    heartsContainer: document.getElementById('hearts-container'),
    petalsContainer: document.getElementById('petals-container'),
    sparklesContainer: document.getElementById('sparkles-container'),
    
    // Love counter
    daysCount: document.getElementById('daysCount'),
    hoursCount: document.getElementById('hoursCount'),
    minutesCount: document.getElementById('minutesCount'),
    
    // Love letter
    loveLetter: document.getElementById('loveLetter'),
    
    // Gallery
    galleryGrid: document.querySelector('.gallery-grid'),
    galleryModal: document.getElementById('galleryModal'),
    modalImage: document.getElementById('modalImage'),
    modalTitle: document.getElementById('modalTitle'),
    modalDescription: document.getElementById('modalDescription'),
    currentIndex: document.getElementById('currentIndex'),
    totalImages: document.getElementById('totalImages'),
    closeModal: document.getElementById('closeModal'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    
    // Timeline
    timeline: document.querySelector('.timeline'),
    
    // FAB and modals
    fabBtn: document.getElementById('fabBtn'),
    messageModal: document.getElementById('messageModal'),
    closeMessageModal: document.getElementById('closeMessageModal'),
    loveMessageForm: document.getElementById('loveMessageForm'),
    
    // Buttons
    startJourneyBtn: document.getElementById('startJourneyBtn'),
    
    // Section titles for animations
    sectionTitles: document.querySelectorAll('.section-title')
};

// ===== INITIALIZATION =====
function init() {
    console.log('🌹 LynzGPT Romantic Website Initializing...');
    
    // Set anniversary date from config
    updateLoveCounter();
    
    // Initialize music player
    initMusicPlayer();
    
    // Create background effects
    createBackgroundEffects();
    
    // Initialize gallery
    initializeGallery();
    
    // Initialize timeline
    initializeTimeline();
    
    // Initialize event listeners
    setupEventListeners();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Hide loading screen after everything is loaded
    setTimeout(() => {
        elements.loadingScreen.classList.add('hidden');
        startBackgroundAnimations();
    }, 1500);
    
    // Update counter every minute
    setInterval(updateLoveCounter, 60000);
}

// ===== MUSIC PLAYER =====
function initMusicPlayer() {
    // Set initial volume
    elements.backgroundMusic.volume = CONFIG.initialVolume;
    elements.volumeSlider.value = CONFIG.initialVolume * 100;
    
    // Auto-play after user interaction (for browser autoplay policies)
    document.addEventListener('click', () => {
        if (!state.musicPlaying) {
            playMusic();
        }
    }, { once: true });
    
    // Load music with error handling
    elements.backgroundMusic.addEventListener('error', (e) => {
        console.error('Error loading music:', e);
        // Fallback music URL
        elements.backgroundMusic.src = 'https://assets.mixkit.co/music/preview/mixkit-romantic-sunset-443.mp3';
    });
    
    elements.backgroundMusic.load();
}

function playMusic() {
    elements.backgroundMusic.play().then(() => {
        state.musicPlaying = true;
        elements.playIcon.classList.add('hidden');
        elements.pauseIcon.classList.remove('hidden');
    }).catch(err => {
        console.log('Autoplay prevented:', err);
    });
}

function pauseMusic() {
    elements.backgroundMusic.pause();
    state.musicPlaying = false;
    elements.playIcon.classList.remove('hidden');
    elements.pauseIcon.classList.add('hidden');
}

// ===== BACKGROUND EFFECTS =====
function createBackgroundEffects() {
    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        createFloatingHeart();
    }
    
    // Create falling petals
    for (let i = 0; i < 15; i++) {
        createFallingPetal();
    }
    
    // Create sparkles
    for (let i = 0; i < 30; i++) {
        createSparkle();
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    
    const size = Math.random() * 30 + 15;
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 5;
    
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${left}vw`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    elements.heartsContainer.appendChild(heart);
}

function createFallingPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    const size = Math.random() * 15 + 10;
    const opacity = Math.random() * 0.4 + 0.2;
    
    petal.style.left = `${left}vw`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.opacity = opacity;
    
    // Random pink color
    const pinkShades = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493'];
    const randomColor = pinkShades[Math.floor(Math.random() * pinkShades.length)];
    petal.style.background = randomColor;
    
    elements.petalsContainer.appendChild(petal);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 1;
    
    sparkle.style.left = `${left}vw`;
    sparkle.style.top = `${top}vh`;
    sparkle.style.animationDelay = `${delay}s`;
    sparkle.style.animationDuration = `${duration}s`;
    
    elements.sparklesContainer.appendChild(sparkle);
}

function startBackgroundAnimations() {
    // Remove and recreate hearts periodically for infinite animation
    setInterval(() => {
        if (elements.heartsContainer.children.length < 15) {
            createFloatingHeart();
        }
    }, 5000);
    
    setInterval(() => {
        if (elements.petalsContainer.children.length < 10) {
            createFallingPetal();
        }
    }, 8000);
}

// ===== LOVE COUNTER =====
function updateLoveCounter() {
    const anniversary = new Date(CONFIG.anniversaryDate);
    const now = new Date();
    
    // Calculate total days
    const timeDiff = now.getTime() - anniversary.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    // Calculate hours and minutes for today
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Update display
    elements.daysCount.textContent = totalDays.toString().padStart(3, '0');
    elements.hoursCount.textContent = hours.toString().padStart(2, '0');
    elements.minutesCount.textContent = minutes.toString().padStart(2, '0');
}

// ===== GALLERY =====
function initializeGallery() {
    elements.totalImages.textContent = CONFIG.galleryItems.length;
    
    CONFIG.galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-date">${item.date}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openGalleryModal(index));
        elements.galleryGrid.appendChild(galleryItem);
    });
    
    // Add scroll animation observer for gallery items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
}

function openGalleryModal(index) {
    state.currentGalleryIndex = index;
    updateGalleryModal();
    elements.galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    elements.galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateGalleryModal() {
    const item = CONFIG.galleryItems[state.currentGalleryIndex];
    
    elements.modalImage.src = item.image;
    elements.modalImage.alt = item.title;
    elements.modalTitle.textContent = item.title;
    elements.modalDescription.textContent = item.description;
    elements.currentIndex.textContent = state.currentGalleryIndex + 1;
    elements.totalImages.textContent = CONFIG.galleryItems.length;
}

function navigateGallery(direction) {
    state.currentGalleryIndex += direction;
    
    if (state.currentGalleryIndex < 0) {
        state.currentGalleryIndex = CONFIG.galleryItems.length - 1;
    } else if (state.currentGalleryIndex >= CONFIG.galleryItems.length) {
        state.currentGalleryIndex = 0;
    }
    
    updateGalleryModal();
}

// ===== TIMELINE =====
function initializeTimeline() {
    CONFIG.timelineItems.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-icon">${item.icon}</div>
            <div class="timeline-date">📅 ${item.date}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-description">${item.description}</p>
        `;
        
        elements.timeline.appendChild(timelineItem);
    });
    
    // Add scroll animation observer for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    // Section title animations
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    
    elements.sectionTitles.forEach(title => {
        titleObserver.observe(title);
    });
    
    // Smooth scroll for navigation
    if (elements.startJourneyBtn) {
        elements.startJourneyBtn.addEventListener('click', () => {
            document.querySelector('.love-letter-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Music controls
    elements.playPauseBtn.addEventListener('click', () => {
        if (state.musicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    elements.volumeSlider.addEventListener('input', (e) => {
        elements.backgroundMusic.volume = e.target.value / 100;
    });
    
    // Love letter flip
    if (elements.loveLetter) {
        elements.loveLetter.addEventListener('click', () => {
            elements.loveLetter.classList.toggle('flipped');
        });
    }
    
    // Gallery modal controls
    elements.closeModal.addEventListener('click', closeGalleryModal);
    elements.prevBtn.addEventListener('click', () => navigateGallery(-1));
    elements.nextBtn.addEventListener('click', () => navigateGallery(1));
    
    // Close modal on background click
    elements.galleryModal.addEventListener('click', (e) => {
        if (e.target === elements.galleryModal) {
            closeGalleryModal();
        }
    });
    
    // FAB and message modal
    elements.fabBtn.addEventListener('click', () => {
        elements.messageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    elements.closeMessageModal.addEventListener('click', () => {
        elements.messageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    elements.messageModal.addEventListener('click', (e) => {
        if (e.target === elements.messageModal) {
            elements.messageModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Love message form
    elements.loveMessageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const to = document.getElementById('messageTo').value;
        const from = document.getElementById('messageFrom').value;
        const message = document.getElementById('messageText').value;
        
        console.log('💌 Pesan Cinta Terkirim:', { to, from, message });
        
        // Show success message
        alert(`💖 Pesan cinta untuk ${to} telah dikirim dengan penuh kasih sayang!`);
        
        // Reset form
        elements.loveMessageForm.reset();
        
        // Close modal
        elements.messageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Create hearts on click
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
        
        createClickHeart(e.clientX, e.clientY);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Space bar toggles music
        if (e.code === 'Space') {
            e.preventDefault();
            if (state.musicPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        }
        
        // Escape closes modals
        if (e.code === 'Escape') {
            closeGalleryModal();
            elements.messageModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Arrow keys for gallery navigation
        if (elements.galleryModal.classList.contains('active')) {
            if (e.code === 'ArrowLeft') {
                navigateGallery(-1);
            } else if (e.code === 'ArrowRight') {
                navigateGallery(1);
            }
        }
    });
    
    // Track mouse for cursor effects
    document.addEventListener('mousemove', (e) => {
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
    });
}

// ===== SPECIAL EFFECTS =====
function createClickHeart(x, y) {
    state.heartsClicked++;
    
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.zIndex = '10000';
    heart.style.fontSize = '25px';
    heart.style.opacity = '0.9';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'float 3s ease-out forwards';
    
    document.body.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 3000);
    
    // Special effect every 10 clicks
    if (state.heartsClicked % 10 === 0) {
        createHeartExplosion(x, y);
    }
}

function createHeartExplosion(x, y) {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createClickHeart(
                x + (Math.random() - 0.5) * 100,
                y + (Math.random() - 0.5) * 100
            );
        }, i * 50);
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Website error:', e.error);
    // Graceful degradation - try to keep the site running
});

// Handle music loading errors
elements.backgroundMusic.addEventListener('error', () => {
    console.warn('Music failed to load, trying fallback...');
    // You can add additional fallback URLs here
});

// ===== INITIALIZE EVERYTHING =====
// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for debugging (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, state, elements };
}

console.log('✨ Website script loaded successfully!');
