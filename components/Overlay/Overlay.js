import styled from "styled-components";
var Overlay = styled.div.attrs({
  role: "presentation"
}) > "\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ".concat(function (_ref) {
  var theme = _ref.theme;
  return theme.colors.overlay;
}, ";\n  transition: opacity 0.4s;\n  opacity: ").concat(function (_ref2) {
  var show = _ref2.show;
  return show ? 0.6 : 0;
}, ";\n  z-index: ").concat(function (_ref3) {
  var zIndex = _ref3.zIndex;
  return zIndex;
}, ";\n  pointer-events: ").concat(function (_ref4) {
  var show = _ref4.show;
  return show ? "initial" : "none";
}, ";\n");
Overlay.defaultProps = {
  show: false,
  zIndex: 10
};
export default Overlay;