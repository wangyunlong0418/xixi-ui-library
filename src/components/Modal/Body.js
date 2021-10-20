import React from 'react';

import styles from './Body.module.less';

const Body = ({ bodyPadding = '24px', children }) => {
  return (
    <div className={styles.modalBody} padding={bodyPadding}>
      {children}
    </div>
  );
};

export default Body;
