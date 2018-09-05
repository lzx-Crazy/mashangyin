const path = require('path');
module.exports = {
  contentBase: path.resolve(__dirname, 'dist'),
  host: '0.0.0.0',
  useLocalIp: true,
  port: '3000',
  open: true,
  hot: true,
  proxy: {
    '/api': {
      target: 'http://192.168.4.64:8080',
      pathRewrite: {'^/api' : ''},
      secure: false
    }
  }
}