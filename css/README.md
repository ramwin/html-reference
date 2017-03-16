#### Xiang Wang @ 2016-09-14 15:05:53

# 基础
* [参考资料](https://www.douban.com/note/65562130/?type=like)
* [背景background](background背景.md)
* 选择器 [快速参考](./select选择器.md) [例子](./select选择器.html)

# 示例
* a标签

```
    target: _blank 新窗口 | _top 跳出当前框架
    text-decoration: none 是否有下划线
```
* 鼠标样式

```
    cursor: not-allowed  # 禁止
```
* 超出范围[overflow]:

```
    visible: 默认显示 | hidden: 不显示 | scroll: 滚动 | auto: 滚动 | inherit: 继承父级元素
```
* [display](./display.html)

```
    box-sizing: content-box(默认)|border-box|inherit;
```

* word-break:

```
    keep-all: 总是不换行 | break-all: 总是换行 | normal: 看是不是一个单词
```

* [链接(link)](./link.html)

```
    select:hover: {color: red}  # 注意这个会影响所有的子元素
```

* [before](./before伪类.html)

* [表格](./table.html)

```
    border-collapse: collapse(两个边框合并成1个) | seperate(默认的分别现实独立的边框)
```

* [伪类]

```
    select :last-child  最后一个子节点, 注意是选择出来的所有元素的最后一个
```
* [文字](./text.html)
    * [参考资料](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow)
```
    text-align: left|center|right|justify 靠左|居中|靠右|两端对其(最后一行靠左)
    word-break: keep-all 文字总是不换行
    
    // 设置超出范围就隐藏并显示省略号
    .ellipsis-text {
        white-space: nowrap;  // 要允许字符超出位置
        overflow: hidden;  // 超出去后要隐藏
        text-overflow: ellipsis;  // 隐藏以后要留下省略号, 如果是clip就是截断
    }
    .ellipsis-text:hover {
        overflow: visible; // 超出去后显示出来
    }
```
* [颜色](./color颜色.html)

* [padding]

```
    padding: 上 右 下 左 | 上 左右 下 | 上下 左右 | 上下左右
```
