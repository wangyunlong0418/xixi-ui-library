function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useEffect, useState } from "react";
import { breakpointMap } from "../theme/base";
/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */

var mediaQueries = function () {
  var prevMinWidth = 0;
  return Object.keys(breakpointMap).reduce(function (accum, size, index) {
    // Largest size is just a min-width of second highest max-width
    if (index === Object.keys(breakpointMap).length - 1) {
      return _objectSpread(_objectSpread({}, accum), {}, _defineProperty({}, size, "(min-width: ".concat(prevMinWidth, "px)")));
    }

    var minWidth = prevMinWidth;
    var breakpoint = breakpointMap[size]; // Min width for next iteration

    prevMinWidth = breakpoint + 1;
    return _objectSpread(_objectSpread({}, accum), {}, _defineProperty({}, size, "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(breakpoint, "px)")));
  }, {});
}();

var getKey = function getKey(size) {
  return "is".concat(size.charAt(0).toUpperCase()).concat(size.slice(1));
};

var useMatchBreakpoints = function useMatchBreakpoints() {
  var _useState = useState(function () {
    return Object.keys(mediaQueries).reduce(function (accum, size) {
      var key = getKey(size);
      var mql = window.matchMedia(mediaQueries[size]);
      return _objectSpread(_objectSpread({}, accum), {}, _defineProperty({}, key, mql.matches));
    }, {});
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    // Create listeners for each media query returning a function to unsubscribe
    var handlers = Object.keys(mediaQueries).map(function (size) {
      var mql = window.matchMedia(mediaQueries[size]);

      var handler = function handler(matchMediaQuery) {
        var key = getKey(size);
        setState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, key, matchMediaQuery.matches));
        });
      }; // Safari < 14 fix


      if (mql.addEventListener) {
        mql.addEventListener("change", handler);
      }

      return function () {
        // Safari < 14 fix
        if (mql.removeEventListener) {
          mql.removeEventListener("change", handler);
        }
      };
    });
    return function () {
      handlers.forEach(function (unsubscribe) {
        unsubscribe();
      });
    };
  }, [setState]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isMobile: state.isXs || state.isSm,
    isTablet: state.isMd || state.isLg,
    isDesktop: state.isXl || state.isXxl
  });
};

export default useMatchBreakpoints;