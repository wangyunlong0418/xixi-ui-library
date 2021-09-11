function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Svg from "../Svg";

var Icon = function Icon(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 12.1757C15 13.8325 13.6569 15.1757 12 15.1757C10.3431 15.1757 9 13.8325 9 12.1757C9 10.5188 10.3431 9.17566 12 9.17566C13.6569 9.17566 15 10.5188 15 12.1757Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.83 4.17566H20C21.1 4.17566 22 5.07566 22 6.17566V18.1757C22 19.2757 21.1 20.1757 20 20.1757H4C2.9 20.1757 2 19.2757 2 18.1757V6.17566C2 5.07566 2.9 4.17566 4 4.17566H7.17L8.4 2.82566C8.78 2.41566 9.32 2.17566 9.88 2.17566H14.12C14.68 2.17566 15.22 2.41566 15.59 2.82566L16.83 4.17566ZM7 12.1757C7 14.9357 9.24 17.1757 12 17.1757C14.76 17.1757 17 14.9357 17 12.1757C17 9.41566 14.76 7.17566 12 7.17566C9.24 7.17566 7 9.41566 7 12.1757Z"
  }));
};

export default Icon;