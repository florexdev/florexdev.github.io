// Matrix rain effect
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '0';
canvas.style.opacity = '0.1';
document.body.insertBefore(canvas, document.body.firstChild);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Random glitch effect on title
const title = document.querySelector('h1');
setInterval(() => {
    if (Math.random() > 0.95) {
        title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
            title.style.transform = 'translate(0, 0)';
        }, 50);
    }
}, 100);
const terminalLines = document.querySelectorAll('.terminal-line');
terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    setTimeout(() => {
        line.style.transition = 'opacity 0.5s ease';
        line.style.opacity = '1';
    }, 1500 + (index * 200));
});
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('click', () => {
        skill.style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
            skill.style.animation = '';
        }, 300);
    });
});
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);
let cursorTrail = [];
document.addEventListener('mousemove', (e) => {
    if (cursorTrail.length > 10) {
        const old = cursorTrail.shift();
        old.remove();
    }
    const dot = document.createElement('div');
    dot.style.position = 'fixed';
    dot.style.width = '3px';
    dot.style.height = '3px';
    dot.style.background = '#00ff41';
    dot.style.borderRadius = '50%';
    dot.style.pointerEvents = 'none';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.zIndex = '999';
    dot.style.opacity = '0.5';
    dot.style.transition = 'opacity 0.5s ease';
    document.body.appendChild(dot);
    cursorTrail.push(dot);
    setTimeout(() => {
        dot.style.opacity = '0';
    }, 10);
});
// Console easter egg
console.log('%c> florex.init()', 'color: #00ff41; font-size: 16px; font-weight: bold;');
console.log('%c> System ready...', 'color: #00ff41; font-size: 12px;');
console.log('%c> Type "help" for available commands', 'color: #00ff41; font-size: 12px; opacity: 0.7;');

// Add help command
window.help = () => {
    console.log('%cAvailable commands:', 'color: #00ff41; font-weight: bold;');
    console.log('%c- about(): Show info', 'color: #00ff41;');
    console.log('%c- skills(): List skills', 'color: #00ff41;');
    console.log('%c- contact(): Get contact info', 'color: #00ff41;');
};

window.about = () => {
    console.log('%cFlorex - Web & C# Developer', 'color: #00ff41; font-weight: bold;');
    console.log('%cLinux enthusiast | EndeavourOS | Arch btw', 'color: #00ff41;');
};

window.skills = () => {
    console.log('%cSkills: C#, .NET, ASP.NET, JavaScript, Linux, Bash, SQL', 'color: #00ff41;');
};

window.contact = () => {
    console.log('%cEmail: florex@example.com', 'color: #00ff41;');
    console.log('%cGitHub: github.com/florex', 'color: #00ff41;');
};