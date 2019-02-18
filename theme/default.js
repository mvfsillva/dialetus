const theme = {}

theme.radius = Object.assign('3px', {
  micro: '2px',
  medium: '4px',
  large: '6px',
  xlarge: '8px',
})

theme.spacing = Object.assign('8px', {
  small: '4px',
  medium: '16px',
  large: '24px',
  xLarge: '32px',
  xxLarge: '40px',
  xxxLarge: '48px',
  huge: '56px',
  xHuge: '64px',
  xxHuge: '72px',
  xxxHuge: '80px'
})

theme.zindex = {
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  overlay: 400,
  modal: 500,
  popover: 600,
  tooltip: 700
}

theme.responsive = {
  smallPhone: 'screen and (min-width: 320px) and (max-width: 480px)',
  smallTablet: 'screen and (min-width: 481px) and (max-width: 767px)',
  smallDesktop: 'screen and (min-width: 1025px) and (max-width: 1280px)',
  phone: 'screen and (max-width: 580px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
  desktop: 'screen and (min-width: 1281px)'
}

theme.palette = {
  white: '#ffffff',
  black: '#000000',

  primary: Object.assign('#6800c3', {
    fallback: '#a55cff',
  }),

  gray: Object.assign('#7e7e7e', {
    light: '#bfbfbf',
    ultraLight: '#f7f7f7',

    // scale
    '050': '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  }),

  error: Object.assign('#da1616', {
    dark: '#ac1111',
    light: '#f8b9b9',
  }),

  success: Object.assign('#28a354', {
    dark: '#1e7b3f',
    light: '#c1f0d2',
  }),

  warning: Object.assign('#ff9f00', {
    dark: '#f28100',
    light: '#db8800',
  }),
}

export default theme
