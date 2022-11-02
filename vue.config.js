// vue.config.js文件
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 配置相对路径
    devServer: {
        // 跨域
        proxy: {
            '/api': {
                // target: 'https://api.apiopen.top', //要跨域的地址，接口对接使用
                target: 'http://localhost:8888', //要跨域的地址，接口对接使用
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}