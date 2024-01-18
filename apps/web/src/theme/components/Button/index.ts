import { Button } from '@mantine/core';

import classes from './index.module.scss';

export default Button.extend({
  defaultProps: {
    size: 'sm',
    radius: 'md',
  },
  classNames: {
    root: classes.root,
    label: classes.label,
  },
});
