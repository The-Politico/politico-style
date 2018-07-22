import React from 'react';

import Nav from './components/Nav';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Nav />

    <article>
      <Instructions />
    </article>

    <Footer />
  </div>
);

export default App;
