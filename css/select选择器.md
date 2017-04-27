#### Xiang Wang @ 2017-02-08 10:33:38

# 基础
[菜鸟网站参考](http://www.runoob.com/cssref/css-selectors.html)
```
    a b // a的后代b
    a > b // a的子元素b
    a + b // a的兄弟元素b
    a - b // a的相邻兄弟元素b
    .a.b // 同时有a b 两个class的
    // 伪类
    div:first-child {  // 这是first-child是指选择到的结果里面的first-child
        color: red
    }
    // 属性选择器
    input[type=submit] {
    }
    input[readonly] {
    }
```


# 进阶
```
    [父选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
```
