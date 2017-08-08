#### Xiang Wang @ 2016-08-24 14:30:23

### README
* 这里主要存放html标签，属性。 css一类。 如果是和JavaScript有关的看[Javascript_tutorial](https://github.com/ramwin/javascript_tutorial.git/)
* [mozilla web开发者资料](https://developer.mozilla.org/zh-CN/docs/Web)


### 基本元素
* [html参考资料](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
* 头部
```
    <title>标题</title>
    <script src="./source/index.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.js"></script>
    <link rel="stylesheet" type="text/css" href="./source/index.css">
```

* Meta
```
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="30">  # 刷新频率
    <meta name="author" content="ramwin">
    <meta name="description" content="网页描述">
    <meta name="keywords" content="搜索关键词">
```

* 图片
    `<img border="1" src="smiley.gif" alt="图片未能显示" width="32" height="32">`
* 文字
    * 属性
        1. font-size: 1rem, 2rem  字体大小
        2. font-weigth: 700 字体粗细
* 输入文本框
    `<textarea name="textarea" rows="10" cols="50">请在这输入</textarea>`
* 表格
    * 标签
        * `<table> 表格`
        * `<tr> 一行(table row)`
            * <th> 标题
            * <td> 一个单元格
    * 属性
        border=1 单元格的边框
        cellspacing=0 单元格之间的间距
* 输入框
    * [input](./input.md)
    * [selectize](http://selectize.github.io/selectize.js/) *一款搜索选择输入的插件*
* 超链接, [案例](./a.html)
```
    <a href="www.baidu.com" target="_blank">访问百度</a>
        target: _blank(新标签打开) | _top(跳出当前框架)
    style: text-decoration: none 是否有下划线
    <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>发送邮件
```
* 列表
    * 无序列表ul
        [参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul)
* Form
    * [参考](./form.md) [案例](./form.html)

### Response
* 状态码
    * 400: 参数错误
    * 429: 请求过于频繁


### 样式
* [CSS](./css/README.md)
* [训练](https://flukeout.github.io/)


### 功能
* [截取图片](./cropper图片截取.html)
* [下拉框选择搜索](./select搜索选择.html)
* [根据页数自动分页](./page分页.html) [官方教程](https://esimakin.github.io/twbs-pagination/)


### 框架或其他
* [bootstrap](./bootstrap/README.md)
* [flex布局](./flex/README.md)
* [vue框架](./vue/README.md)
* [富文本编辑器](./summernote网页编辑器.html)
* [bootstrap-slider](./bootstrap-slider.html)
* [ztree树状图](./ztree.html)
* [moment参考](./moment.md), [moment时间处理](./moment时间处理.html)
* [wing简单的开源框架](./wing.html)
* [sweetalert, 用来替换系统的alert](./sweetalert.html)
* [select,选择，下拉，服务器获取](./select2.md)
* [selectize 用于方便地选择和输入](http://selectize.github.io/selectize.js/)
