**Xiang Wang @ 2016-10-11 11:24:14**

[官网地址](http://cn.vuejs.org/guide/components.html)
[测试](./component组件.html)


### 基础语法
```
var MyComponent = Vue.extend({
    template: '<div>这是组件</div>',    # 组件的模版
    props: ['title'],   # 组件用的属性, 遇到驼峰式的名称CamelCase，在html要改成camel-case
})
Vue.component('my-component', MyComponent)

# 默认为单向绑定，父元素改变，组件就改变。如果是一次性，用 :mgs.once, 双向的用 :msg.sync
<my-component title="标题" v-bind:friends='friends'></my-component>
```

### props
```
    props: {
        'name': {
            type: String,
            required: true,
        },
        'obj': {
            type: Object,
            required: false,
            default: function() {
                return {}
            }
        }
    }
```

### 自定义事件
```
// 子组件绑定时间
<blog-post v-on:enlarge-text="enlargeText()"></blog-post>
// 子组件触发事件
$emit('enlarge-text', detail);  // detail可以是数字或者对象等
// 父组件处理事件
methods: {
    "enlargeText": function(detail) {
    }
}
```

### nextTick
```
# 用来做一些和dom有关的事，所以当dom被刷新完成后才触发这些事件
this.$nextTick(function() {
    $('input', this.$el).focus();
})
```
