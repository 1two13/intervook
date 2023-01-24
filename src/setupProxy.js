const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api'], {
      target: 'http://ec2-13-125-255-195.ap-northeast-2.compute.amazonaws.com:8068',
      changeOrigin: true,
      onProxyReq: function (proxyReq, req, res, options) {
        proxyReq.setHeader(
          'origin',
          'http://ec2-13-125-255-195.ap-northeast-2.compute.amazonaws.com:8068'
        );
      },
    })
  );
};
