import React from "react";
import SwitchToggle from "react-switch";
import "./navbar.css";

function NavBar({ onToggleSwitch, checked }) {
  return (
    <header>
      <nav className="navbar">
        <div>
          <h2>ModeSwitch</h2>
        </div>
        <div>
          <SwitchToggle onChange={onToggleSwitch} checked={checked} />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
