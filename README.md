**Xiang Wang @ 2016-08-24 14:30:23**

# README
* 这里主要存放html标签，属性。 css一类。 如果是和JavaScript有关的看[Javascript-tutorial](https://github.com/ramwin/javascript-tutorial.git/)
* [mozilla web开发者资料](https://developer.mozilla.org/zh-CN/docs/Web)
* [mozilla HTML参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
* [Bootstrap参考](./bootstrap/README.md)


# HTTP
* User-Agent:  
[在www.ramwin.com查看自己的user-agent和IP](https://www.ramwin.com/reqres/meta/), **推荐**，因为信息更多更详细  
[在whoisshostingthing.com查看自己的user-agent和IP](http://www.whoishostingthis.com/tools/user-agent/)  


# [Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
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
## Inline text semantics
## Image and multimedia
## Embedded content
## Scriping
## Demarcating edits
## Table content
## [Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms)
* [ ] button
* [ ] datalist
* [ ] fieldset
* [ ] form
* [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
    * type=image
    this is used to replace a submit button with image instead of text. **It doen't mean select a image**
    * [type=file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
    `<input name="myFile" type="file">`  
    if you use file input, you should add `enctype="multipart/form-data"` property to form
        * multiple
        * accept
            * `image/png|.png` only the PNG files
            * `accept="image/png, image/jpeg"` or `accept=".png, .jpg, .jpeg"`: accept PNG or JPEG files
            * `accept="image/*"`: accept any file with an image/* MIME type
        * required
* [ ] label
* [ ] legend
* [ ] meter
* [ ] optgroup
* [ ] option
* [ ] output
* [ ] progress
* [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
```
<!-- The second value will be selected initially -->
<select name="text"> <!--Supplement an id here instead of using 'text'-->
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```
* [ ] textarea

## Interactive elements
## Web Components

* [html参考资料](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
* 超链接, [案例](./a.html)
    * [参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)
    * [示例]
    ```
    <a href="www.baidu.com" target="_blank">访问百度</a>
        target: _blank(新标签打开) | _top(跳出当前框架)
    style: text-decoration: none 是否有下划线
    ```
    * 参数
        * target: `_self | _blank | _parent | _top`: 当前 | 新窗口 | 父浏览器的加载 | 响应成完整的窗口，后两个用于iframe或者上下文
    * 其他:
        ```
        <a href="mailto:ramwin@qq.com">发送邮箱</a>
        <a href="tel:+491570156">拨打电话: +49 157 0156</a>
        ```

* Form
    * [参考](./form.md) [案例](./form.html)
* iframe
    * [MDN参考](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) [案例](./iframe.html)
    * 参数
        * src: 链接
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

# Response
* 状态码
    * 400: 参数错误
    * 429: 请求过于频繁


# 样式
* [CSS](./css/README.md)
* [训练](https://flukeout.github.io/)


# 功能
* [截取图片](./cropper图片截取.html)
* [下拉框选择搜索](./select搜索选择.html)
* [根据页数自动分页](./page分页.html) [官方教程](https://esimakin.github.io/twbs-pagination/)


# 框架或其他
* ## [bootstrap](./bootstrap/README.md)
* ## [flex布局](./flex/README.md)
* ## [vue框架](./vue/README.md)
* ## [富文本编辑器](./summernote网页编辑器.html)
* ## [bootstrap-slider](./bootstrap-slider.html)
* ## [ztree树状图](./ztree.html)
* ## [moment参考](./moment.md), [moment时间处理](./moment时间处理.html)
* ## [wing简单的开源框架](./wing.html)
* ## [sweetalert, 用来替换系统的alert](./sweetalert.html)
* ## [select,选择，下拉，服务器获取](./select2.md)
* ## [selectize 用于方便地选择和输入,](http://selectize.github.io/selectize.js/) [github链接,](https://github.com/selectize/selectize.js) [例子](./selectize.html)
* ## [jquery datetimepicker](https://github.com/xdan/datetimepicker) [example](./datetimepicker.html)

# [jquery](http://api.jquery.com/)
## [Ajax](http://api.jquery.com/category/ajax/)
    * [jQuery.getJSON](http://api.jquery.com/jQuery.getJSON/)
        ```
        $.ajax(url, data, success)
        ```
