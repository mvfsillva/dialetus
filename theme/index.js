'use strict'

// @media screen and (min-width: 36em) - 576px
// @media screen and (min-width: 48em) - 768px
// @media screen and (min-width: 62em) - 992px
// @media screen and (min-width: 75em) - 1.200px
const breakpoints = ['36em', '48em', '62em', '75em']

const colors = {
  primary: {
    default: '#6800c3',
    fallback: '#a55cff',
    text: '#fff',
  },
}

const fontFamilies = {
  sansSerif: 'Helvetica, sans-serif',
}

const fontWeights = {
  sansSerif: {
    normal: 300,
    bold: 500,
  },
  serif: {
    normal: 'normal',
    bold: 'bold',
  },
}

export default {
  breakpoints,
  colors,
  fontFamilies,
  fontWeights,  
}