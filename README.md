![POLITICO](https://rawgithub.com/The-Politico/src/master/images/logo/badge.png)

# politico-style

Web fashions by POLITICO interatives.

### Using in your project

1. Install the module:
  ```
  $ yarn add politico-style
  ```
2. Use SASS imports to include styles in your project.

  Include an entire theme:

  ```scss
  @import '../../node_modules/politico-style/scss/base/theme';
  ```

  Include parts of a theme:

  ```scss
  @import '../../node_modules/politico-style/scss/base/components/header';
  @import '../../node_modules/politico-style/scss/base/components/footer';
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
