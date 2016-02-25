# webpack由浅入深-案例学习
在前端项目开发中，我们一般都会使用诸如Grunt、Gulp、ReqiureJS等自动化构建工具或者异步加载工具来辅助我们的开发。但在前端越来越复杂的今天，这些工具要么配置过于复杂(Grunt)、要么由于本身的功能限制（如ReqiureJS在模块化方面的不足，已经不足以支撑要求更高、更复杂的前端项目。在这种背景下，webpack的出现弥补了这种应用场景的需求。
在我看来，webpack兼容AMD与CMD的模块加载规范，具有更强大的JS模块化的功能，是一个更出色的前端自动化构建工具、模块化工具、资源管理工具。

废话了这么多，直接看实例：

## 一.对css的处理
### 1.将css代码嵌入到html头部style标签内
见webpack-css/webpack.config1.js,在配置文件中添加如下配置:


```
module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
}
```
然后在入口js文件中引入即可:

```
require('./sass/main.scss'); //or require('./css/main.css');
```

运行webpack --config webpack.config1.js后，打开config1.html.
### 2.将css作为单个的文件处理

这种情况需要使用到插件extract-text-webpack-plugin,即将js中编译生成的文件从生成的bundle文件中提取出来，并放到指定文件。

见webpack-css/webpack.config2.js,在配置文件中添加如下配置:

```
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  //...
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style", "css")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  //...
  plugins: [
    new ExtractTextPlugin("css/styles.css")
  ]
}
```
运行webpack --config webpack.config2.js后，打开config2.html.

## 二.对图片的处理

webpack对图片的处理一般使用url-loader和image-webpack-loader两个loader，其中url-loader可以设置一个图片大小的限制，在这个限制下会将图片处理成base64插入到代码中，若大于这个限制则返回图片地址。而image-webpack-loader用于压缩图片大小。

见webpack-img/webpack.config.js,在配置文件中添加如下配置:

```
{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        "url-loader?limit=5000&name=../img/img-[hash:6].[ext]",
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
      ]
}
```

这里需要注意的一点是，图片一般在样式文件中引用，它的路径是相对样式文件所在目录，所以这里设置图片路径的时候需要返回到上一层(name=../);

## 三.对js的处理
