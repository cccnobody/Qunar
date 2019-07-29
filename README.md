# Vue全家桶模拟去哪儿网 WebApp

基于 Vue+ vuex + vue-router + vue-axios +better-scroll + Scss + ES6 等开发的 WebApp，UI 界面参考了去哪儿网。

## 安装

```
    git clone git@github.com:leslie-choi/Qunar.git

    npm install
```

## 运行

```
npm run dev

```

# 预览

由于没有部署到服务器，如果想要在自己手机运行的话，可以将电脑和手机处于同一局域网环境，在package.json文件中的script对象的dev属性添加 –host 0.0.0.0，Windows用户在cmd命令输入ipconfig，找出本地IP地址，然后替代前缀的localhost，重启项目之后，手机即可输入地址即可访问了。(下面的图片是在我手机上运行的)
![image](https://qunar-leslie.oss-cn-beijing.aliyuncs.com/phone.jpg)

## 首页
![image](https://qunar-leslie.oss-cn-beijing.aliyuncs.com/first_banner.png)
![image](https://qunar-leslie.oss-cn-beijing.aliyuncs.com/first_list.png)

## 城市切换页面
![image](https://qunar-leslie.oss-cn-beijing.aliyuncs.com/city.png)

## 详情页面
![image](https://qunar-leslie.oss-cn-beijing.aliyuncs.com/detail.png)

## 详情轮播页面
![image](https://qunar-leslie.oss-cn-beijing.aliyuncs.com/detail_banner.png)

# 开发目的

通过学习开发一个 Vue 全家桶项目，让自己更熟练的使用 Vue 全家桶、模块化开发、ES6 等等知识，提高自己的技术能力。

# 技术栈

* Vue：用于构建用户界面的 MVVM 框架
* Vue-router：为单页面应用提供的路由系统
* axios：用来请求后端数据，谁用谁知道
* Vuex：集中状态管理，实现多个组件之间共享数据
* SCSS：css 预编译处理器
* ES6：新一代的语法规范

# 其他工具
* Vue-lazyload：实现图片的懒加载，优化页面性能节省用户流量
* better-scroll：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅
* fastcliclk：解决移动端300ms延迟
* iconfont：阿里图标库
* borderCSS：解决1像素边框问题，防止高分辨率手机将1px像素渲染成2或3单位物理像素
* VueAwesomeSwiper：功能强大，可以实现不同效果的轮播功能

以上工具的使用以及配置，官方文档都有详细的描述，在这里就不赘述了。

# 项目准备

* 导入了reset.css，初始化了项目的一些基本样式。
* 因为是移动app，所以需要在index.html里面需要对meta标签进行修改

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```
intial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放
maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别，
maximum-scale用户可将页面放大的程序，1.0将禁止用户放大到实际尺寸之上。
user-scalable:是否可对页面进行缩放，no 禁止缩放

# 实现功能

## 首页列表

基本都是使用axios获取数据，然后渲染到页面上。

## 城市列表页

搜索功能：在这里使用到了定时器实现函数节流，提高性能。

侧边栏拖拽页面联动：同样是使用到函数节流。主要思路是先获取字母A到顶部的距离，点击的时候触发事件，计算点击的点的坐标减去顶部的距离，获取到的数据除以每个字母的高度，然后向下取整，得到对应字母的索引，将数据传递给父组件再转发给列表显示组件，实现两个组件之间的联动。

## 城市选择

使用vuex传递城市选择页面和首页当前城市定位城市的数据，并且使用localStorage存储用户的选择，最好使用try catch将其包裹起来，防止浏览器关闭其功能导致代码无法运行。

## 详情页面

详情页面使用到了递归组件，如果需要渲染的数据中，存在children的子数组，需要显示多级的时候则需要使用到。这种场景算是第一次遇到，敲黑板记笔记了。

# 学到了什么

* 样式穿透：突破scope的限制,由于scope的限制，所以定义不起作用，使用/deep/标签可以突破scope的限制。终于找到之前修改无果的原因了。。。

```css
.wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff;
}
```

* 防止页面抖动：给每一个页面的区域固定一个高度，防止网络问题，造成页面的抖动,padding-bottom的值主要是根据宽高比计算的。确实是JS体现技术深度，CSS体现经验程度

```css
.wrapper{
    overflow: hidden;
    background: #fff;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
}
```

* 网页的默认字体：设置默认字体为font-size为50px，那么在换算成为rem单位的时候，直接乘以0.02就可以了。这个可能不同人会有不同习惯，也有人设置成62.5%，也没有绝对的好坏之分。
如果有些方案无法具体确定下来的话，其实可以参考其他大厂的解决方案，因为用到的大都是前沿的、兼容性好点的技术，比如这个方案淘宝系和网易家的解决方案就不一样

* 生命周期：这个说来是最羞耻的，平时学习以为只有常见的8个钩子函数，但是直到这里才发现漏了activated、deactivated以及vue2.5新增的errorCaptured。具体看官网文档吧，挺仔细的。

# 写在最后

确实要养成一个看官方文档的好习惯，能够快速入门一项技术或工具，包括以上谈到的插件，官网也有很仔细的配置文档，这确实也是一个提高技术的重要手段，敲黑板敲黑板！

最后要感谢慕课网，DellLee老师的视频教程，确实学会挺多的。![传送门](https://coding.imooc.com/class/evaluation/203.html#Anchor)
