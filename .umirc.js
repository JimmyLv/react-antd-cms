// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/products',
          component: './products',
        },
        {
          path: '/articles',
          component: './articles',
        },
        {
          path: '/posts',
          component: './posts',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'react-umi-antd-todos',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
