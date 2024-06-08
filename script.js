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
