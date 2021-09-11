import { DefaultTheme } from "styled-components";

function get (source, path, defaultValue = undefined) {
  // 将数组格式的路径转化成dot格式的，再拆分成key数组
  // a[0].b -> a.0.b -> ['a', '0', 'b']
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let result = source
  for (const p of paths) {
    result = Object(result)[p] // null 与 undefined 取属性会报错, 用Object包装一下
    // if (result === undefined) {
    //    return defaultValue
    // }
  }
  return result || defaultValue
}


// const getThemeValue = (path, fallback) => (theme = DefaultTheme) => get(theme, path, fallback);

const getThemeValue = (path, fallback) => {
  return (theme = DefaultTheme) => {
    return get(theme, path, fallback)
  }
}

export default getThemeValue;
