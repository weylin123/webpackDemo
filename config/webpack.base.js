// 两个环境, 有着大量的共用的部分
// 这个文件专门用于存放通用的配置

// 插件: 自动生成 html 的插件, 可以自动引入打包后的文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 引入分离 css 文件的 模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path')

// path.join(__dirname, '../dist') 绝对路径, 从当前执行命令的这个文件触发
// './src/main.js' 相对路径, node中相对路径, 相对于执行目录 (执行时是在根目录yarn build 相对项目根目录)

// webpack是一个基于nodejs的打包工具
module.exports = {
  // 1. 配置打包入口文件, 从哪个文件开始打包
  entry: './src/main.js',
  // 2. 配置打包出口, 打包到哪里去
  output: {
    // 打包到哪个目录
    path: path.join(__dirname, '../dist'),
    // 打包后生成的文件名
    filename: 'js/bundle.js'
  },

  // 4. 模块的加载配置
  module: {
    // 规则
    rules: [
      // 1. 配置css加载的规则
      {
        // 匹配所有 .css 后缀的文件, 进行处理  i: ignore 忽略
        test: /\.css$/i,
        // 配置加载的loader
        // 处理的顺序, 从后往前
        // 1. css-loader 先处理, 让webpack具备了解析css, 读取css文件的能力
        // 2. style-loader 后处理, 将读取得到的css, 以 js 动态创建style标签的方式, 作用于页面
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },

      // 2. 配置less加载的规则
      {
        // 匹配 .less 后缀的文件
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'less-loader'
        ]
      },

      // 3. 配置图片加载的规则
      // 默认不配置, 图片将被处理的base64字符串的格式, 好处: 节约请求的次数
      // 注意: 一般推荐将小图片转base64, 节约请求, 如果是大图片, 请单独请求处理
      // 图片 转 base64 => 会比原有的体积 增大 30% 左右
      // 所以:
      // 1. 如果是小图片, 转base64
      // 2. 如果是大图片, 单独引入处理
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 超过 8k, 单独引入, 不到 8k, 转base64
              limit: 8 * 1024,
              // 配置输出的文件名
              name: '[name].[ext]',
              // 配置静态资源的引用路径
              // 例如: 从index.css 出发, 找图片, ../images/xx.gif
              publicPath: "../images/",
              // 配置输出的文件目录
              outputPath: "images/"
            }
          }
        ]
      },

      // 4. 配置对于字体图标的加载
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[ext]',
              publicPath: "../fonts/",
              outputPath: "fonts/"
            }
          }
        ]
      },

      // 5. 配置babel, 将新版本的es6语法 => es5/es3 浏览器兼容的语法
      // 正则中的 ?, 表示可以出现 0 次 或 1次
      // .js
      {
        test: /\.js$/,
        // exclude 排除, 设置排除项, 哪些目录是不需要进行解析编译的
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  // 5. 配置插件
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    // 定义打包好的文件的存放路径和文件名
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
    // 调用清除打包目录插件
    new CleanWebpackPlugin()
  ]

}

// 脚手架 => vue-cli 自动生成 webpack 配置
// publicPath 决定了静态资源文件的加载路径, 不要乱改
