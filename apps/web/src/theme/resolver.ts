import { CSSVariablesResolver } from '@mantine/core';

const resolver: CSSVariablesResolver = () => ({
  variables: {
    '--mantine-color-body': '#FCFCFC',
  },
  light: {
    '--mantine-color-body': '#FCFCFC',
  },
  dark: {
    '--mantine-color-body': '#FCFCFC',
  },
});

export default resolver;
