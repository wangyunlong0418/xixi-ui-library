import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import Header from './Header';
import Body from './Body';

import styles from './index.module.less';

const useHideModal = (onClose) => {
  return useCallback(() => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  }, []);
};

const useClickMask = (maskCanClose, hideModal) => {
  return useCallback(() => {
    if (!maskCanClose) {
      return;
    }

    hideModal();
  }, []);
};

const Modal = ({
  visible,
  title,
  maskCanClose,
  hideCloseButton,
  children,
  onClose,
}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const hideModal = useHideModal(onClose);
  const clickMask = useClickMask(maskCanClose, hideModal);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  if (!modalVisible) {
    return null;
  }

  return (
    <div className={styles.modalWrapper}>
      <div
        className={classnames(styles.overlayBox, { [styles.visible]: visible })}
        role="presentation"
        onClick={clickMask}
      />
      {modalVisible && (
        <div className={styles.modalBox}>
          <Header
            title={title}
            hideCloseButton={hideCloseButton}
            onClose={hideModal}
          />
          <Body>{children}</Body>
        </div>
      )}
    </div>
  );
};

Modal.defaultProps = {
  maskCanClose: true,
};

export default Modal;
