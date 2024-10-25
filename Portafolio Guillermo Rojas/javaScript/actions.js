document.getElementById('hamburger').addEventListener('click', function () {
    var menuContactContainer = document.querySelector('.menu-contact-container');

    menuContactContainer.classList.toggle('active');
});
// control the color of the nav items
const links = {
    '/pages/index.html': 'home',
    '/pages/about.html': 'about',
    '/pages/hard_skills.html': 'hard-skills',
    '/pages/soft_skills.html': 'soft-skills',
    '/pages/certificates.html': 'certificates',
    '/pages/contact.html': 'contact'
};

function markActiveLink() {
    const currentPath = window.location.pathname;

    if (links[currentPath]) {
        const activeLinkId = links[currentPath];
        document.getElementById(activeLinkId).classList.add('active');
        
        localStorage.setItem('activeLink', activeLinkId);
    }
}
function restoreActiveLink() {
    const activeLinkId = localStorage.getItem('activeLink');
    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add('active');
    }
}
function clearActiveLink() {
    const currentPath = window.location.pathname;
    if (!links[currentPath]) {
        localStorage.removeItem('activeLink');
    }
}

window.addEventListener('load', function () {
    markActiveLink();
    restoreActiveLink();
});

window.addEventListener('beforeunload', clearActiveLink);

//Control the color of the class contact

document.getElementById('contact').addEventListener('click', function () {
    this.classList.add('active')

    localStorage.setItem('contactClicked', 'true')
})

window.addEventListener('load', function() {
    if (localStorage.getItem('contactClicked') === 'true') {
        document.getElementById('contact').classList.add('active');
    }
});

window.addEventListener('beforeunload', function() {
    if (window.location.pathname === '/pages/contact.html') {
        localStorage.removeItem('contactClicked');
    }
});

// carousel action
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '/img/certificates/react.png',
        '/img/certificates/js.png',
        '/img/certificates/ingeniero_geologo.png',
        '/img/certificates/html__&__css.png',
        '/img/certificates/figma.png',
        '/img/certificates/diplomado.png'
    ];
    let currentIndex = 0;

    const imageElement = document.getElementById('carousel-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    if (imageElement && prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            updateImage();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            updateImage();
        });

        function updateImage() {
            imageElement.src = images[currentIndex];
        }
    } else {
        console.warn('Uno o más elementos del carrusel no existen en esta página.');
    }
});