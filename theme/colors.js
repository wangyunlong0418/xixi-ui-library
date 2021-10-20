function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

export var baseColors = {
  failure: '#ED4B9E',
  primary: '#1FC7D4',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  secondary: '#7645D9',
  success: '#31D0AA',
  warning: '#FFB237',
};
export var additionalColors = {
  binance: '#F0B90B',
  overlay: '#452a7a',
  gold: '#FFC700',
  silver: '#B2B2B2',
  bronze: '#E7974D',
};
export var lightColors = _objectSpread(
  _objectSpread(_objectSpread({}, baseColors), additionalColors),
  {},
  {
    background: '#FAF9FA',
    backgroundDisabled: '#E9EAEB',
    backgroundAlt: '#FFFFFF',
    cardBorder: '#E7E3EB',
    contrast: '#191326',
    dropdown: '#F6F6F6',
    dropdownDeep: '#EEEEEE',
    invertedContrast: '#FFFFFF',
    input: '#eeeaf4',
    inputSecondary: '#d7caec',
    tertiary: '#EFF4F5',
    text: '#280D5F',
    textDisabled: '#BDC2C4',
    textSubtle: '#7A6EAA',
    disabled: '#E9EAEB',
    gradients: {
      bubblegum: 'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
      inverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
      cardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
      blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
      violet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
      violetAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
      gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
    },
  },
);
export var darkColors = _objectSpread(
  _objectSpread(_objectSpread({}, baseColors), additionalColors),
  {},
  {
    secondary: '#9A6AFF',
    background: '#08060B',
    backgroundDisabled: '#3c3742',
    backgroundAlt: '#27262c',
    cardBorder: '#383241',
    contrast: '#FFFFFF',
    dropdown: '#1E1D20',
    dropdownDeep: '#100C18',
    invertedContrast: '#191326',
    input: '#372F47',
    inputSecondary: '#262130',
    primaryDark: '#0098A1',
    tertiary: '#353547',
    text: '#F4EEFF',
    textDisabled: '#666171',
    textSubtle: '#B8ADD2',
    disabled: '#524B63',
    gradients: {
      bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
      inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
      cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
      blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
      violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
      violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
      gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
    },
  },
);
