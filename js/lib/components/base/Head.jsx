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
      <meta property='og:url' content={`https://politico.com/${props.publishPath}`} />
      <link rel='canonical' href={`https://politico.com/${props.publishPath}`} />
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
      <script>
        {`// UTag Setup Script
          function get (obj, key, def) {
            if (obj.hasOwnProperty(key)) {
              return obj[key];
            } else {
              return def;
            }
          }

          function makeBylines (authors) {
            if (authors.length === 1) {
              return authors[0];
            } else if (authors.length === 0) {
              return null;
            }

            var output = authors.slice();
            var lastAuthor = output.pop();
            var secondToLastAuthor = output.pop();

            var commaAuthors = output.length > 0 ? output.join(', ') + ', ' : '';

            return commaAuthors + secondToLastAuthor + ' and ' + lastAuthor;
          }

          function setupUtag () {
            var conf = window.pibOptions;

            if (!window.pibOptions) {
              return;
            }

            const authors = get(conf, 'authors', []).map(function (a) {
              if (typeof a === 'string') {
                return a;
              } else if (typeof a === 'object' && 'name' in a) {
                return a.name;
              } else {
                return '';
              }
            });

            // Set up utag variables from project package.json
            window.utag_data = {
              'page_level_1': 'interactives',
              'free_paid_content': get(conf, 'freePaidContent', null),
              'ad_unit_section': get(conf, 'adUnitSection', null),
              'site_section': get(conf, 'siteSection', null),
              'page_type': get(conf, 'pageType', null),
              'site_domain': 'www.politico.com',
              'internal_site_id': 'politico',
              'page_name': get(conf, 'pageName', null),
              'content_author': authors.join('|'),
              'content_byline': 'By ' + makeBylines(authors),
              'enable_prebid': true,
            };

            // load the utag script
            (function (a, b, c, d) {
              a = '//tags.tiqcdn.com/utag/politico/main/prod/utag.js';
              b = document; c = 'script'; d = b.createElement(c); d.src = a;
              d.type = 'text/java' + c;
              d.async = true;
              a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
            })();

            // responsive ad script
            !(function (a) { var b = function () { var a = document.createElement('p'); a.style.width = '100%', a.style.height = '200px'; var b = document.createElement('div'); b.style.position = 'absolute', b.style.top = '0px', b.style.left = '0px', b.style.visibility = 'hidden', b.style.width = '200px', b.style.height = '150px', b.style.overflow = 'hidden', b.appendChild(a), document.body.appendChild(b); var c = a.offsetWidth; b.style.overflow = 'scroll'; var d = a.offsetWidth; return c === d && (d = b.clientWidth), document.body.removeChild(b), c - d; }; var c = function () { typeof googletag !== 'undefined' && googletag.cmd.push(function () { googletag.pubads().refresh(); }); }; var d = function () { var a = 'alpha'; return i >= 748 && i < 990 ? a = 'beta' : i >= 990 && i < l ? a = 'gamma' : i >= l && i < 1028 ? a = 'delta' : i >= 1028 && (a = 'epsilon'), a != 'epsilon' && a != 'delta' && (jQuery('.global-utility-bar .reveal-toggle .reveal').removeClass('is-active'), jQuery('.utility-bar-bottom').removeClass('is-active'), jQuery('.dynamic-ad-wrapper .ad-slot').remove(), jQuery('.global-utility-bar .dynamic-ad-wrapper').html('')), a; }; var e = {currentAdThreshold: ''}; var f = function () { var a = d(); e.currentAdThreshold !== a && (e.currentAdThreshold = a, c()); }; var g = function () { e.currentAdThreshold = d(); }; a(window).on('resize', function () { i = document.documentElement.clientWidth + h, f(); }); var h = b(); var i = document.documentElement.clientWidth + h; var l = 1012; g(); }(jQuery));  //
          };

          function loadUtag(){
            var loadMax = 5000;
            var loadCount = 0;
            var loadInterval = 300;
            var utagLoader = window.setInterval(function(){
              if(window.jQuery){
                setupUtag();
                window.clearInterval(utagLoader);
              } else {
                loadCount = loadCount + 1;
              }

              if(loadCount * loadInterval > loadMax){
                window.clearInterval(utagLoader);
              }
            }, loadInterval)
          }

          // Cross-Browser Ready Script
          if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
            loadUtag();
          } else {
            document.addEventListener('DOMContentLoaded', loadUtag);
          }
        `}
      </script>
      <script>
        {`// Facebook Comments Script
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=178201668917374";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}
      </script>
      { props.children }
    </Helmet>
  );
};

Head.defaultProps = {
  title: '',
  publihshPath: '',
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
