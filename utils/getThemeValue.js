import get from 'lodash/get';
import light from '../theme/light';

var getThemeValue = function getThemeValue(path, fallback) {
  return function () {
    var theme =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return get(theme, path, fallback);
  };
};

export default getThemeValue;
export var getDefaultTheme = function getDefaultTheme() {
  var theme =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var realTheme = Object.keys(theme).length > 0 ? theme : light;
  return realTheme;
};
