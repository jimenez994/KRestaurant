import { useLax } from 'use-lax';
import React from 'react';
import Header from './Header';
import SectionOne from './SectionOne';
// import SectionTwo from './SectionTwo';
// import SectionThree from './SectionThree';

function App() {
  useLax();

  return (
    <div id="main">
      <Header />
      <SectionOne />
      {/* <SectionTwo />
      <SectionThree /> */}
    </div>
  );
}

export default App;
