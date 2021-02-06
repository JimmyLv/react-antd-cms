// ref: https://umijs.org/config/
export default {
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
};
