import { createTheme } from '@mantine/core';

import * as components from './components';

const mainTheme = createTheme({
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'monospace',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '36px', fontWeight: '700', lineHeight: '34px' },
      h2: { fontSize: '29px', fontWeight: '600', lineHeight: '36px' },
      h3: { fontSize: '20px', fontWeight: '700', lineHeight: '20px' },
      h4: { fontSize: '18px', fontWeight: '600', lineHeight: '20px' },
      h5: { fontSize: '16px', fontWeight: '400', lineHeight: '20px' },
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
    xl: '20px',
    lg: '12px',
    md: '8px',
    sm: '4px',
    xs: '2px',
  },
  lineHeights: {
    md: '1.45',
  },
  spacing: {
    md: '32px',
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
    asphalt: [
      '#F9F9F9',
      '#F7F7F7',
      '#F4F4F4',
      '#F2F2F2',
      '#E7E7E9',
      '#A3A3A3',
      '#A3A3A3',
      '#D9D9DB',
      '#C8C8C9',
      '#D2D2D2',
    ],
  },
  primaryShade: 6,
  components,
  black: '#201F22',
  white: '#FCFCFC',
});

export default mainTheme;
