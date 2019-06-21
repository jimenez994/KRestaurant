import React from 'react';
import { useLaxElement } from 'use-lax';

function Header() {
  const ref = useLaxElement();

  return (
    <div ref={ref} id="header" className="section">
      <img
        alt="Letter L"
        src="img/l.png"
        style={{
          width: '103pt',
          marginLeft: '26pt',
          marginBottom: '-4pt',
        }}
        data-lax-translate-x="0 0, vh 200"
      />
      <img alt="Letter A" src="img/a.png" data-lax-translate-x="0 0, vh -200" />
      <img alt="Letter X" src="img/x.png" data-lax-opacity="0 1, (0.8*vh) 0" />
      <img
        alt="Letter X"
        src="img/x.png"
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 200"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        alt="Letter X"
        src="img/x.png"
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 400"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        alt="Letter X"
        src="img/x.png"
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 600"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        alt="Letter X"
        src="img/x.png"
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 800"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <img
        alt="Letter X"
        src="img/x.png"
        style={{ marginTop: '-79pt' }}
        data-lax-translate-y="0 0, vh 1000"
        data-lax-opacity="0 1, (0.8*vh) 0"
      />
      <h2
        data-lax-scale="0 1, vh 0.2"
        data-lax-translate-y="0 0, vh 1200"
        data-lax-opacity="0 1, (vh*0.5) 0"
      >
        awesum scroll effects
      </h2>

      <h4 data-lax-opacity="0 1, (vh*0.05) 0">scroll down</h4>
      <i
        className="fas fa-chevron-down"
        data-lax-opacity="0 1, (vh*0.1) 0"
        data-lax-translate-y="0 0, 200 100"
      />
    </div>
  );
}

export default Header;
