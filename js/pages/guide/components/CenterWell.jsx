import React from 'react';

import Welcome from './sections/Welcome';
import QuickStart from './sections/QuickStart';
import Accessibility from './sections/Accessibility';
import Breakpoints from './sections/Breakpoints';
import TheGrid from './sections/TheGrid';
import Layout from './sections/Layout';
import Fonts from './sections/Fonts';
import Header from './sections/Header';
import Subheds from './sections/Subheds';
import Paragraphs from './sections/Paragraphs';
import Alignment from './sections/Alignment';
import Colors from './sections/Colors';
import Icons from './sections/Icons';

const CenterWell = () => (
  <content>
    <Welcome />
    <QuickStart />
    <Accessibility />
    <Breakpoints />
    <TheGrid />
    <Layout />
    <Fonts />
    <Header />
    <Subheds />
    <Paragraphs />
    <Alignment />
    <Colors />
    <Icons />
  </content>
);

export default CenterWell;
