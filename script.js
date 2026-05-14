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
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const mensagem = document.querySelector('#mensagem');
    
    let valido = true;
    
    [nome, email, mensagem].forEach(campo => campo.classList.remove('erro'));
    
    if (nome.value.trim() === '') {
        nome.classList.add('erro');
        valido = false;
    }
    
    if (!email.value.includes('@')) {
        email.classList.add('erro');
        valido = false;
    }
    
    if (mensagem.value.trim().length < 10) {
        mensagem.classList.add('erro');
        valido = false;
    }
    
    if (valido) {
        alert('Mensagem enviada! Obrigada 🎉');
        formulario.reset();
    }
});