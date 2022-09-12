import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return <footer>
    <p>&copy; Jacob Harris {year}</p>
  </footer>
}

export default Footer;