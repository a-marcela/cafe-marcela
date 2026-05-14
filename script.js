window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('saindo');
        setTimeout(() => loader.remove(), 500);
    }, 800);
});
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
const botoesAdicionar = document.querySelectorAll('.btn-adicionar');

botoesAdicionar.forEach(btn => {
    btn.addEventListener('click', () => {
        const contador = btn.nextElementSibling;
        contador.textContent = parseInt(contador.textContent) + 1;
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => btn.style.transform = 'scale(1)', 150);
    });
});
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('fixo');
    } else {
        header.classList.remove('fixo');
    }
});