import { createTheme } from '@mantine/core';

import * as components from './components';

const mainTheme = createTheme({
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'monospace',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '36px', fontWeight: '700', lineHeight: '34px' },
      h2: { fontSize: '29px', fontWeight: '700', lineHeight: '36px' },
      h3: { fontSize: '20px', fontWeight: '700', lineHeight: '20px' },
      h4: { fontSize: '18px', fontWeight: '700', lineHeight: '20px' },
      h5: { fontSize: '16px', fontWeight: '700', lineHeight: '20px' },
    },
  },
  fontSizes: {
    xl: '28px',
    lg: '24px',
    md: '20px',
    sm: '16px',
    xs: '14px',
  },
  radius: {
    xl: '50px',
    lg: '12px',
    md: '8px',
    sm: '4px',
    xs: '2px',
  },
  lineHeights: {
    md: '1.45',
  },
  spacing: {
    xl: '32px',
    lg: '28px',
    md: '20px',
    sm: '26px',
    xs: '16px',
  },
  primaryColor: 'main-blue',
  colors: {
    'main-blue': [
      '#B9D5FF',
      '#99C2FF',
      '#7DB0FD',
      '#65A0F9',
      '#4F91F5',
      '#3C83F0',
      '#2B77EB',
      '#0F5BCF',
      '#0948A9',
      '#053989',
    ],
    'pure-white': [
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
      '#FFFFFF',
    ],
    asphalt: [
      '#FCFCFC',
      '#FCFCFC',
      '#FCFCFC',
      '#FCFCFC',
      '#ECECEE',
      '#ECECEE',
      '#ECECEE',
      '#CFCFCF',
      '#A3A3A3',
      '#767676',
    ],
  },
  primaryShade: 6,
  components,
  black: '#201F22',
  white: '#FCFCFC',
});

export default mainTheme;
