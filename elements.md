**Xiang Wang @ 2018-06-11 17:33:04**

* [Elements 元素 官方文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## Main Root
## Document metadata
* link
* meta
* style
* title

## Sectioning root
* body

## Content sectioning
* address
* article
* aside
* footer
* header
* h1, h2, h3, h4, h5, h6
* hgroup
* nav
* section

## Text content
* `Chinese Space`: `　`
* [Character Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity)

## Inline text semantics
使用这些元素来代表一些text
* ### a [官网](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
[测试](./test/a.html)
    * [示例]
    ```
    <a href="www.baidu.com" target="_blank">访问百度</a>
        target: _blank(新标签打开) | _top(跳出当前框架)
    style: text-decoration: none 是否有下划线
    ```
    * Attributes 属性
        * download 告诉浏览器, 这个是用来下载的
        * target: `_self | _blank | _parent | _top`: 当前 | 新窗口 | 父浏览器的加载 | 响应成完整的窗口，后两个用于iframe或者上下文
    * 其他:
        ```
        <a href="mailto:ramwin@qq.com">发送邮箱</a>
        <a href="tel:+491570156">拨打电话: +49 157 0156</a>
        ```

## [Image and multimedia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Image_and_multimedia)
### to be continued
* [ ] area
* [ ] map

### [audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
[测试](test/audio.html)
```
<audio src="../source/mp3.mp3"></audio>
```
对应的webapi: [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
* HTMLAudioElement:
```
mySound = new Audio("source.mp3");
var result = mySound.play();
```

### img
[测试](test/img.html)
    * src: 图片的路径
    * alt: 图的文字信息
### video
[官网](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
[测试](./test/video.html)
video可以用来放audio, 但是audio更好
如果你希望有其他的使用操作: 参考 `HTMLMediaElement` `track`
* 案例
* 属性
    * autoplay: 自动播放
    * buffered: 包含一个TimeRanges对象
    * controls: 是否需要设置
    * crossorigin
    * height
    * intrinsicsize
    * loop
    * muted
    * preload: 是否预先载入（告诉浏览器先载入视频还是载入其他页面）
    * playsinline 是否可以不全屏播放
    * poster 预览图片
    * src
    * width
* 事件
    * play: 播放
    * pause: 暂停
* 使用笔记

## Embedded content
* iframe
    * [MDN参考](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) [案例](./iframe.html)
    * 参数
        * src: 链接
## Scriping
## Demarcating edits
## Table content
## [Forms](./form.md)
[基础学习网站](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
[参考网站](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
[测试代码](./test/form.html)

## Interactive elements
## Web Components


## 以前的文档
* Meta
    ```
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="30">  # 刷新频率
    <meta name="author" content="ramwin">
    <meta name="description" content="网页描述">
    <meta name="keywords" content="搜索关键词">
    ```
* 输入框
    * [input](./input.md)
    * [selectize](http://selectize.github.io/selectize.js/) *一款搜索选择输入的插件*
    * 文本框: `<textarea name="textarea" rows="10" cols="50">请在这输入</textarea>`
* 头部
    ```
    <title>标题</title>
    <script src="./source/index.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.js"></script>
    <link rel="stylesheet" type="text/css" href="./source/index.css">
    ```
* 图片
    `<img border="1" src="smiley.gif" alt="图片未能显示" width="32" height="32">`
* 文字
    * 属性
        1. font-size: 1rem, 2rem  字体大小
        2. font-weigth: 700 字体粗细
* 表格
    * 标签
        * `<table> 表格`
        * `<caption>标题</caption>`
        * `<tr> 一行(table row)`
            * <th> 标题
            * <td> 一个单元格
    * 属性
        border=1 单元格的边框
        cellspacing=0 单元格之间的间距
* 列表
    * 无序列表ul
        [参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul)
