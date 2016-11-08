#### Xiang Wang @ 2016-09-12 11:02:16
* <a href="#v-for">列表渲染</a>

# 基础示例
    var data = {
        'name': '姓名'
    }
    var vm = new Vue({
        el: "#profile",
        data: data,
    })
# 实例方法
* data: 数据
* el: 绑定dom   `vm.$el === document.getElementById('example')`
* `created, beforeCompile, compiled, ready, destroyed`
* watch: 变化的调用 `vm.$watch('a', function (newVal, oldVal) {})`
* computed: `{ fullname: function() {return self.name}}`
* methods: `{say: function(msg) { alert(msg) }}`
* methods: `{say2: function(msg, event) { event.preventDefault() }`

# 数据绑定
* 基础绑定 `{{msg}}`
* 一次性帮定 `{{* msg }}`
* 双向帮顶 `v-model="msg"`
* 基础操作 `{{number +1}} {{ok? 'YES': 'NO' }}`
* 过滤器 `{{ string | capitalize }}`
* 指令 `<p v-if="greeting">Hello!</p>`
* 参数 `<a v-bind:href="url"></a> <a v-on:click="doSth"></a>` `:href="url"` `@click="doSomething"`

# class绑定
* 基础: `class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB }">`
* 直接绑定:
    `data: { classObject: { 'class-a': true, 'class-b': false } }`
    `v-bind:class="classObject"`
* 三元表达式: `v-bind:class="[classA, isB ? classB: '']">`
* 样式绑定: `v-bind:style="styleObject" data: {styleObject: {color:'red', 'fontSize:'13px'}}`

# 条件渲染
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
    <template v-if="ok"></template> # 这样在template里面就可以添加很多 dom 了

<div id="v-for"></div>
# 列表渲染
    <li v-for="friend in friends">{{$index}}: {{friend.name}}</li>
    <li v-for="(index, item) in items" track_by="_uid"></li>

### 替换数组
    example1.items.push({'name':'名字'});
    example1.items = exapmle1.items.filter(function (item) { return item.message.match(/Foo/) })
    example1.items[0] = {}  # 不会出发函数，改变dom
    exapmle1.items.$set(0, {name: 'Jake'})  # 用这种写法

# 事件绑定
    <button v-on:click="say('hi')">Say Hi</button>
    <button v-on:click="say2('hi', $event)">Say Hi2</button>

### 修饰符
* v-on:click:stop="doSth"  # 组织单击事件冒泡
* v-on:submit.prevent="onSubmit"  # 组织提交事件的重载页面
* v-on:click.stop.prevent="doSth"  # 修饰符可以串联
* v-on:submit.prevent  # 修饰符单独用
* v-on:click.self="doSth"  # 只有点击元素本身而不是子元素才会触发
* `<input v-on:keyup.13="doSth">`  # 设置固定的按键才能触发
    * `<input v-on:enter|tab|delete|esc|space|up|down|left|right="">`  # 使用字符串容易记忆

# 表单控件绑定
* `<span>您好: {{name}}</span>` `输入名字: <input type="text" v-model="name">`
* `<input type="checkbox" v-model="checked"><label for="checkbox">{{checked}}</label>`
    * v-bind:true-value|false-value="a" 被选择的时候产生的数值
    * v-bind:value=""  # 自定义选择后的数值
    * lazy  # 不是时时输入就改变，而是change触发后才改变数值
    * debounce  # 最小延迟，一段时间不变后才触发


<div id="end"></div>
