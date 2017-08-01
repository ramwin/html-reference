#### Xiang Wang @ 2016-12-21 17:06:04

# 基础
```
    $("#id").select2().on('select2:select', function(evt){})
    $("#id").select2().val()
    $("#id").select2("destroy");
```


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
