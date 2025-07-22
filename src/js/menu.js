document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.menu-overlay');

    toggle.addEventListener('click', function () {
        navLinks.classList.add('open');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', function () {
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.menu-overlay');

    toggle.addEventListener('click', function () {
        navLinks.classList.add('open');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', function () {
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
    });

    // Slide in Slogan after 1 second
    setTimeout(function () {
        document.querySelectorAll('.Slogan').forEach(function (el) {
            el.classList.add('slide-in');
        });
    }, 1000);
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.Slogan').forEach(function (el) {
        const text = el.textContent;
        el.textContent = '';
        let beforePipe = true;
        let wordIndex = 0;
        text.split(' ').forEach((word) => {
            if (word.includes('|')) {
                beforePipe = false;
                // Handle word before pipe
                const parts = word.split('|');
                if (parts[0]) {
                    const span = document.createElement('span');
                    span.textContent = parts[0];
                    span.className = 'slogan-word';
                    span.style.transitionDelay = (wordIndex * 0.5) + 's';
                    el.appendChild(span);
                    wordIndex++;
                }
                // Pipe symbol
                const pipeSpan = document.createElement('span');
                pipeSpan.textContent = '|';
                pipeSpan.className = 'slogan-pipe';
                el.appendChild(pipeSpan);
            } else if (beforePipe) {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.className = 'slogan-word';
                span.style.transitionDelay = (wordIndex * 0.5) + 's';
                el.appendChild(span);
                wordIndex++;
            } else {
                // Words after pipe (optional)
                const span = document.createElement('span');
                span.textContent = word + ' ';
                el.appendChild(span);
            }
        });
        setTimeout(() => {
            el.classList.add('slide-in');
        }, 1000);
    });
});