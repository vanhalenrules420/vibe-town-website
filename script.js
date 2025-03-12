document.addEventListener('DOMContentLoaded', function() {
    const rotatingText = document.getElementById('rotating-text');
    const groups = [
        'Builders',
        'Vibe coders',
        'Creatives',
        'Online communities',
        'Your friends',
        'You'
    ];
    
    let currentIndex = 0;
    
    function updateText() {
        // Fade out
        rotatingText.style.opacity = 0;
        
        setTimeout(() => {
            // Update text
            currentIndex = (currentIndex + 1) % groups.length;
            rotatingText.textContent = groups[currentIndex];
            
            // Fade in
            rotatingText.style.opacity = 1;
        }, 500);
    }
    
    // Set initial text
    rotatingText.textContent = groups[0];
    rotatingText.style.transition = 'opacity 0.5s ease';
    rotatingText.style.opacity = 1;
    
    // Start rotation
    setInterval(updateText, 3000);
});
