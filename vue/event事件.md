#### Xiang Wang @ 2016-12-08 10:23:23


# 基础
[链接](http://cn.vuejs.org/v2/guide/components.html#自定义事件)
    var v = new Vue({
        el: ,
        events: {
            refresh: function() {
                this.function()
            }
        }
    })
    var v = Vue.extend({
        methods: {
            save: function() {
                this.$dispatch('refresh') 
            }
        }
    })
