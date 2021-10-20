import { DefaultTheme } from 'styled-components';
import get from 'lodash/get'; // const getThemeValue = (path, fallback) => (theme = DefaultTheme) => get(theme, path, fallback);

var getThemeValue = function getThemeValue(path, fallback) {
  return function () {
    var theme =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : DefaultTheme;
    return get(theme, path, fallback);
  };
};

export default getThemeValue;
