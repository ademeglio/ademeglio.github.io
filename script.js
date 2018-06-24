// nav menu transition
function toggleMenu(menuContainer) {
    
    const growUp = document.querySelector('#main-nav');
    const growUpChild = growUp.querySelector('div');
    
    if (menuContainer.classList.contains('show')) {
        growUp.style.height = '0';
        menuContainer.classList.remove('show');
    }
    else {
        growUp.style.height = growUpChild.offsetHeight + 'px';
        menuContainer.classList.add('show');
    }
}