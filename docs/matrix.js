// JavaScript for the Matrix effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to be used - Katakana
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const characters = katakana + alphabet + numbers;

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// An array to track the y-position of each column's raindrop
const rainDrops = [];
for (let i = 0; i < columns; i++) {
    rainDrops[i] = 1;
}

function draw() {
    // Fill canvas with a semi-transparent black to create the fading trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(42, 82, 190, 0.25)'; // Cerulean text with 25% opacity
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < rainDrops.length; i++) {
        // Get a random character from the string
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        // Draw the character
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset drop to the top randomly after it goes off screen
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }

        // Move the drop down
        rainDrops[i]++;
    }
}

// Run the animation
setInterval(draw, 33);

// Optional: Recalculate on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // You may need to recalculate columns and rainDrops array here as well
});
