// jquery 
$(document).ready(function(){
  $('.tab-btn').on('click', function(){
    var target = $(this).data('tab-btn');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active');
    $('[data-tab-content="' + target + '"]').addClass('active');
  });
});



// JS 

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

//   cursor 
function updateCursorVisibility() {
  const cursor = document.querySelector('.custom-cursor');
  if (window.innerWidth <= 768) {
    cursor.style.display = 'none';
  } else {
    cursor.style.display = 'block';
  }
}

document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor || window.innerWidth <= 768) return;

  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;

  // Calculate the maximum allowed positions
  const maxX = document.documentElement.clientWidth - cursorWidth / 2;
  const maxY = document.documentElement.clientHeight + window.scrollY - cursorHeight / 2;

  // Clamp the cursor position within the allowed bounds
  const posX = Math.min(maxX, Math.max(cursorWidth / 2, e.pageX));
  const posY = Math.min(maxY, Math.max(cursorHeight / 2, e.pageY));

  cursor.style.transform = `translate(${posX - cursorWidth / 2}px, ${posY - cursorHeight / 2}px)`;

  // Get the element under the cursor
  const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

  // Check if the element has a black background
  const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;

  if (bgColor === 'rgb(0, 0, 0)') { // Check if the background color is black
    cursor.style.backgroundColor = 'white';
  } else {
    cursor.style.backgroundColor = 'black';
  }
});

// Run the function when the page loads and whenever the window is resized
window.addEventListener('load', updateCursorVisibility);
window.addEventListener('resize', updateCursorVisibility);


// Skills 
function toggleSkills(type) {
  var skillsList = document.getElementById('skills-list');
  var toolsList = document.getElementById('tools-list');
  var buttons = document.querySelectorAll('.toggle-btn');

  if (type === 'skills') {
    skillsList.style.display = 'flex';
    toolsList.style.display = 'none';
  } else {
    skillsList.style.display = 'none';
    toolsList.style.display = 'flex';
  }

  buttons.forEach(button => {
    if (button.innerText.toLowerCase() === type) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}





// project Section 
let projects = []; // Add this outside functions

// Function to fetch and render projects
async function fetchProjects() {
try {
  const response = await fetch('data.json'); // Adjust the path as needed
  projects = await response.json(); // Store the fetched projects globally
  
  const container = document.getElementById('projects-container');
  container.innerHTML = projects.map((project, index) => `
    <div class="col-lg-4">
      <div class="card-container" onclick="showModal(${index})">
        <div class="card">
          <div class="front">
            <img src="${project.frontImage}" alt="${project.title}" class="img-fluid">
          </div>
          <div class="back">
            <img src="${project.backImage}" alt="${project.title}" class="img-fluid">
            <h1 class="buy-button">${project.title}</h1>
          </div>
        </div>
      </div>
    </div>
  `).join('');
} catch (error) {
  console.error('Error fetching projects:', error);
}
}

// Function to show the modal
function showModal(index) {
const project = projects[index]; // Use the globally stored projects
document.getElementById('modal-title').textContent = project.title;
document.getElementById('modal-image').src = project.backImage;
document.getElementById('modal-description').textContent = project.description;
document.getElementById('modal-link').href = project.link;
document.getElementById('modal-link').textContent = project.title;

// Render skills
const skillsContainer = document.getElementById('modal-skills');
skillsContainer.innerHTML = project.skills.map(skill => `
  <span class="skill-badge">${skill}</span>
`).join('');

document.getElementById('myModal').style.display = 'block';
document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    closeModal();
  }
}

// Fetch projects on page load
window.onload = fetchProjects;



// ADWARDS MODEL 
function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function CloseModal() {
  document.getElementById("imgModal").style.display = "none";
}

// Attach click listeners to all images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".award-card img");
  images.forEach(img => {
    img.addEventListener("click", function () {
      openModal(this.src);
    });
  });

  // Close modal if clicked outside the image
  const modal = document.getElementById("imgModal");
  modal.addEventListener("click", function (event) {
    // If the clicked target is the modal background (not the image itself)
    if (event.target === modal) {
      CloseModal();
    }
  });
});


// loader 
// document.addEventListener("DOMContentLoaded", function() {

//     let preloader = document.getElementById("loader");
//     preloader.style.display = "block";
// });

// window.addEventListener("load", function() {
 
//     let preloader = document.getElementById("loader");
//     let mainContent = document.getElementById("main-content");
//     setTimeout(function() {
//         preloader.style.display = "none";
//         mainContent.style.display = "block";
//     }, 1000); 
// });