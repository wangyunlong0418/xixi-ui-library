import React from "react";
import Prototypes from 'prop-types'
import { NavLink } from "react-router-dom";

const MenuLink = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  const Tag = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag role="button" {...props} {...otherProps} />;
};

MenuLink.propTypes = {
  href: Prototypes.string,
}

export default MenuLink;
