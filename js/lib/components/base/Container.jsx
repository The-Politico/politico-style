import {default as React, Fragment} from 'react';

import { Head, Navigation, Footer, Header, Ad } from './';

const Container = props => {
  const { meta, social, content } = props;

  return (
    <Fragment>
      <Head title={meta.pageName} social={social} />
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

      {props.children}
      <Footer />
    </Fragment>
  );
};

Container.defaultProps = {
  social: {},
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
  },
};

export default Container;
