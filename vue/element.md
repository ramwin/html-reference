Xiang Wang @ 2019-11-19 23:13:13


[测试](./test_element.html)

#### Basic组件
##### layout布局  
注意是用middle, 不是center
```
<el-row
  type="flex"
  justify="start/end/center/space-between"
  align="top/middle/bottom"
>
</el-row>
```

##### [Button按钮](https://element.eleme.cn/#/zh-CN/component/button)

```
43
<el-button plain type="primary">主要按钮</el-button>
<el-button round type="success">成功按钮</el-button>
<el-button circle type="info">信息按钮</el-button>
<el-button disabled type="warning">警告按钮</el-button>
<el-button type="danger">危险按钮</el-button>
<el-button type="text">文字按钮</el-button>
```

* size
* type
* plain
* round
* circle
* loading
* disabled
* icon
* autofocus
* native-type

#### [Form组件](https://element.eleme.cn/#/zh-CN/component/radio)
##### [Radio 单选框](https://element.eleme.cn/#/zh-CN/component/radio)
* 基础用法
```
使用单选框组
<el-radio-group v-model="radio">
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
</el-radio-group v-model="radio">
直接使用单选框
<el-radio v-model="radio" label="1">备选项</el-radio>
<el-radio v-model="radio" label="2">备选项</el-radio>
按钮样式
<el-radio-button size="medium">使用button</el-radio-button>
```
* 属性
    * value/v-model
    * label
    * disabled
    * border
    * size
    * name
    * change事件
* Radio-group
    * text-color: 激活的颜色
    * fill: 激活的背景
    * change: 事件
* Radio-button
##### Input输入框
```
<el-input /> 得到的是string
<el-input-number /> 得到的是数字
```

##### Select选择器
```
<el-select v-model="value" placeholder="请选择">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </el-option>
</el-select>
<script>
options: [{
    value: '选项1',
    label: '黄金糕'
}, {
    value: '选项2',
    label: '双皮奶'
}, {
    value: '选项3',
    label: '蚵仔煎'
}, {
    value: '选项4',
    label: '龙须面'
}, {
    value: '选项5',
    label: '北京烤鸭'
}],
</script>
```

##### 其他
* [ ] InputNumber计数器

* [ ] Cascader级联选择器

##### slider滑块
* v-model绑定值
```
<el-slider v-model="value1"></el-slider>
```
* change 值改变时触发，返回对应的value

##### [DatePicker](https://element.eleme.io/#/zh-CN/component/date-picker)  
* 选择日期范围
```
<el-date-picker
    v-model="value1"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期">
</el-date-picker>
```

##### DateTimePicker

##### Upload
文件上传
    * 案例
    ```
    <el-upload
      multiple
      <el-button size="small" type="primary">点击上传</el-button>
    >
    </el-upload>
    ```
    * 参数
    ```
    action: 上传地址
    data: 上传的form表单额外参数
    headers: 上传的header
    on-success: function(response, file, fileList) {
    }
    on-remove: function(file, fileList) {
    }
    ```

#### Notice提示
##### loading 加载

* 整页加载
```
<el-button v-loading.fullscreen.lock="<loading>">
</el-button>
通过控制loading可以选择是否完成
```

##### MessageBox
```
this.$alert('这是一段内容', '标题名称', {
  // confirmButtonText: '确定',
  callback: action => {
    this.$message({
      type: 'info',
      message: `action: ${ action }`
    });
  }
});
```

#### Navigation
* NavMenu
* Tabs
内容有关联，但是类别不同
```
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
```