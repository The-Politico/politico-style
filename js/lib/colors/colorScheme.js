import hexRgb from 'hex-rgb';

/**
 * Create a color values object with hex value and two funcs
 * to return RGBA values as either a string or an array of values.
 *
 * @param  {Str} hex Hexadecimal color value.
 * @return {Object}     Color value.
 */
function createColorValues(hex) {
  return {
    hex,
    rgba: (alpha) => {
      const a = alpha || 255;
      const rgb = hexRgb(hex);
      return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${a})`;
    },
    rgbaArray: (alpha) => {
      const a = alpha || 255;
      const rgb = hexRgb(hex);
      return [
        rgb.red,
        rgb.green,
        rgb.blue,
        a,
      ];
    },
  };
}

/**
 * Convert kebob-case SCSS variable to camel-case prop.
 * @param  {Str} s
 * @return {Str}
 */
function camelCaser(s) {
  return s.replace('$', '')
    .replace(/-\w/g, m => m[1].toUpperCase());
}

/**
 * Separate variables into array of camel-cased props.
 * @param  {[type]} variables [description]
 * @return {[type]}           [description]
 */
function separateVariables(variables) {
  return variables.trim().split(' ').map(v => camelCaser(v));
}

function createColorAliasObjects(row) {
  const values = createColorValues(row.hex);
  const variables = separateVariables(row.variables);
  const objects = variables.map(v => {
    const colorObject = {};
    colorObject[v] = values;
    return colorObject;
  });
  return Object.assign({}, ...objects);
}

function createColorScheme(rows) {
  const aliasObjects = rows.map(row => createColorAliasObjects(row));
  const aliasScheme = Object.assign({}, ...aliasObjects);

  return Object.assign({}, aliasScheme, {
    all: rows.map(row =>
      Object.assign({
        variables: row.variables.trim(),
      }, createColorValues(row.hex))
    ),
  });
}

export default createColorScheme;
