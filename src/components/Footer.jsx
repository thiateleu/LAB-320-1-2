import React from"react";

function Footer() {
    return (
       <footer style={{paddingTop: "1rem", paddingBottom: "1rem",paddingLeft: "2rem", paddingRight: "2rem"}}>
        <nav aria-label="Footer Navigation" role="Navigation">
            <ul style={{ listStyleType: "none", padding:"o", display: "flex",justifyContent: "space-between"}}>
                <li><a href="#privacy" style={{color:"tomato"}}>Privacy</a></li>
                <li><a href="#terms" style={{color:"tomato"}}>Terms</a></li>
            </ul>
        </nav> 
       </footer>
    );
}
export default Footer;