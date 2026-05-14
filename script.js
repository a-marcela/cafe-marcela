const secoes = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
});

secoes.forEach(secao => observer.observe(secao));

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('aberto');
});
const temaBtn = document.querySelector('.tema-btn');

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    document.body.classList.add('dark');
    temaBtn.textContent = '☀️';
}

temaBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        temaBtn.textContent = '☀️';
        localStorage.setItem('tema', 'dark');
    } else {
        temaBtn.textContent = '🌙';
        localStorage.setItem('tema', 'light');
    }
});
