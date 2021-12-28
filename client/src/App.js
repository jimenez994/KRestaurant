import { useLax } from "use-lax";
import React from "react";
import NavBar from "./components/navigation/NavBar/NavBar";
import Header from "./layout/header";
import SectionOne from "./layout/sectionOne";
import Footer from "./layout/footer";

function App() {
  useLax();
  return (
    <div id="main">
      <NavBar />
      {/* <Header />
      <SectionOne />
      <SectionOne  />
      <SectionOne  />
      <SectionOne  />
      
      <Footer /> */}
    </div>
  );
}

export default App;
