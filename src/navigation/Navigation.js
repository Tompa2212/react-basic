import "./navigation.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

function Navigation({ list }) {
  const [showLinks, setShowLinks] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleScroll = () => {
    const windowPosition = window.scrollY > 0;
    if (windowPosition) {
      setIsNavScrolled(true);
    } else {
      setIsNavScrolled(false);
    }
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header>
      <nav className={isNavScrolled ? "nav navigation-scrolled" : "nav"}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              testni zadatak
            </Link>
            <button className="nav__btn-toggle" onClick={toggleLinks}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li>
                <a href="#">Jedan</a>
              </li>
              <li>
                <a href="#">Dva</a>
              </li>
              <li>
                <a href="#">Tri</a>
              </li>
              <li>
                <a href="#">Četiri</a>
              </li>
              <li>
                <Link to="/lista">Lista({list.length})</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
