const heroImage = document.createElement('img');
heroImage.src = './images/hero.jpg';
heroImage.alt = 'Hero Image';
heroImage.style.width = '100%';
heroImage.style.height = 'auto';

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');
    heroSection.appendChild(heroImage);
    document.body.appendChild(heroSection);
});