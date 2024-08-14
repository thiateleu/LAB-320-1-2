import React from"react";

function Nav() {
    return (
       <nav aria-label="Main Nagivation" role="navigation">
        <ul style={{listStyleType: "none", padding: 0, display: "flex", justifyContent: "space-between"}}>
            <li><a href="#home" style={{ color: "lightgray"}}> Home</a></li>
            <li><a href="#about" style={{ color: "lightgray"}}> About</a></li>
            <li><a href="#contact" style={{ color: "lightgray"}}> Contact</a></li>
        </ul>
       </nav>
    );
}
export default Nav;