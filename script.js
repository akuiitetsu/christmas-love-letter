// Add interactive elements and extra animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Button opening functionality
    const openButton = document.getElementById('openButton');
    const letterElement = document.querySelector('.letter');
    
    openButton.addEventListener('click', function() {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            
            // Show the letter with pop animation
            setTimeout(() => {
                letterElement.classList.add('visible');
                
                // Show images after all letter content has animated (approximately 13.5 seconds)
                setTimeout(() => {
                    const images = document.querySelectorAll('.image-frame');
                    images.forEach((image, index) => {
                        setTimeout(() => {
                            image.classList.add('visible');
                        }, 500 * index); // 0.5 second delay between each image
                    });
                }, 13500); // Wait for all letter animations to complete
            }, 300);
        }
    });
    
    // Create floating hearts
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1';
        heart.style.animation = `floatUp ${Math.random() * 3 + 4}s linear forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
    
    // Add floating up animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create hearts periodically
    setInterval(createFloatingHeart, 3000);
    
    // Add sparkle effect on letter hover
    letterElement.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.85) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.left = (e.clientX - letterElement.getBoundingClientRect().left) + 'px';
            sparkle.style.top = (e.clientY - letterElement.getBoundingClientRect().top) + 'px';
            sparkle.style.fontSize = '20px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkleDisappear 1s ease-out forwards';
            
            letterElement.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });
    
    // Add sparkle animation
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleDisappear {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.2) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(sparkleStyle);
    
    // Add click effect to hearts
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            const originalSize = this.style.fontSize || '1.5em';
            this.style.transition = 'all 0.3s ease';
            this.style.fontSize = '3em';
            this.style.filter = 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.8))';
            
            setTimeout(() => {
                this.style.fontSize = originalSize;
                this.style.filter = 'none';
            }, 300);
        });
    });
    
    // Add gentle pulse to decorations on hover
    const decorations = document.querySelectorAll('.decorations > div');
    decorations.forEach(decoration => {
        decoration.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'scale(1.5) rotate(20deg)';
        });
        
        decoration.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Create random twinkling stars
    function createTwinklingStar() {
        const star = document.createElement('div');
        star.innerHTML = '⭐';
        star.style.position = 'fixed';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.fontSize = (Math.random() * 15 + 10) + 'px';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '1';
        star.style.animation = `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite`;
        
        document.body.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 5000);
    }
    
    // Add twinkle animation
    const twinkleStyle = document.createElement('style');
    twinkleStyle.textContent = `
        @keyframes twinkle {
            0%, 100% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(twinkleStyle);
    
    // Create twinkling stars periodically
    setInterval(createTwinklingStar, 2000);
    
    // Add initial stars
    for (let i = 0; i < 5; i++) {
        setTimeout(createTwinklingStar, i * 400);
    }
    
    // Add gentle glow effect to the letter
    let glowIntensity = 0;
    let glowDirection = 1;
    
    setInterval(() => {
        glowIntensity += glowDirection * 2;
        if (glowIntensity >= 20 || glowIntensity <= 0) {
            glowDirection *= -1;
        }
        letterElement.style.boxShadow = `0 15px 50px rgba(0, 0, 0, 0.2), 0 0 ${glowIntensity}px rgba(196, 30, 58, 0.3)`;
    }, 100);
    
    // Console message for the developer :)
    console.log('%c💕 Made with love for someone special 💕', 'color: #c41e3a; font-size: 20px; font-weight: bold;');
});
