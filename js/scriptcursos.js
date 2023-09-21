const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f0f0f0';
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = 'white';
    });
});
