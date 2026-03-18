
const header = document.querySelector('.page-header');
const aboutme = document.querySelector('#aboutme-scroll-box');
const projects = document.querySelector('.projects-scroll');

const mediaQuery = window.matchMedia('(max-width: 768px)');



function handleHeaderOpacity(scrollElement) {
    if (!mediaQuery.matches) return;

    const scrollTop = scrollElement.scrollTop;
    const maxScroll = 400;

    let opacity = 1 - scrollTop / maxScroll;
    opacity = Math.max(0, Math.min(1, opacity));

    header.style.opacity = opacity;
}

aboutme.addEventListener('scroll', () => {
    handleHeaderOpacity(aboutme);
});

projects.addEventListener('scroll', () => {
    handleHeaderOpacity(projects);
});