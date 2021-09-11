import { DefaultTheme } from "styled-components";
import get from "lodash/get";


// const getThemeValue = (path, fallback) => (theme = DefaultTheme) => get(theme, path, fallback);

const getThemeValue = (path, fallback) => {
  return (theme = DefaultTheme) => {
    return get(theme, path, fallback)
  }
}

export default getThemeValue;
