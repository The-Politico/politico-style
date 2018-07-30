import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Instructions from './components/Instructions';
import Buttons from './components/Buttons';
import Filters from './components/Filters';
import FilterList from './components/FilterList';
import Tags from './components/Tags';
import Checkboxes from './components/Checkboxes';
import RadioButtons from './components/RadioButtons';
import Forms from './components/Forms';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Nav />

    <article className='container'>
      <Header />
      <SearchBox />
      <Instructions />
      <Buttons />
      <Filters />
      <FilterList />
      <Tags />
      <Checkboxes />
      <RadioButtons />
      <Forms />
    </article>

    <Footer />
  </div>
);

export default App;
