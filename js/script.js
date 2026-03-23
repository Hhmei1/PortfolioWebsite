
/* Homepage header opacity fade effect for mobile layout */

const header = document.querySelector('.page-header');
const aboutme = document.querySelector('#aboutme-scroll-box');
const projects = document.querySelector('.projects-scroll');



const isProjectPage = document.querySelector('.project-page')
const projectContent = document.querySelector('.sunder-page-content')

const mediaQuery = window.matchMedia('(max-width: 768px)');



function handleHeaderOpacity(scrollElement) {
    if (!mediaQuery.matches) return;
    

    const scrollTop = scrollElement.scrollTop;
    const maxScroll = 400;

    let opacity = 1 - scrollTop / maxScroll;
    opacity = Math.max(0.3, Math.min(1, opacity));

    header.style.opacity = opacity;
}

if (aboutme) {

    aboutme.addEventListener('scroll', () => {
    handleHeaderOpacity(aboutme);

  });
}

if (projects) {
    projects.addEventListener('scroll', () => {
    handleHeaderOpacity(projects);
});
}






const navLinks = document.querySelectorAll('.nav-link');
const menuLink = document.querySelector('.open-menu');
var isHeaderClosed = false;



// If we are on a project page, click on a link on the nav-list remove header.
if (isProjectPage) {

    
    /*navLinks.forEach(link => {
        link.addEventListener('click', () => { 
            header.classList.add('closed');
            isHeaderClosed = true;
        } );

    });*/

    // Click on the menu button link to display header is there is a menulink button.
    if (menuLink) {

        menuLink.addEventListener('click', () => {
            header.classList.remove('closed');
        });
    }


    
    projectContent.addEventListener('scroll', () => {

            if(projectContent.scrollTop > 150){
                header.classList.add('closed');
            }
            else{
                header.classList.remove('closed');
            }  
    });

  
    

}

/*console.log(navLinks);*/