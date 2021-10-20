## Overlay

Demo:

```jsx | preview
import React, { useState, useCallback } from 'react';
import { Overlay, Button } from 'xixi-ui-library';

export default () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Button onClick={toggle} style={{ background: 'blue' }}>
        {show ? '隐藏' : '显示'}
      </Button>
      <Overlay show={show} />
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
