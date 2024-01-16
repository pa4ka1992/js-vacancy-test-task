import { Button } from '@mantine/core';

import classes from './index.module.scss';

export default Button.extend({
  defaultProps: {
    size: 'sm',
  },
  classNames: {
    root: classes.root,
    label: classes.label,
  },
});
