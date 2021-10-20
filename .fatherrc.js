export default {
  target: 'browser',
  esm: {
    // rollup
    type: 'babel',
    // file: 'dist',
    minify: false, // 压缩文件
    importLibToEs: true,
  },
  entry: [
    'src/components/Button/index.js',
    'src/components/Container/index.js',
    'src/components/Dropdown/index.js',
    'src/components/Menu/index.js',
    'src/components/Overlay/index.js',
    'src/components/Skeleton/index.js',
    'src/components/Svg/index.js',
    'src/components/Text/index.js',
  ],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  extractCSS: true,
  lessInBabelMode: true,
  doc: {
    themeConfig: { mode: 'dark' },
    htmlContext: {
      body: {
        class: 'dark',
      },
    },
  },
  pkgs: [
    // 组件依赖构建顺序， 例如 a组件依赖于b组件，那么需要先编译 b,在编译a,则 这里可以控制组件编译顺序
  ],
};
