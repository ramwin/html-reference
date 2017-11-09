#### Xiang Wang @ 2016-09-14 15:05:53

### 基础
* [MDN Mozilla官方指南](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
* [豆瓣快速参考](https://www.douban.com/note/65562130/?type=like)
* [背景background](background背景.md)
* 选择器 [快速参考](./select选择器.md) [例子](./select选择器.html)

### 示例
* a标签
```
    target: _blank 新窗口 | _top 跳出当前框架
    text-decoration: none 是否有下划线
    cursor: pointer 鼠标移动上去后变成小手
```
* border边框 [示例](./border.html)
    * border: `1px solid red;`
    * [border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) *可以设置成虚线框，双实线*

* [box-shadow阴影](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
    ```
    box-shadow:  inset | offset-x | offset-y | blur-radius | spread-radius | color
    inset: 不写就是外边框，否则就是内边框
    blur-radius: 扩散程度(越大，阴影扩散得越开, 也就越淡)
    spread-radius: 阴影放大比例(可以为负值)
    ```
* float [参考](https://developer.mozilla.org/en-US/docs/Web/CSS/float) [测试](float.html)
    * value: left|right|none|inline-start|inline-end
    * __float会把元素脱离当前的流，使得自身的高度无法撑开父元素__
    * float的元素不仅仅会飘动，直到遇到了父元素的边框或者是其他的浮动元素

* ul列表
    * `list-style: none|inside|outside|url` # 列表样式 

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

* [伪类]()
    * [参考资料](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
    * [案例](./pseudo-class伪类.html)

    * 基础
    ```
    select :last-child  最后一个子节点, 注意是选择出来的所有元素的最后一个
    ::placeholder 提示文字
    :checked 被选择的
    :before {  # 给元素之前添加元素
      content: "9:00";
      position: absolute;
      left: -10px;
      top: -10px;
    }
    ```

    * :focus  `input输入框变成焦点的时候`
        ```
        input:focus {
            outline: none
        }
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
    * [关键字颜色参考,尽量使用下面的这个链接](https://developer.mozilla.org/en/docs/Web/CSS/color_value#Color_keywords)
    * [颜色示例](./color颜色.html)

* [padding]

```
    padding: 上 右 下 左 | 上 左右 下 | 上下 左右 | 上下左右
```
