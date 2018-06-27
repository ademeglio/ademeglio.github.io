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

// Close nav menu after clicking a selection
const mainLinks = document.querySelectorAll('#main-nav a');
const menuContainer = document.getElementById('menu-bars-container');
for (let link of mainLinks) {
  link.onclick = function() {
    toggleMenu(menuContainer);
  };
}

// otherInterests modal
function showModal() {
    const modal = document.getElementById('aside-modal');
    modal.classList.add('show');
  
    modal.onclick = closeModal;
  
    const modalContent = document.querySelector('#aside-modal > aside');
    modalContent.onclick = function(event) {
      console.log(event);
      event.stopPropagation();
    };
  }
  
  function closeModal() {
    const modal = document.getElementById('aside-modal');
    modal.classList.remove('show');
  }
  
  otherInterestsButton.onclick = showModal;