import React from "react";

function Footer() {

  var cYear = new Date ().getFullYear();
  return (
    <footer> 
     <p> Copyight@{cYear}</p>
    </footer>
  );
}

export default Footer;