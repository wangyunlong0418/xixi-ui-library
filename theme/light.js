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

// import { light as lightAlert } from "../components/Alert/theme";
// import { light as lightCard } from "../components/Card/theme";
// import { light as lightPancakeToggle } from "../components/PancakeToggle/theme";
// import { light as lightRadio } from "../components/Radio/theme";
// import { light as lightToggle } from "../components/Toggle/theme";
// import { light as lightTooltip } from "../components/Tooltip/theme";
// import { light as lightModal } from "../widgets/Modal/theme";
import base from './base';
import { lightColors } from './colors';

var lightTheme = _objectSpread(
  _objectSpread({}, base),
  {},
  {
    isDark: false,
    // alert: lightAlert,
    colors: lightColors,
    // card: lightCard,
    // toggle: lightToggle,
    nav: {
      background: lightColors.backgroundAlt,
    }, // modal: lightModal,
    // pancakeToggle: lightPancakeToggle,
    // radio: lightRadio,
    // tooltip: lightTooltip,
  },
);

export default lightTheme;
