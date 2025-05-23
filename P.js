const portfolioProjects = [
    {
      title: "SyntherX",
      frontImage: "/images/portfolio-3.jpg",
      backImage: "/images/portfolio-3.jpg", // Same image or another if you want
      description: "A cutting-edge website design project for SyntherX's new product line.",
      link: "https://syntherx.com",
      skills: ["HTML", "CSS", "JavaScript", "Web Design"]
    },
    {
      title: "Software Agency",
      frontImage: "./images/portfolio-1.jpg",
      backImage: "./images/portfolio-1.jpg",
      description: "Full-stack development for a modern software solutions agency.",
      link: "https://syntherx.com",
      skills: ["React", "Node.js", "API", "UX"]
    },
    {
      title: "Admin Portal",
      frontImage: "./images/portfolio-4.jpg",
      backImage: "./images/portfolio-4.jpg",
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
const portfolioCards = document.querySelectorAll(".portfolio-card");

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
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}
