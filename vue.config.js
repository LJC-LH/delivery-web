// vue.config.js文件
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 配置相对路径
    devServer: {
        // 跨域
        proxy: {
            '/api': {
                // target: 'https://api.apiopen.top', //要跨域的地址，接口对接使用
                target: 'https://cbf4-2001-250-6803-206-de91-66ff-fe53-506a.ap.ngrok.io', //要跨域的地址，接口对接使用
                changeOrigin: true, // 允许跨域
                secure: false,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        disableHostCheck: true
    }
}