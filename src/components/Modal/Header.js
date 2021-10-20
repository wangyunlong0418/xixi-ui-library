import React from 'react';
import classnames from 'classnames';
import { Text } from '../Text';
import { IconButton } from '../Button';
import { CloseIcon } from '../Svg';

import styles from './Header.module.less';

const Header = ({ title, hideCloseButton, background, onBack, onClose }) => {
  return (
    <div
      className={classnames(styles.modalHeader, {
        [styles.whiteHeader]: !background,
      })}
    >
      <div className={styles.modalHeaderTitle}>
        {onBack && <IconButton onClick={onBack}>返回</IconButton>}
        <Text className={styles.modalHeaderTitleText} bold>
          {title}
        </Text>
      </div>
      {!hideCloseButton && (
        <IconButton
          onClick={onClose}
          variant="text"
          aria-label="Close the dialog"
        >
          <CloseIcon color="primary" />
        </IconButton>
      )}
    </div>
  );
};

export default Header;
