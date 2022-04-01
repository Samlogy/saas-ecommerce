import { extendTheme } from '@chakra-ui/react'

import { colors } from './utilities'

const theme = extendTheme({
  colors,
  sizes: {
    container: {
      sm: '375px',
      md: '1024px',
      lg: '1280px',
      xl: '1920px',
      '2xl': '2160px'
    }
  },
  components: {
    // Steps,
  }
})

export default theme
