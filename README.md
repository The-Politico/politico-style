![POLITICO](https://rawgithub.com/The-Politico/src/master/images/logo/badge.png)

# politico-style

Web fashions by POLITICO Interatives.

### Using in your project

Install the module.

```
$ yarn add politico-style
```

You can use SASS imports to include style rules in your project.

Include an entire theme:

```scss
@import '../../node_modules/politico-style/scss/base/theme';
```

Include parts of a theme:

```scss
@import '../../node_modules/politico-style/scss/base/components/header';
@import '../../node_modules/politico-style/scss/base/components/footer';
```

Better yet, you can import a theme into your scripts using Webpack's [sass-loader](https://github.com/webpack-contrib/sass-loader):

```JavaScript
import 'politico-style/scss/base/main.scss';
```

### Developing

```
$ yarn install
$ gulp
```

Once you're done:
```
$ yarn publish
```


### Cf.

- [politico-icons](https://github.com/The-Politico/politico-icons)
- [prismjs](http://prismjs.com/)
