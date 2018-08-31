import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Instructions from './components/Instructions';
import TextInput from './components/TextInput';
import Select from './components/Select';
import Typeahead from './components/Typeahead';
import ImageUpload from './components/ImageUpload';
import Buttons from './components/Buttons';
import Filters from './components/Filters';
import Checkboxes from './components/Checkboxes';
import RadioButtons from './components/RadioButtons';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Nav />

    <article className='container'>
      <Header />
      <SearchBox />
      <Instructions />
      <TextInput />
      <Select />
      <Typeahead />
      <ImageUpload />
      <Buttons />
      <Filters />
      <Checkboxes />
      <RadioButtons />
    </article>

    <Footer />
  </div>
);

export default App;
