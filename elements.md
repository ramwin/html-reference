**Xiang Wang @ 2018-06-11 17:33:04**

# [Elements 元素](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
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
## Image and multimedia
## Embedded content
## Scriping
## Demarcating edits
## Table content
## [Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms)
* [ ] button
* [ ] [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
```
<fieldset>
  <legend>Choose some monster features</legend>
  <div>
    <input type="checkbox" id="scales" name="feature"
      value="scales" checked />
    <label for="scales">Scales</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="feature"
      value="horns" />
    <label for="horns">Horns</label>
  </div>
  <div>
    <input type="checkbox" id="claws" name="feature"
      value="claws" />
    <label for="claws">Claws</label>
  </div>
</fieldset>
```

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
