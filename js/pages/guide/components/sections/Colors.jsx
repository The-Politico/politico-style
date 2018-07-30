import React from 'react';
import WorkingWithColors from './colors/WorkingWith';
import BrandColors from './colors/Brand';
import BaseColors from './colors/Base';
import ElectionColors from './colors/Election';
import QualitativeColors from './colors/Qualitative';
import DivergingColors from './colors/Diverging';
import SequentialColors from './colors/Sequential';

const Colors = () => {
  return (
    <section className='border-bottom'>
      <section>
        <h3>Colors!</h3>
        <p> All colors have been tested for accessibility. Let these be your jumping off point for maps, graphics and otherwise.</p>
      </section>

      <BrandColors />
      <BaseColors />
      <ElectionColors />
      <QualitativeColors />
      <DivergingColors />
      <SequentialColors />

      <WorkingWithColors />

    </section>
  );
};

export default Colors;
