import {default as React, Fragment} from 'react';

import { Head, Navigation, Footer, Header, Ad } from './';

const Container = props => {
  const { meta, content } = props;

  return (
    <Fragment>
      <Head title={meta.pageName} social={content.social} />
      <Navigation />
      <Ad.Banner />
      <Header
        headline={content.headline}
        deck={content.deck}
        section={content.section}
        authors={meta.authors}
        published={meta.published}
        updated={meta.updated}
      />

      <article className='container'>
        {props.children}
      </article>

      <Footer />
    </Fragment>
  );
};

Container.defaultProps = {
  meta: {
    pageName: '',
    authors: [],
    published: null,
    updated: null,
  },
  content: {
    headline: '',
    deck: '',
    section: '',
    social: {},
  },
};

export default Container;
