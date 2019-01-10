import React from 'react';
import { Helmet } from 'react-helmet';

const Head = props => {
  return (
    <Helmet>
      <html lang='en' dir='ltr' />
      <title>{props.title}</title>
      <meta name='description' content={props.social.twitter.card_description} />
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:url' content={'https://politico.com'} />
      <link rel='canonical' href={'https://politico.com'} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='og:type' content='article' />
      <meta property='twitter:site' content='@politico' />
      <meta property='twitter:creator' content='@politico' />
      <meta property='article:author' content='https://www.facebook.com/politico' />
      <meta property='fb:app_id' content='114037015331397' />
      <meta property='twitter:title' content={props.title} />
      <meta property='og:title' content={props.title} />
      <meta property='twitter:description' content={props.social.twitter.card_description} />
      <meta property='og:description' content={props.social.fbook.card_description} />
      <meta property='twitter:image' content={props.social.image.url} />
      <meta property='twitter:image:alt' content={props.title} />
      <meta property='og:image' content={props.social.image.url} />
      <meta property='og:image:type' content={props.social.image.type} />
      <meta property='og:image:width' content={props.social.image.width} />
      <meta property='og:image:height' content={props.social.image.height} />
      <link rel='stylesheet' type='text/css' href='https://www.politico.com/interactives/cdn/fonts/battletoads/icons/politico-battletoads-icons.min.css' />
      <link rel='stylesheet' href='https://use.typekit.net/ogn0czn.css' />
      <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/all.css' integrity='sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU' crossOrigin='anonymous' />
      <link rel='stylesheet' href='https://use.typekit.net/dsx2uhv.css' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      <link rel='stylesheet' type='text/css' href='https://www.politico.com/interactives/cdn/fonts/battletoads/icons/politico-battletoads-icons.min.css' />
      <script
        src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
        integrity='sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g='
        crossOrigin='anonymous' />
      <script>
        {`
            document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            var setNptTechAdblockerCookie = function(adblocker) {
                var d = new Date();
                d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000);
                document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
            };
            var script = document.createElement("script");
            script.setAttribute("async", true);
            script.setAttribute("src", "//www.npttech.com/advertising.js");
            script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
            document.getElementsByTagName("head")[0].appendChild(script);
            `}
      </script>
      <link rel='stylesheet' href='https://use.typekit.net/ogn0czn.css' />
      <script>{`try{Typekit.load({ async: true });}catch(e){}`}</script>
    </Helmet>
  );
};

Head.defaultProps = {
  title: '',
  social: {
    'fbook': {
      'card_title': '',
      'card_description': '',
    },
    'twitter': {
      'card_title': '',
      'share_tweet': '',
      'card_description': '',
    },
    'image': {
      'url': '',
      'alt': '<Text>',
      'type': 'image/jpeg',
      'width': '600',
      'height': '300',
    },
  },
};

export default Head;
