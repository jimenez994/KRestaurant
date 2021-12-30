import { useLax } from "use-lax";
import React from "react";
import NavBar from "./components/navigation/NavBar/NavBar";
import Header from "./layout/header/header";
import Footer from "./layout/footer";
import AboutUs from "./layout/about-us/about-us";
import Menu from './layout/menu/menu';
import Ingredients from "./layout/ingredients/ingredients";
import Reservation from "./layout/reservation/reservation";
import Contact from "./layout/contact/contact"

function App() {
  useLax();
  return (
    <div id="main">
      <NavBar />
      <Header />
      <AboutUs />
      <Menu />
      <AboutUs />
      <Ingredients />
      <Reservation /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
