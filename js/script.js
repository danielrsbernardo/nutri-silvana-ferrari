document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.section-content').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(this.getAttribute('href')).classList.add('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar a primeira seção (opcional)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.section-content').classList.add('active');
});
