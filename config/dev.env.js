module.exports = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"http://localhost:8091"',

  devServer: {
    port: 9528,
    open: false,
    proxy: {
      '/seal-consume': {
        target: 'http://localhost:8091/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    },
      '/seal-api': {
        target: 'http://localhost:8091/',
        changeOrigin: true,
        pathRewrite: {
          '^/seal-api/': ''
      }
    }
  }
}
