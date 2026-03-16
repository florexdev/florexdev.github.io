document.addEventListener('DOMContentLoaded', () => {
    const state = {
        currentDir: '~',
        lines: [],
        commandHistory: [],
        historyIndex: -1,
        fileSystem: {
            '~': {
                'projects': ['portfolio.txt (This Site),  MiniBank API' ],
                'about.txt': 'Burak Özdemir - Web Programcısı Adayı. Linux ricing tutkunu.',
                'contact.txt': 'Email: bburakozdemir01@gmail.com'
            }
        }
    };

    const outputDiv = document.getElementById('output');
    const inputField = document.getElementById('command-input');
    const terminalBody = document.getElementById('terminal-body');

    // --- Fastfetch (Startup) ---
    function getFastfetch() {
        const logo = ``;
        return `
        <div class="d-flex gap-4 flex-column flex-md-row mb-4">
            <div class="text-white small">
                <div class="text-primary fw-bold">florex@archlinux</div>
                <div class="text-muted">-----------------</div>
                <div><span class="text-primary">OS:</span> Arch Linux x86_64</div>
                <div><span class="text-primary">Host:</span> Casper Excalibur G870 (i5-12450H)</div>
                <div><span class="text-primary">DE:</span> KDE Plasma (Wayland)</div>
                <div><span class="text-primary">Shell:</span> zsh </div>
                <div>Type <span class="text-primary">help</span> for available commands</div>
            </div>
        </div>`;
    }

    // --- Command Handler ---
    function handleCommand(cmd) {
        const cleanCmd = cmd.trim().toLowerCase();
        if (cleanCmd) {
            state.lines.push({ text: `<span class="text-success">➜</span> <span class="text-primary">${state.currentDir}</span> $ ${cmd}`, isHtml: true });
            state.commandHistory.push(cmd);
            state.historyIndex = state.commandHistory.length;
        }

        switch (cleanCmd) {
            case 'help':
                print("available commands: whoami, skills, education, experience, projects, contact, ls, clear, fastfetch");
                break;
            case 'whoami':
                print("Burak Özdemir. Bilecik Şeyh Edebali Üniversitesinde okuyan bir yazılım geliştirici adayıyım.");
                break;
            case 'skills':
                print("Teknik Beceriler:\n- C# & .NET\n- Python\n- JavaScript & HTML/CSS\n- Linux Sistem Yönetimi");
                break;
            case 'education':
                print("• Bilecik Şeyh Edebali Üniversitesi - Bilgisayar Programcılığı\n• Öztimurlar MTAL - Bilişim Teknolojileri (GPA: 2.83)");
                break;
            case 'experience':
                print("Marsala Textile - BT ve Donanım Stajyeri (2024-2025)\n- Donanım bakımı, arıza tespiti ve ağ altyapı desteği.");
                break;
            case 'projects':
                print("• Web (Frontend) Projesi — DevFolio \n• C# Projesi — MiniBank API.");
                break;
            case 'contact':
                print("📧 Email: bburakozdemir01@gmail.com\n🔗 GitHub: github.com/florexdev");
                break;
            case 'ls':
                print("about.txt  contact.txt  <span class='text-primary'>projects/</span>", true);
                break;
            case 'clear':
                state.lines = [];
                outputDiv.innerHTML = '';
                return;
            case 'fastfetch':
                print(getFastfetch(), true);
                break;
            default:
                if (cleanCmd) print(`Komut bulunamadı: ${cmd}. Yardım için 'help' yazın.`, false, 'text-danger');
        }
    }

    function print(text, isHtml = false, className = '') {
        state.lines.push({ text, isHtml, className });
        const div = document.createElement('div');
        div.className = className || 'mb-1 whitespace-pre-wrap';
        if (isHtml) div.innerHTML = text;
        else div.textContent = text;
        outputDiv.appendChild(div);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // Başlangıç
    print(getFastfetch(), true);

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleCommand(inputField.value);
            inputField.value = '';
        }
    });

    // Star Background Init
    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = Array(200).fill().map(() => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5 }));
    
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        stars.forEach(s => {
            ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
            s.y += 0.2; if (s.y > canvas.height) s.y = 0;
        });
        requestAnimationFrame(drawStars);
    }
    drawStars();
});
