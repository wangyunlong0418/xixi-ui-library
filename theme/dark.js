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

// import { dark as darkAlert } from "../components/Alert/theme";
// import { dark as darkCard } from "../components/Card/theme";
// import { dark as darkPancakeToggle } from "../components/PancakeToggle/theme";
// import { dark as darkRadio } from "../components/Radio/theme";
// import { dark as darkToggle } from "../components/Toggle/theme";
// import { dark as darkModal } from "../widgets/Modal/theme";
// import { dark as darkTooltip } from "../components/Tooltip/theme";
import base from './base';
import { darkColors } from './colors';

var darkTheme = _objectSpread(
  _objectSpread({}, base),
  {},
  {
    isDark: true,
    // alert: darkAlert,
    colors: darkColors,
    // card: darkCard,
    // toggle: darkToggle,
    nav: {
      background: darkColors.backgroundAlt,
    }, // modal: darkModal,
    // pancakeToggle: darkPancakeToggle,
    // radio: darkRadio,
    // tooltip: darkTooltip,
  },
);

export default darkTheme;
