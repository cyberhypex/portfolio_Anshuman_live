import React from "react";


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg w-100">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <span className="fw-bold d-lg-none me-3" style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", marginRight: "auto" }}>Anshuman Gogoi</span>
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
            {['About', 'Experience','Skills', 'Projects', 'Coding Profiles', 'Socials'].map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link text-black fw-medium" style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }} href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
