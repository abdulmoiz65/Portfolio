document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navList = document.getElementById('nav-list');
    const icon = hamburgerBtn.querySelector('ion-icon');

    hamburgerBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburgerBtn.classList.toggle('active'); // Toggle the active class on the button

        if (navList.classList.contains('active')) {
            icon.setAttribute('name', 'close-outline');
        } else {
            icon.setAttribute('name', 'menu-outline');
        }
    });
});

// scroll 

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('Navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('sticky');
        header.classList.remove('slow-transition');
      } else {
        header.classList.remove('sticky');
        header.classList.add('slow-transition');
      }
    });
  
    // Adjust scroll position on page load, in case user loads the page already scrolled
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    }
  });
  


// loader 
document.addEventListener("DOMContentLoaded", function() {
    // Show the loader when the DOM is fully loaded
    let preloader = document.getElementById("loader");
    preloader.style.display = "block";
});

window.addEventListener("load", function() {
    // Ensure the loader is shown for at least 2 seconds
    let preloader = document.getElementById("loader");
    let mainContent = document.getElementById("main-content");
    setTimeout(function() {
        preloader.style.display = "none";
        mainContent.style.display = "block";
    }, 1000); // 2 seconds
});