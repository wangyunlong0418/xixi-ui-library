## Modal

Demo:

```jsx | preview
import React, { useState, useCallback } from 'react';
import { Modal, Button } from 'xixi-ui-library';

export default () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={toggle}>打开modal</Button>
      <Modal visible={visible} title="我是弹窗" onClose={hideModal}>
        aaa
      </Modal>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
