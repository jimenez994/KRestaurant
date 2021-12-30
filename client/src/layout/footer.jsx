import React from "react";

const Footer = () => {

  const showCurrentYear = ()=> {
    return new Date().getFullYear();
}

  return (
    <footer style={{margin:'5rem auto 1rem'}}>
    <p><small> &copy;{showCurrentYear()} Khisko Restaurant</small></p>
  </footer>
  )
}

export default Footer