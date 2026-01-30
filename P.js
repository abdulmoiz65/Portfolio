const portfolioProjects = [
  {
    title: "MAJU CAREER PORTAL | Job Management System",
    frontImage: "./Assets/images/career.png",
    backImage: "./Assets/images/career.png",
    description: "Built a complete HR portal for M.A.J. University. Implemented OAuth-based userlogin for secure authentication. Also have a automated Admin Panel to manage candidate applications, shortlist orreject candidates, and trigger automated email notifications.",
    link: "https://career.maju.edu.pk",
    skills: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Agence WooJoh",
    frontImage: "/Assets/images/agence-woojoh.com.jpg",
    backImage: "Assets/images/agence-woojoh.com.jpg", // Same image or another if you want
    description: "A cutting-edge website design project for SyntherX's new product line.",
    link: "https://syntherx.com",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Design"]
  },
  {
    title: "Maju University Website",
    frontImage: "./Assets/images/maju-edu-pk.jpg",
    backImage: "./Assets/images/maju-edu-pk-.jpg",
    description: "Full-stack development for a modern software solutions agency.",
    link: "https://maju.edu.pk",
    skills: ["React", "Node.js", "API", "UX"]
  },
  {
    title: "Admin Portal",
    frontImage: "./images/portfolio-4.jpg",
    backImage: "./Assets/images/fyp_admin_full.png",
    description: "A UX/UI overhaul and branding revamp for a corporate admin system.",
    link: "https://syntherx.com",
    skills: ["Figma", "UX/UI", "Branding"]
  },
  {
    title: "E commerce",
    frontImage: "./images/portfolio-2.jpg",
    backImage: "./images/portfolio-2.jpg",
    description: "Design and implementation of an intuitive e-commerce experience.",
    link: "https://syntherx.com",
    skills: ["UX", "UI", "SEO", "Payment Integration"]
  },
  {
    title: "Design Zoom",
    frontImage: "./images/portfolio-2.jpg",
    backImage: "./images/portfolio-2.jpg",
    description: "SEO marketing and landing page optimization for Design Zoom.",
    link: "https://syntherx.com",
    skills: ["SEO", "Content Strategy", "Web Marketing"]
  }
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
  document.getElementById("modal-image").src = project.backImage;
  document.getElementById("modal-description").textContent = project.description;
  document.getElementById("modal-link").href = project.link;
  document.getElementById("modal-link").textContent = project.title;

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
