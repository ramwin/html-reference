**Xiang Wang @ 2016-08-24 14:30:23**

# README
* 这里主要存放html标签，属性。 css一类。 如果是和JavaScript有关的看[Javascript-tutorial](https://github.com/ramwin/javascript-tutorial.git/)
* [mozilla web开发者资料](https://developer.mozilla.org/zh-CN/docs/Web)
* [mozilla HTML参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
* [Bootstrap参考](./bootstrap/README.md)
* [glossary](https://developer.mozilla.org/en-US/docs/Glossary)


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


# [vue框架](./vue/README.md)
* ## 参考
    * ### [官网教程](https://cn.vuejs.org/v2/guide/)
    * ### [learn test](./vue/learn.html)
    * ### [old reference](./vue/README.md)
* ## 基础
    * ### [bind class and style](https://cn.vuejs.org/v2/guide/class-and-style.html)
        * #### 绑定HTML Class
            * 对象语法
            可以绑定多个，并且和原有的class属性共存
            ```
            <div v-bind:class="{active: isActive}"></div>
            <div class="static"
               v-bind:class="{ active: isActive, 'text-danger': hasError }">
            </div>
            ```
            * 数组
            ```
            <div v-bind:class="[activeClass, errorClass]"></div>
            data: {
                activeClass: 'active',
                errorClass: 'text-danger',
            }
            ```
            * 绑定在组件上
            ```
            Vue.component('my-component', {
                template: '<p class="foo bar">hi</p>'
            })
            <my-component class="baz boo"></my-component>
            ```
        * #### 绑定内联样式
            * 对象语法
            ```
            <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
            // 绑定到一个对象更好
            <div v-bind:style="styleObject"></div>
            ```
            * 数组语法
            ```
            <div v-bind:style="[baseStyles, overridingStyles]"></div>
            ```
            * 自动添加前缀  
            当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。
            * 多重值  
            `<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`只会渲染数组中最后一个被浏览器支持的值

    * ### [事件处理](https://cn.vuejs.org/v2/guide/events.html)
        * `v-on:keyup`:
        用户输入文字后触发，此时`v-model`的数值已经变化了

# other framework or useful repository
## [Baidu Map API](http://lbsyun.baidu.com/index.php?title=jspopular3.0)
* [测试页面](./test/baidu.html)

## [bootstrap](./bootstrap/README.md)
## [flex布局](./flex/README.md)
## [富文本编辑器](./summernote网页编辑器.html)
## [bootstrap-slider](./bootstrap-slider.html)
## [ztree树状图](./ztree.html)
## [moment](./moment.md)
Parse, validate, manipulate, and display dates and times in JavaScript.
* example
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment-with-locales.min.js"></script>
<script>
  var now = moment(new Date())
  console.log(now.format("YYYY-MM-DD"))
  console.log(now.add(12, 'days').calendar());
  moment("20111031", "YYYYMMDD")
</script>
```
* [docs](https://momentjs.com/docs/)
* [manipulating](https://momentjs.com/docs/#/manipulating/)  
    It should be noted that moments are mutable. Calling any of the manipulation methods will **change** the original moment.
    * add: `moment().add(7, 'days|d|weeks|w|months|M|years|y')`

## [wing简单的开源框架](./wing.html)
## [sweetalert, 用来替换系统的alert](./sweetalert.html)
## [select2](./select2.md)
*Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.*  

1. get started, installation
```
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
<select></select>
$("#id").select2()
```

6. data source
```
$('.js-data-example-ajax').select2({
  ajax: {
    url: 'https://api.github.com/search/repositories',  // the url can also be dynamic
    dataType: 'json'
  },
  processResults: function (data) {
    // Tranforms the top-level key of the response object from 'items' to 'results'
    // you can also add some other tranforms to ensure the results is kind of [{"id": 1, "text": "text"}, {"id": 2, "text": "text2"}]
    return {
      results: data.items
    };
  },
});
```

9. [Dynamic option create](https://select2.org/tagging)
```
tags: true,  // add the tag whose value is the input value
createTag: function(params) {return {"id": null, "text": params.term}}  // customer the tag created
insertTag: function(data, tag) {data.push(tag)}  // determine where the tag should be placed
```

## [selectize 用于方便地选择和输入,](http://selectize.github.io/selectize.js/) [github链接,](https://github.com/selectize/selectize.js) [例子](./selectize.html)
## [jquery datetimepicker](https://github.com/xdan/datetimepicker) [example](./datetimepicker.html)
## [DateRangePicker, bootstrap4](http://www.daterangepicker.com/#options)
    * [https://github.com/dangrossman/daterangepicker](https://github.com/dangrossman/daterangepicker)
    * [http://www.daterangepicker.com/](http://www.daterangepicker.com/)
    * [Example](./daterangepicker.html)
    ```
    <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <script>
    $('input[name="dates"]').daterangepicker(options);
    </script>
    ```
    * [interactive config generator](http://www.daterangepicker.com/#config)
    * [option](http://www.daterangepicker.com/#options)
        * `common option`: startDate, endDate, minDate, maxDate, timePicker, timePickerIncrement, timePicker24Hour, timePickerSeconds
        * `seldom used option`: showWeekNumbers, showISOWeekNumbers, isInvalidDate, isCustomDate, 
        * `ranges`: Set predefined date ranges the user can select from.
        * `showDropdowns`: whether use can select year and month or not
        * `showCustomRangeLabel`: Displays "Custom Range" at the end of the list of predefined ranges
        * `alwaysShowCalendars`: Normally, if you use the ranges option to specify pre-defined date ranges, calendars for choosing a custom date range are not shown until the user clicks "Custom Range". When this option is set to true, the calendars for choosing a custom date range are always shown instead.
        * `style option`: opens: ('left'/'right'/'center') | drops: ('down'/'up') | buttonClasses | applyButtonClasses | cancelButtonClasses 
        * `local`: Allows you to provide localized strings for buttons and labels, customize the date format, and change the first day of week for the calendars. Check off locale in the configuration generator to see how to customize these options.
        * `singleDatePicker`:  Show only a single calendar to choose one date, instead of a range picker with two calendars.
        * `autoApply`: 
        * `linkedCalendars`: When enabled, the two calendars displayed will always be for two sequential months
        * `autoUpdateInput`: whether the date range picker should automatically update the value of the `<input>` element it's attached to at initialization and when the selected dates change
        * `parentEl`: (string) jQuery selector of the parent element that the date range picker will be added to, if not provided this will be 'body'
    * [ ] [methods](http://www.daterangepicker.com/#methods)
    * [ ] [events](http://www.daterangepicker.com/#events)
    * locale:
    ```
    locale: {
      applyLabel: "确定",
      cancelLabel: '取消',
      fromLabel: '起始时间',
      toLabel: '结束时间',
      customRangeLabel: '自定义',
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六' ],
      monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
      firstDay: 1,
    }
    ```
    * [Events](http://www.daterangepicker.com/#events)
    ```
    $('#daterange').on('apply.daterangepicker', function(ev, picker) {
      console.log(picker.startDate.format('YYYY-MM-DD'));
      console.log(picker.endDate.format('YYYY-MM-DD'));
    });
    ```
        * `show.daterangepicker`: Triggered when the picker is shown
        * `hide.daterangepicker`: Triggered when the picker is hidden
        * `showCalendar.daterangepicker`: Triggered when the calendar(s) are shown
        * `hideCalendar.daterangepicker`: Triggered when the calendar(s) are hidden
        * `apply.daterangepicker`: Triggered when the apply button is clicked, or when a predefined range is clicked
        * `cancel.daterangepicker`: Triggered when the cancel button is clicked


# [jquery](http://api.jquery.com/)
## [Ajax](http://api.jquery.com/category/ajax/)
* [jQuery.getJSON](http://api.jquery.com/jQuery.getJSON/)
    ```
    $.getJSON("/text/", {}, Function( PlainObject data, String textStatus, jqXHR jqXHR )).fail(function(res) {
        toastr.error(res.responseText);
    })
    ```
* [jQuery.post](http://api.jquery.com/jQuery.post/)
    ```
    jQuery.post( url [, data ] [, success ] [, dataType ] )
    ```
