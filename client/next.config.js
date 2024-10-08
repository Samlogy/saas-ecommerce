const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  }
}

/*
 withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
})

*/
