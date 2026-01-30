const portfolioProjects = [
  {
    title: "MAJU CAREER PORTAL | Job Management System",
    frontImage: "./Assets/images/career.png",
    backImages: ["./Assets/images/career copy.png", "./Assets/images/career_admin.png"],
    description: "Built a complete HR portal for M.A.J. University. Implemented OAuth-based userlogin for secure authentication. Also have a automated Admin Panel to manage candidate applications, shortlist orreject candidates, and trigger automated email notifications.",
    link: "https://career.maju.edu.pk",
    skills: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"]
  },
  {
    title: "CSPD MAJU PORTAL | Skills & Program Management System",
    frontImage: "./Assets/images/cspd copy.png",
    backImages: ["./Assets/images/cspd_web.png", "./Assets/images/cspd_admin.png"],
    description: "Developed the official CSPD portal for M.A.J University. Built an Admin Panel to manage skill programs and academic content. Implemented a React.js frontend integrated with a Laravel RESTful backend API for dynamic and responsive functionality.",
    link: "https://cspd.maju.edu.pk",
    skills: ["React.js", "JavaScript", "Laravel", "RESTful APIs", "MySQL"]
  },
  {
    title: "MAJU FINAL YEAR PROJECTS | FYP Management System",
    frontImage: "./Assets/images/fyp.png",
    backImage: "./Assets/images/fyp_model.png",
    description: "Built a centralized system to manage and showcase student FYPs. Admin panel for managing faculties, programs, semesters, and projects. Supports CSV uploads and data visualization.",
    link: "https://fyp.maju.edu.pk",
    skills: ["PHP", "MySQL", "JavaScript", "Chart.js"]
  },
  {
    title: "FYP Admin Panel",
    frontImage: "./Assets/images/fyp_admin_full.png",
    backImage: "./Assets/images/fyp_admin_full.png",
    description: "Built a centralized system to manage and showcase student FYPs. Admin panel for managing faculties, programs, semesters, and projects. Supports CSV uploads and data visualization.",
    link: "https://fyp.maju.edu.pk",
    skills: ["Chart.js", "PHP", "MySQL", "JavaScript"]
  },
  {
    title: "Agence WooJoh",
    frontImage: "/Assets/images/agence-woojoh.com.jpg",
    backImage: "Assets/images/agence-woojoh.com.jpg", // Same image or another if you want
    description: "Driven by a love of cinema, and motivated by the dynamism of the audiovisual landscape and the emergence of new talents, we founded the Wojooh agency to increase our participation in the development of the Algerian cultural sector.",
    link: "https://agence-wojooh.com/",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Design"]
  },
  {
    title: "Maju University Website",
    frontImage: "./Assets/images/maju-edu-pk.png",
    backImage: "./Assets/images/maju-edu-pk-.jpg",
    description: "Maju website used only internally on MAJU for students.",
    link: "https://maju.edu.pk",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"]
  },

];



// Select all portfolio cards
const portfolioCards = document.querySelectorAll(".projects-card");

// Attach click events to each card
portfolioCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    showPortfolioModal(index);
  });
});

// Function to show modal for portfolio projects
function showPortfolioModal(index) {
  const project = portfolioProjects[index];

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.description;
  document.getElementById("modal-link").href = project.link;
  document.getElementById("modal-link").textContent = project.title;

  // Handle multiple images or single image
  const modalBody = document.querySelector(".modal-body");

  if (project.backImages && project.backImages.length > 0) {
    // Multiple images - display them vertically
    modalBody.innerHTML = project.backImages.map(imageSrc => `
      <img src="${imageSrc}" alt="${project.title}" class="modal-image">
    `).join('');
  } else {
    // Single image
    modalBody.innerHTML = `<img id="modal-image" src="${project.backImage}" alt="${project.title}" class="modal-image">`;
  }

  // Render skills
  const skillsContainer = document.getElementById("modal-skills");
  skillsContainer.innerHTML = project.skills.map(skill => `
    <span class="skill-badge">${skill}</span>
  `).join("");

  // Show modal
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal (already exists)
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside of it (already exists)
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}

const sliderContainer = document.getElementById("sliderContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Amount to scroll per click (adjust based on card width + gap)
const scrollAmount = 500;

prevBtn.addEventListener("click", () => {
  sliderContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});

nextBtn.addEventListener("click", () => {
  sliderContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});
