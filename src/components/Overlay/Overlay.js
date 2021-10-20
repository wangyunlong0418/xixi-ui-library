import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

const useClickMaskToClose = (maskCanClose, setVisible) => {
  return useCallback(() => {
    if (!maskCanClose) {
      return;
    }

    setVisible(false);
  }, [maskCanClose, setVisible]);
};

const Overlay = ({ show, maskCanClose }) => {
  const [visible, setVisible] = useState(show);
  const clickMaskToClose = useClickMaskToClose(maskCanClose, setVisible);
  useEffect(() => {
    setVisible(show);
  }, [show]);

  return (
    <div
      className={cx(styles.overlayBox, { [styles.visible]: visible })}
      role="presentation"
      onClick={clickMaskToClose}
    />
  );
};

Overlay.defaultProps = {
  maskCanClose: true,
};

export default Overlay;
