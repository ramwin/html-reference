**Xiang Wang @ 2016-09-30 10:34:15**

[官网](https://cn.vuejs.org/v2/guide/)
## [基础](basic.md)
[旧的测试代码](basic.html)
[新的测试代码](基础.html)

### 安装
```
<script src="https://unpkg.com/vue" type="text/javascript"></script>
```
* 条件与循环

### 介绍

### Vue实例
* 创建一个Vue实例
```
var data = {
    'name': '姓名'
}
var vm = new Vue({
    el: "#profile",
    data: data,
    delimiters: ["${", "}$"],  // 标签
})
```

* 生命周期
<img src="./生命周期.png" width="600" height="1500"/>

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

### 条件渲染
* 使用`v-if`
```
直接使用v-if指令
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else-if="beautiful">Vue is beautiful!</h1>
<h1 v-else="normal">Vue is normal!</h1>
v-if必须用在元素上，使用template来包含几个元素，渲染时这个template不会显示
<template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</template>
```
用key来管理服用: vue的if切换时，有些元素不会重新渲染，导致有些输入框的输入不会清空。如果你一定要清空，请使用key来制定dom唯一
```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```
* 使用`v-show`
v-show仅仅做一个功能，设置dom的display是否为hidden

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
