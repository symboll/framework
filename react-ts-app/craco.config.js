const path = require('path')

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  style: {
    modules: {
      localIdentName: '[local]-[hash:base64:8]'
    },
    sass: {
      loaderOptions:(sassLoaderOptions, { env, paths }) => {
        return {
          ...sassLoaderOptions,
          api:'modern'
        }
      }
    }
  }
}
