#### Xiang Wang @ 2016-10-11 11:24:14

# 组件

## 基础 
* [官网地址](http://cn.vuejs.org/guide/components.html)

### 基础语法

    var MyComponent = Vue.extend({
        template: '<div>这是组件</div>',    # 组件的模版
        props: ['title'],   # 组件用的属性, 遇到驼峰式的名称CamelCase，在html要改成camel-case
    })
    Vue.component('my-component', MyComponent)

    <my-component title="标题" v-bind:friends='friends'></my-component>
