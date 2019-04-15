**Xiang Wang @ 2016-09-30 10:34:15**

[官网](https://cn.vuejs.org/v2/guide/)

### 教程
* 安装
```
<script src="https://unpkg.com/vue" type="text/javascript"></script>
```
* [基础](basic.md), [示例](basic.html)
```
var vm = new Vue({
    el: '#选择元素渲染',
    data: '渲染数据',
    delimiters: ["${", "}$"],  // 标签
})
```
    * 选项数据 [官网](https://cn.vuejs.org/v2/api/#选项-数据)
        ```
        watch: {
            a: function(val, oldval) {}
            b: 'someMethod',
            c: {
                handler: function(val, oldval) {},
                deep: true,
            }
        }
        ```
* [v-for循环](v-for.md), [示例](v-for.html)
* [过滤器](filter过滤器.md), [示例](filter过滤器.html)
* [指令](directive指令.md), [示例](directive指令.html)
* [组件](component组件.md), [示例](component组件.html), [进阶](component组件_进阶.html)
