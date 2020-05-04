module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/global.module.scss";'
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
