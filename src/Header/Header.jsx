import React from "react";

export default function Header() {
  
  const handleNavLinkClick = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor behavior
    
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const isMobile = window.innerWidth < 992; // Detect mobile mode

      const extraSpacing = isMobile ? 30 : 10; // More spacing for mobile
      const sectionPosition = section.offsetTop - navbarHeight - extraSpacing;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });

      // ✅ Update URL without reloading the page
      window.history.pushState(null, "", `/${sectionId}`);
    }

    // Close mobile navbar after clicking
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");
    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <span className="fw-bold d-lg-none me-3" style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", marginRight: "auto" }}>
          Anshuman Gogoi
        </span>
        <button
          className="navbar-toggler ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ fontSize: "0.8rem" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3 text-center">
            {[
              { name: "About", id: "about" },
              { name: "Experience", id: "experience" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Coding Profiles", id: "coding-profiles" },
              { name: "Socials", id: "socials" }
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a 
                  className="nav-link text-black fw-medium" 
                  style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }} 
                  href={`/${item.id}`} 
                  onClick={(event) => handleNavLinkClick(event, item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Open Resume Directly */}
            <li className="nav-item">
              <a 
                className="nav-link text-black fw-medium" 
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }} 
                href="https://drive.google.com/file/d/1NvuO_ZAtGZ7rpI_ZZJorDzUTuhmSZ-yf/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  const navbarToggler = document.querySelector(".navbar-toggler");
                  const navbarCollapse = document.querySelector("#navbarNav");
                  if (navbarToggler && navbarCollapse.classList.contains("show")) {
                    navbarToggler.click();
                  }
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
