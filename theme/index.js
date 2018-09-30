import { darken, lighten } from 'polished'

// @media screen and (min-width: 36em) - 576px
// @media screen and (min-width: 48em) - 768px
// @media screen and (min-width: 62em) - 992px
// @media screen and (min-width: 75em) - 1.200px
const breakpoints = ['36em', '48em', '62em', '75em']
const black = '#000000'
const gray = '#7e7e7e'

const colors = {
  white: '#ffffff',

  black: Object.assign(black, {
    lighter: lighten('0.2', black),
    light: lighten('0.1', black),
    dark: darken('0.025', black),
    darker: darken('0.1', black),
  }),

  gray: Object.assign(gray, {
    lighter: lighten('0.2', gray),
    light: lighten('0.1', gray),
    dark: darken('0.025', gray),
    darker: darken('0.1', gray),
  }),

  shadow: Object.assign('0 2px 6px rgba(0, 0, 0, .16)', {
    small: '0 1px 1px rgba(0, 0, 0, .16)',
    medium: '0 8px 10px rgba(0, 0, 0, .16)',
    large: '0 24px 32px rgba(0, 0, 0, .16)',
  }),
}

const typography = {
  hero: {
    fontSize: '56px',
    lineHeight: '60px',
    fontWeight: '300',
  },
  h100: {
    fontSize: '26px',
    lineHeight: '32px',
    fontWeight: '500',
  },
  body: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '300',
  },
}

export default { breakpoints, colors, typography }
