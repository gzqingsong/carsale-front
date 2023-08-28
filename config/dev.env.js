module.exports = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"http://localhost:8089"'

  // devServer: {
  //   port: 9528,
  //   open: false,
  //   proxy: {
  //     '/login-api': {
  //       target: 'http://localhost:8091/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api/': ''
  //       }
  //     }
  //   },
  //     '/seal-api': {
  //       target: 'http://localhost:8091/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/seal-api/': ''
  //     }
  //   }
  // }
}
