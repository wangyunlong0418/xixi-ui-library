import React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

const Text = ({ children, small, ellipsis, className }) => {
  return (
    <div
      className={classnames(styles.text, className, {
        [styles.small]: small,
        [styles.ellipsis]: ellipsis,
      })}
    >
      {children}
    </div>
  );
};

Text.defaultProps = {
  color: 'text',
  small: false,
  ellipsis: false,
};

export default Text;
