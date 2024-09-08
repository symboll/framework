const path = require('path')

const CracoCssModules = require('craco-css-modules')

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  plugins: [
    {
      plugin: CracoCssModules
    }
  ],
  style: {
    module: {
      localIdentName: '[local]-[hash:base64:6]'
    }
  }
}