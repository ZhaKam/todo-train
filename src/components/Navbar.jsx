import React from "react";

import "./Navbar.scss"

export default function Navbar() {
  const handleClick = (event) => {
    event.preventDefault(); 
    console.log(`Clicked on ${event.currentTarget.textContent}`); 
  };

  return (
    <nav>
      <div className="nav-wrapper navbar blue">
        <a href="/" className="brand-logo"> 
          MERN Todo App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/" onClick={handleClick}>Войти</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}