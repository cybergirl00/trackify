import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import mainlogo from "../../../../assets/image/whitemainlogo.png";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false); // Close the navbar when a link is clicked
  };

  const handleLogout = () => {
    localStorage.clear('userId')
   window.location.reload(false)
  }

  const [activeLinkId, setActiveLinkId] = useState(null);

  useEffect(() => {
    // Access nav__link elements using refs
    const navLinks = document.querySelectorAll(".nav__link");

    if (navLinks) {
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          // Deactivate all links
          navLinks.forEach((otherLink) => otherLink.classList.remove("active"));

          // Activate the clicked link
          link.classList.add("active");

          // Update state for potential external usage
          setActiveLinkId(link.id);
        });
      });
    }
  }, []);

  return (
    <div id="body-pd"   className={`nav-mainbody ${isNavbarOpen ? "body-pd" : ""}`}>
      <header className={`header ${isNavbarOpen ? "body-pd" : ""}`} id="header">
        <div className="header__toggle" onClick={toggleNavbar}>
          <i
            className={`bx ${isNavbarOpen ? "bx-x" : "bx-menu"}`}
            id="header-toggle"
          ></i>
        </div>
        <div className="header-right">
          
          <div className="header-icon">
            <i className="bx bxs-bell "></i>

          </div>

          <div className="header__img">
            <i className="bx bx-user "></i>

          </div>


        </div>
      </header>

      <div className={`l-navbar ${isNavbarOpen ? "show" : ""}`} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="/" className="nav__logo">
              {/* <i className='bx bx-layer nav__logo-icon'></i> */}
              <img src={mainlogo} alt="" className="nav__logo-icon" />
              <span className="nav__logo-name">TRACKIFY</span>
            </a>

            <div className="nav__list">
              <a
                href="/"
                className="nav__link active"
                onClick={handleLinkClick}
              >
                <i className="bx bx-grid-alt nav__icon"></i>
                <span className="nav__name">Dashboard</span>
              </a>

              <a
                href="/profile"
                className="nav__link"
                onClick={handleLinkClick}
              >
                <i className="bx bx-user nav__icon"></i>
                <span className="nav__name">Profile</span>
              </a>

              <a href="#" className="nav__link" onClick={handleLinkClick}>
                <i className="bx bx-cog nav__icon"></i>
                <span className="nav__name">Setting</span>
              </a>

              <a href="/help" className="nav__link" onClick={handleLinkClick}>
                <i className="bx bx-help-circle nav__icon"></i>
                <span className="nav__name">Help</span>
              </a>

              <a href="#" className="nav__link" onClick={handleLinkClick}>
                <i className="bx bx-support nav__icon"></i>
                <span className="nav__name">Support</span>
              </a>

             
            </div>
          </div>

          <a href="/" className="nav__link"
          onClick={handleLogout}
          
          >
            <i className="bx bx-log-out nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
