const webpack = require('webpack');
const path = require('path');
module.exports = {
  
  configureWebpack: {
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
          })
    ]
  },
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost", 
    port: '8081',
    https: false, 
    hotOnly: false, 
    proxy: {
        '/api': {
            target: 'http://z6esis.natappfree.cc/api', //API服务器的地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
}
}