![POLITICO](https://rawgithub.com/The-Politico/src/master/images/logo/badge.png)

# politico-style

Web fashions by POLITICO Interatives.

### Using in your project

Install the module.

```
$ yarn add politico-style
```

##### Styles

Include an entire theme:

```scss
@import '../../node_modules/politico-style/scss/base/theme';
```

Include parts of a theme:

```scss
@import '../../node_modules/politico-style/scss/base/components/header';
@import '../../node_modules/politico-style/scss/base/components/footer';
```

Import a theme using Webpack's [sass-loader](https://github.com/webpack-contrib/sass-loader):

```JavaScript
import 'politico-style/scss/base/main.scss';
```

##### Components

```javascript
import { Sketch } from 'politico-style';

const { Nav } = Sketch;

const MyComponent = (<Nav appName='My new app' />);
```

### Developing

```
$ yarn install
$ npm start
```

Once you're done:
```
$ npm run build
```


### Cf.

- [politico-icons](https://github.com/The-Politico/politico-icons)
