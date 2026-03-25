

/* ON PAGE LOAD*/
window.addEventListener('load', () => {


    document.documentElement.style.opacity = '1';
    document.body.style.opacity = '1';



    /* INTRO LOADER */
    const loader = document.getElementById('intro-loader');
    const alreadySeen = sessionStorage.getItem('introPlayed');

    if (alreadySeen) {
        // AlreadySeen so we skip
        loader.style.display = 'none';
    } 
    else {
        // First time playing
        setTimeout(() => {
            loader.classList.add('hide');
            sessionStorage.setItem('introPlayed', 'true');
        }, 3000);
    }
    

    /*FRAME DRAWING*/
    const path = document.querySelector('.frame-line');
    const perimeter = 400;

    function buildPath(progress){

        const p = Math.max(0, Math.min(400, progress)); // Force p to stay between 0 and 400

        let d ='M 0 0'; // Start point

        // Top Line (First one)
        if (p <= 100) { // If progress < to top line lengh we draw the top line and change direction
            d += ` L ${p} 0`;
            return d;
        }

        d += ' L 100 0'; // Add the top line to the path draw

        // Right Line
        if (p <= 200) { // If progress < to top line and right line lenght we draw the right line and change direction
            d += ` L 100 ${p - 100}`;
            return d;
        }

        d += ' L 100 100'; // Add the right line to the path draw 

        // Bottom Line
        if (p <= 300) {
            d += ` L ${100 - (p - 200)} 100`;
            return d;
        }

        d += ' L 0 100';

        // Left Line (Last one)
        if (p <= 400) {
            d += ` L 0 ${100 - (p - 300)}`;
            return d;
        }

        return d;
    }

    const duration = 1000;
    const start = performance.now();

    function drawFrame(now) {

        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        const progress = t * 400;

        path.setAttribute('d', buildPath(progress));

        if (t < 1) {
            requestAnimationFrame(drawFrame); // Recursive call
        }
    }

    requestAnimationFrame(drawFrame);
    //path.setAttribute('d', buildPath(200));


    /*PAGE FADE IN */

    const headerElement = document.querySelector('.page-header');

    const contentMask = document.querySelector('.content-mask');
    const leftBoxMask = document.querySelector('.left-box-mask');

    setTimeout(() => {

        headerElement.classList.add('open');
        
    }, 900);
    

    //Wait for the frame draw to finish
    setTimeout(() => {

        contentMask.classList.add('fade-in');
        leftBoxMask.classList.add('fade-in');

        
    }, 1500);

  
  

});
/*---------------END ON PAGE LOAD---------------------------*/





/* ON CLICKPAGE FADE OUT */
const transitionOverlay = document.getElementById('page-fade-out');
const links = document.querySelectorAll('a[href]');

links.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');

    const isInternalPage =
        href &&
        !href.startsWith('#') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:') &&
        !link.hasAttribute('target');

    if (!isInternalPage) return;

    event.preventDefault();
    transitionOverlay.classList.add('active');

    setTimeout(() => {
        window.location.href = href;
    }, 600);
  });
});
/*---------------END ON CLICK FADE OUT TO ANOTHER PAGE---------------------------*/






/* FOR MOBILE LAYOUT */

const header = document.querySelector('.page-header');

const aboutme = document.querySelector('#aboutme-scroll-box'); // Aboutme text scrool box
const projectslist = document.querySelector('.projects-scroll'); // Project list scroll box

const projectContent = document.querySelector('.sunder-page-content')

const isProjectPage = document.querySelector('.project-page')
const mediaQuery = window.matchMedia('(max-width: 768px)');

const navLinks = document.querySelectorAll('.nav-link');
const menuLink = document.querySelector('.open-menu');
/*var isHeaderClosed = false;*/



if (mediaQuery.matches){

    if (menuLink) {

        menuLink.addEventListener('click', () => {
            header.classList.remove('closed');
            header.classList.add('open'); /* A bit ugly but it's working */
        });
    }



    if(projectContent){

        projectContent.addEventListener('scroll', () => {

            if(projectContent.scrollTop > 150){
                header.classList.add('closed');
                header.classList.remove('open');
            }
            else{
                header.classList.remove('closed');
                header.classList.add('open');
            }  
        });
    }

    
    if(aboutme){

        aboutme.addEventListener('scroll', () => {

        if(aboutme.scrollTop > 20){
                header.classList.add('closed');
                header.classList.remove('open');
            }
            else{
                header.classList.remove('closed');
                header.classList.add('open');
            }

        });
    }

    if(projectslist){

        projectslist.addEventListener('scroll', () => {

        if(projectslist.scrollTop > 20){
                header.classList.add('closed');
                header.classList.remove('open');
            }
            else{
                header.classList.remove('closed');
                header.classList.add('open');
            }

        });
    }
    
}


/* OLD OPACITY SYSTEM */

/*function handleHeaderOpacity(scrollElement) {
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
}*/






/*const navLinks = document.querySelectorAll('.nav-link');
const menuLink = document.querySelector('.open-menu');*/

/*var isHeaderClosed = false;*/



// If we are on a project page, click on a link on the nav-list remove header.
/*
if (isProjectPage && mediaQuery.matches) {

    
    /*navLinks.forEach(link => {
        link.addEventListener('click', () => { 
            header.classList.add('closed');
            isHeaderClosed = true;
        } );

    });*/

    // Click on the menu button link to display header is there is a menulink button.
    /*
    if (menuLink) {

        menuLink.addEventListener('click', () => {
            header.classList.remove('closed');
            header.classList.add('open'); /* A bit ugly but it's working */
            /*
        });
    }


    
    projectContent.addEventListener('scroll', () => {

            if(projectContent.scrollTop > 150){
                header.classList.add('closed');
                header.classList.remove('open');
            }
            else{
                header.classList.remove('closed');
                header.classList.add('open');
            }  
    });

  
    

}
*/

/*console.log(navLinks);*/

