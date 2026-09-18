window.addEventListener('DOMContentLoaded', () => {
    const dateBadge = document.getElementById('date-badge');
    const today = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateBadge.innerText = `🎂 Today: ${today.toLocaleDateString('en-US', options)}`;

    startFallingAnimation();
});

function openCard() {
    const cardFront = document.getElementById('cardFront');
    const cardInside = document.getElementById('cardInside');

    cardFront.classList.add('hidden');
    cardInside.classList.remove('hidden');
}

function startFallingAnimation() {
    const container = document.getElementById('falling-container');
    // Massive list of cute emojis falling down
    const symbols = ['🌸', '💖', '🌷', '✨', '🌹', '💕', '🌺', '🎀', '🦋', '⭐', '💌', '🍓', '🧸', '🤍', '💘'];

    setInterval(() => {
        const item = document.createElement('div');
        item.classList.add('falling-item');
        
        item.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        item.style.left = Math.random() * 100 + 'vw';
        item.style.fontSize = (Math.random() * 18 + 14) + 'px';
        
        const duration = Math.random() * 3 + 3;
        item.style.animationDuration = duration + 's';

        container.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, duration * 1000);

    }, 250); // Faster generation so the screen looks extra magical!
}

