# webpack由浅入深-案例学习
在前端项目开发中，我们一般都会使用诸如Grunt、Gulp、ReqiureJS等自动化构建工具或者异步加载工具来辅助我们的开发。但在前端越来越复杂的今天，这些工具要么配置过于复杂(Grunt)、要么由于本身的功能限制（如ReqiureJS在模块化方面的不足，已经不足以支撑要求更高、更复杂的前端项目。在这种背景下，webpack的出现弥补了这种应用场景的需求。
在我看来，webpack兼容AMD与CMD的模块加载规范，具有更强大的JS模块化的功能，是一个更出色的前端自动化构建工具、模块化工具、资源管理工具。

废话了这么多，直接看实例：

## 一.对css的处理
### 1.将css代码嵌入到html头部style标签内
见webpack-css/webpack.config1.js,在webpack.config.js配置文件中添加如下配置:


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
见webpack-css/webpack.config2.js,在webpack.config.js配置文件中添加如下配置:

```

```

