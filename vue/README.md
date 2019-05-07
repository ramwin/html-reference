**Xiang Wang @ 2016-09-30 10:34:15**

[官网](https://cn.vuejs.org/v2/guide/)

## 基础
### 介绍-起步
### [基础](basic.md), [示例](basic.html)
```
<script src="https://unpkg.com/vue" type="text/javascript"></script>
var data = {
    'name': '姓名'
}
var vm = new Vue({
    el: "#profile",
    data: data,
    delimiters: ["${", "}$"],  // 标签
})
```

### 侦听器
[测试](watch.html)
* 配合lodash的debounce来进行延迟搜索
```
var vm = new Vue({
    watch: {
        question: function(newQuestion, oldQuestion) {
            this.answer = "Waiting for you to stop typing..."
            this.debouncedGetAnswer()
        },
    },
    created: {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function() {
            ....
        }
    },
})
```
* watch可以监听data的二级字段

### Class与Style绑定
[官网](https://cn.vuejs.org/v2/guide/class-and-style.html)
[测试](./class与style绑定.html)
> 直接把v-bind用于class和style,容易出错，所以vue做了专门的增强，可以用数组或者对象来渲染

* 绑定HTML Class
    * 对象语法
    ```
    v-bind:class="{ 'class-a': isA, 'class-b': isB }">  // isA和isB是vue的data
    ```
    绑定的数据对象也可以不定义在模板里
    ```
    <div v-bind:class="classObject"></div>
    data: {
        classObject: {
            active: true,
            'text-danger': false,
        }
    }
    ```
    甚至绑定到一个计算属性
    ```
    <div v-bind:class="classObject"></div>
    data: {
        isActive: true,
        error: null
    }
    computed: {
        classObject: function() {
            return {
                "active": this.isActive && !this.error,
                "text-danger": this.error  && this.error.type === 'fatal',
            }
        }
    }
    ```
    * [ ] 数组语法
    三元表达式: `v-bind:class="[classA, isB ? classB: '']">`
* 样式绑定: `v-bind:style="styleObject" data: {styleObject: {color:'red', 'fontSize:'13px'}}`

### [v-for循环](v-for.md), [示例](v-for.html)
### [过滤器](filter过滤器.md), [示例](filter过滤器.html)
### [指令](directive指令.md), [示例](directive指令.html)

### 表单输入绑定
使用`v-model`可以进行数据绑定
#### 基础用法
* 文本
```
<input v-model="message">
<p>Message is: {{ message }}</p>
```
* 多行文本
注意多行文本在textarea中使用`<textarea>{{text}}</textarea>`不会生效
#### 修饰符
* .lazy
默认情况下v-model在input事件触发后将更新，添加lazy的话，change时才会变化
* .number
自动自行parseFloat, 如果无法被解析就会返回原始的值
* .trim
过滤首尾的空白字符

## [组件](component组件.md)
[测试](component组件.html) [进阶测试](component组件_进阶.html)
### 组件事件

## api
### 选项数据 [官网](https://cn.vuejs.org/v2/api/#选项-数据)
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
