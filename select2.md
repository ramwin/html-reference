#### Xiang Wang @ 2016-12-21 17:06:04

### 基础

* [官网](https://select2.org/)
* [例子](./select搜索选择.html)
```
    $("#id").select2().on('select2:select', function(evt){})
    $("#id").select2().val()
    $("#id").select2("destroy");
    ${"#id").select2({
        placeholder: 'Select an option',
    });
```


### 通用参数
* 多选
    1. 直接在html里面添加 `multiple`
    2. 使用参数 `multiple: true`

### 常用功能
* [使用远程数据](https://select2.github.io/options.html#ajax)
```
ajax: {
    url: '/example/api',
    processResults: function (data) {
      return {
        results: data.items
      };
    }
  }
```
