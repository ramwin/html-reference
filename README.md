**Xiang Wang @ 2016-08-24 14:30:23**

# README
* 这里主要存放html标签，属性。 css一类。 如果是和JavaScript有关的看[Javascript-tutorial](https://github.com/ramwin/javascript-tutorial.git/)
* [mozilla web开发者资料](https://developer.mozilla.org/zh-CN/docs/Web)
* [mozilla learning html: guides and tutorials](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [mozilla HTML参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
* [Bootstrap参考](./bootstrap/README.md)
* [glossary](https://developer.mozilla.org/en-US/docs/Glossary)
* [Vue](#vue框架)

# [vue框架](./vue/README.md)
## 参考
* ### [官网教程](https://cn.vuejs.org/v2/guide/)
* ### learn test
    * [基础测试](./vue/learn.html)
    * [测试两个vm绑定一个值](./vue/2object.html) *请尽量不要这么做*
* ### [old reference 以前整理的资料](./vue/README.md)

## 基础
* ### Vue实例
    * 生命周期  
    [生命周期图片, 因为图片太大，就不显示了](lifecycle.png)  
        * beforeCreate: 
        * created: vue创建完毕后触发
        * mounted: 页面渲染完毕后触发
        * updated: vue数据变化后，重新渲染触发
* ### [侦听器](https://cn.vuejs.org/v2/guide/computed.html#侦听器)

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
* ### [List Rendering 列表渲染](https://cn.vuejs.org/v2/guide/list.html)
* ### [事件处理](https://cn.vuejs.org/v2/guide/events.html)
    * `v-on:keyup`:
    用户输入文字后触发，此时`v-model`的数值已经变化了
* [ ] 表单输入绑定
* ### [Components Basics 组件基础](https://cn.vuejs.org/v2/guide/components.html)
    * 基础示例
    ```
      Vue.component('button-counter', {
        data: function () {
          return {
            count: 0
          }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
      })
    ```
    * [ ] 
    * [props](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)
        ```
        props: ['title', 'content', 'id']
        props: {
            'title': Number,
            'id': {
                type: Number, required: true,
            }
        }
        ```

## API
    ### Lifecycle Hooks 生命周期钩子
        * beforeCreate: data 和 eventwatcher 没被配置
        * created: data oberver，属性和方法运算，watch/event 回调已经配置

## 其他包
* ### [Vue-amap 高德地图](https://elemefe.github.io/vue-amap/#/)
  * [测试代码](./test/test-vue-amap.html)


# HTTP协议
* User-Agent:  
[在www.ramwin.com查看自己的user-agent和IP](https://www.ramwin.com/reqres/meta/), **推荐**，因为信息更多更详细  
[在whoisshostingthing.com查看自己的user-agent和IP](http://www.whoishostingthis.com/tools/user-agent/)  
* [状态码](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
    * 100: 客户端继续发送请求
    * 400: 参数错误
    * 429: 请求过于频繁
    * 511: 需要认证才能获取网络访问权限

# [Elements 基础元素](./elements.md)
## [Forms](./form.md)

# [CSS 样式](./css/README.md)

# 功能
* [截取图片](./cropper图片截取.html)
* [下拉框选择搜索](./select搜索选择.html)
* [根据页数自动分页](./page分页.html) [官方教程](https://esimakin.github.io/twbs-pagination/)


# [jquery](http://api.jquery.com/)
* ## install
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
```
* ## [Ajax](http://api.jquery.com/category/ajax/)
    * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/)
        ```
        $.ajax({
                url:"/upload/file/",
                type: "POST",
                async: true,

                # 普通请求
                data: {
                    data:reader2.result,
                },

                # json请求
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),

                beforeSend: function(request) {
                            request.setRequestHeader("Test", "Chenxizhang");
                        },
                success:function(responseTxt){
                    console.log('ok');
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log("错误")
                    console.log(jqXHR.responseJSON)
                },
        });
        ```
    * [jQuery.get](https://api.jquery.com/jquery.get/)
    `jQuery.get( url [, data ] [, success ] [, dataType ] )`
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
* ## [UI api](https://api.jqueryui.com/)
    * [toggle](https://api.jqueryui.com/toggle/): `$('#id').toggle()`



# other framework or useful repository 其他有用的框架
* ## [Baidu Map API](http://lbsyun.baidu.com/index.php?title=jspopular3.0)
    * [测试页面](./test/baidu.html)
* ## amap api 高德地图api
    * [official documents 官方文档](http://lbs.amap.com/api/javascript-api/summary)
    * [massmarker 海量点标记](http://lbs.amap.com/api/javascript-api/guide/overlays/massmarker)
        * [测试](./test/amap_massmarker.html)
        * 注意事项:
            如果两个点标记的坐标完全一样，那么就无法分开
* ## [bootstrap](./bootstrap/README.md)
* ## [bootstrap-slider](./bootstrap-slider.html)
* ## [DateRangePicker, bootstrap4](daterangepicker.md)
* ## [flatpickr](https://github.com/flatpickr/flatpickr)  *没有依赖的时间选择器*
* ## [flex布局](./flex/README.md)
* ## [富文本编辑器](./summernote网页编辑器.html)
* ## [jquery datetimepicker](https://github.com/xdan/datetimepicker) [example](./datetimepicker.html)
not very good use daterangepicker instead
* ## [jquery pagination plugin 分页](http://josecebe.github.io/twbs-pagination/)
    * [website](http://josecebe.github.io/twbs-pagination/)
    * demo
    ```
    <script src="https://raw.githubusercontent.com/josecebe/twbs-pagination/master/jquery.twbsPagination.js"></script>
    <div id="pagination-demo"></div>
    <script>
      $('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages: 7,
        first: "第一页",
        prev: "上一页",
        next: "下一页",
        last: "最后一页",
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
      });
    </script>
    ```
    * options
        * 
    * methods:
        * destroy
        ```
        var $pagination = $('selector');
        $pagination.twbsPagination('destroy');  // use destroy and recreate to enable dynamic total page
        $pagination.twbs-pagination(options);
        ```
* ## [less](http://lesscss.org/)
    * Document
        ```
        <link rel="stylesheet/less" type="text/css" href="styles.less" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.0.2/less.min.js" ></script>
        ```
* ## [markjs](https://github.com/julmot/mark.js/) *高亮某个字段*
* ## [moment](./moment.md)
Parse, validate, manipulate, and display dates and times in JavaScript.
    * Document
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
* ## [sweetalert, 用来替换系统的alert](./sweetalert.html)
* ## [select2](./select2.md)
    *Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.*  
    * Document
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
          minimumInputLength: 2, // Minimum search term length
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
* ## [selectize 用于方便地选择和输入,](http://selectize.github.io/selectize.js/) [github链接,](https://github.com/selectize/selectize.js) [例子](./selectize.html)
* ## [wing简单的开源框架](./wing.html)
* ## [ztree树状图](./ztree.html)
