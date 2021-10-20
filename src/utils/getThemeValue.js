import get from 'lodash/get';
import light from '../theme/light';

const getThemeValue = (path, fallback) => {
  return (theme = {}) => {
    return get(theme, path, fallback);
  };
};

export default getThemeValue;

export const getDefaultTheme = (theme = {}) => {
  const realTheme = Object.keys(theme).length > 0 ? theme : light;
  return realTheme;
};
