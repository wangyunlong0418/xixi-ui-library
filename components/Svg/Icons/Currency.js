function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Svg from "../Svg";

var Icon = function Icon(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13 7C13 6.44772 12.5523 6 12 6C11.4478 6 11 6.44772 11 7V7.51206C9.97631 7.76875 9.16137 8.59434 8.94664 9.66796C8.60189 11.3917 9.92035 13 11.6783 13H12.7143C13.1483 13 13.5 13.3518 13.5 13.7857C13.5 14.2197 13.1483 14.5714 12.7143 14.5714H11.4947C11.3096 14.5714 11.1282 14.5201 10.9706 14.4231L10.5241 14.1483C10.0538 13.8589 9.43783 14.0055 9.14838 14.4759C8.85893 14.9463 9.00559 15.5622 9.47594 15.8517L9.92241 16.1264C10.2535 16.3302 10.6197 16.4668 11 16.5304V17C11 17.5523 11.4478 18 12 18C12.5523 18 13 17.5523 13 17V16.557C14.4043 16.4139 15.5 15.2278 15.5 13.7857C15.5 12.2472 14.2528 11 12.7143 11H11.6783C11.1824 11 10.8106 10.5464 10.9078 10.0602C10.9813 9.69293 11.3037 9.42857 11.6783 9.42857H12.2948C12.5269 9.42857 12.7494 9.52076 12.9135 9.68485L13.0786 9.84996C13.4692 10.2405 14.1023 10.2405 14.4929 9.84996C14.8834 9.45944 14.8834 8.82627 14.4929 8.43575L14.3278 8.27064C13.9582 7.90106 13.4983 7.64249 13 7.5164V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
  }));
};

export default Icon;