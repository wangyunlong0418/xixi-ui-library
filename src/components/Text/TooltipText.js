import React from 'react';
import Text from './Text';
import styles from './index.module.less';

const TooltipText = (props) => {
  return <Text className={styles.tooltipText} {...props} />;
};

export default TooltipText;
