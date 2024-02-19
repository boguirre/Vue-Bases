const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    vite: {
      build: {
        rollupOptions: {
          vuePluginOptions: {
            __VUE_PROD_DEVTOOLS__: true,
            __VUE_PROD_HYDRATION_MISMATCH__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
          }
        }
      }
    }
  }
})

