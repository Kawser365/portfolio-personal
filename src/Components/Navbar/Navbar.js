import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
          <nav class="navbar navbar-expand-lg fixed-top nav">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"> <span style={{color:'black'}}><h2>KHK</h2></span> </a>
              <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  <Link class="nav-link text-dark" to="/">HOME</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link text-dark" to="/about">ABOUT</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link text-dark" to="/projects">PROJECTS</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link text-dark" to="/blog">BLOG</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link text-dark" to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>  
        </div>
    );
};

export default Navbar;