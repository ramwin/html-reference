**Xiang Wang @ 2016-08-24 14:30:23**

# README
* 这里主要存放html标签，属性。 css一类。 如果是和JavaScript和dom有关的看[Javascript-tutorial](https://github.com/ramwin/javascript-reference.git/)
* [mozilla web开发者资料](https://developer.mozilla.org/zh-CN/docs/Web)
* [mozilla learning html: guides and tutorials](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [mozilla HTML参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
* [glossary](https://developer.mozilla.org/en-US/docs/Glossary)

# [flex布局](./flex/README.md)
# [bootstrap](./bootstrap/README.md)
## Components 组件
* [modal](./bootstrap/modal模态框.md)

## 其他插件
* [bootstrap-slider](./bootstrap-slider.html)
* [DateRangePicker, bootstrap4](daterangepicker.md)

# [vue框架](./vue/README.md)
## [Element](./vue/element.md)
## 参考
* ### [官网教程](https://cn.vuejs.org/v2/guide/)
* ### learn test
    * [基础测试](./vue/learn.html)
    * [测试两个vm绑定一个值](./vue/2object.html) *请尽量不要这么做*
* ### [old reference 以前整理的资料](./vue/README.md)

## 模板语法
### 插值
* 文本
使用Mustache的语法
```
<span> Message: {{ msg }}</span>
<span v-once>这个将不会发生改变: {{ msg }}</span>
```
* 原始HTML
```
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
这样后面的rawHtml的内容会直接替换这个span
```
* 特性
Mustache不能用于HTML特性上，这种情况应该使用v-bind, 如果value是`null`, `undefined`或者`false`就不会渲染到html特性上
```
<div v-bind:id="dynamicId"></div>
```
* 使用JavaScript表达式
```
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
```
### 缩写
* v-bind:  
`v-bind:href="url" => :ref="url"`
* v-on:  
`v-on:click="doSomething" => @click="doSomething"`
### to be continued
* [ ] 指令

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

# [Elements 基础元素](./elements.md)
## [Forms](./form.md)
## [Image and multimedia](./elements.md#image-and-multimedia)
* audo
* video


# HTTP协议
* User-Agent:  
[在www.ramwin.com查看自己的user-agent和IP](https://www.ramwin.com/reqres/meta/), **推荐**，因为信息更多更详细  
[在whoisshostingthing.com查看自己的user-agent和IP](http://www.whoishostingthis.com/tools/user-agent/)  
* [状态码](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)
    * 100: 客户端继续发送请求
    * 400: 参数错误
    * 409: 请求冲突，多个同步更新之间的编辑冲突等
    * 429: 请求过于频繁
    * 511: 需要认证才能获取网络访问权限

# [CSS 样式](./css/README.md)

# 功能
* [截取图片](./cropper图片截取.html)
* [下拉框选择搜索](./select搜索选择.html)
* [根据页数自动分页](./page分页.html) [官方教程](https://esimakin.github.io/twbs-pagination/)

# [jquery](./jquery.md)
* [Ajax](./jquery.md#ajax)

# other framework or useful repository 其他有用的框架
* ## amap api 高德地图api
    * [official documents 官方文档](http://lbs.amap.com/api/javascript-api/summary)
    * [massmarker 海量点标记](http://lbs.amap.com/api/javascript-api/guide/overlays/massmarker)
        * [测试](./test/amap_massmarker.html)
        * 注意事项:
            如果两个点标记的坐标完全一样，那么就无法分开
* ## [Baidu Map API](http://lbsyun.baidu.com/index.php?title=jspopular3.0)
    * [测试页面](./test/baidu.html)
* ## Fontawesome 字体页面
    [测试](./test/fontawesome.html)
    * 直接使用
    ```
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <i class="fas fa-camera-retro"></i>
    ```
    * [find your icons](https://fontawesome.com/icons?d=gallery)
        * delete: `<i class="fas fa-minus-circle"></i>`
        * plus: `<i class="fas fa-plus"></i>`
    * 下载到本地后使用
    [教程](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
* ## [flatpickr](https://github.com/flatpickr/flatpickr)  *没有依赖的时间选择器*
* ## [富文本编辑器:summernote](./summernote网页编辑器.html)
* ## [富文本编辑器:tinymce](./tinymce.html)
* ## [jquery datetimepicker](https://github.com/xdan/datetimepicker) [example](./datetimepicker.html)
not very good use daterangepicker instead
* [jquery pagination plugin: 分页插件](./other_lib.md#jquery-pagination-plugin)
* ## [less](http://lesscss.org/)
    * 基础用法: `lessc source.less target.css`
    * Document
        ```
        <link rel="stylesheet/less" type="text/css" href="styles.less" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.0.2/less.min.js" ></script>
        ```
* ## [markjs](https://github.com/julmot/mark.js/) *高亮某个字段*
* ## [moment](../javascript-reference/moment.md)
* ## [sweetalert, 用来替换系统的alert](./sweetalert.html)
* ## [select2](./other_lib.md#select2)
* ## [selectize 用于方便地选择和输入,](http://selectize.github.io/selectize.js/) [github链接,](https://github.com/selectize/selectize.js) [例子](./selectize.html)
* ## [wing简单的开源框架](./wing.html)
* ## [ztree树状图](./ztree.html)
