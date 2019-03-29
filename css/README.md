**Xiang Wang @ 2016-09-14 15:05:53**

## 基础
* [MDN Mozilla官方指南](https://developer.mozilla.org/en-US/docs/Web/CSS)
* 选择器 [快速参考](./select选择器.md) [例子](./select选择器.html)
* [训练](https://flukeout.github.io/)
* 引入
> <link rel="stylesheet" href="./source/css.css">

## background and border 背景和边框 [示例](./border.html) [官网](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Backgrounds_and_Borders)
### 背景
* [背景background](background背景.md)

### border边框
* 边框
    * border: `1px solid red;`
    * border-style [官网](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) *可以设置成虚线框，双实线*
    ```
    none|dotted|inset|dashed(上下) solid(左右)|dashed(上) double(左右) none(下)|dashed(上) groove(右) none(下) dotted(左)  
    inset, outset 代表了看上去像突出或者凹进去  
    groove, ridge 代表了边框看上去是凹槽或者凸脊 
    ```
* border-radius 圆角边框 [官网](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
border-radius可以使用一个圆或者两个圆来描绘  
这个属性是作用于整个background的, 就算没有border,也会变成切割状态(根据background-clip属性来决定样式)
* border-width 边框宽度
```
    border-radius: 10px; 四周
    border-radius: 10px 5%; 左上右下 | 右上左下
    border-radius: 2px 4px 2px; 左上 | 右上左下 | 右下
    border-radius: 1px 0 3px 4px; 左上 | 右上 | 右下 | 左下
    border-radius: 10px 5% / 20px 25em 30px 35em;  横向的圆角 / 纵向的圆角
```

## CSS types
`CSS types`是一些CSS能够接受的类

### gradient 渐变 [官网](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)
gradient是一种`<image>`, 所以可以用于background属性的value.  
但是也正因为他是image, 所以它不能用于color或者background-color  
如果要实现text的gradient, 请参考[this](https://css-tricks.com/snippets/css/gradient-text/). 把文字变成透明, 添加背景, 设置`backgroun-clip: text`
```
background: linear-gradient(white, black);
background: radial-gradient(white, black);
background: repeating-linear-gradient(white, black 50px);
background: repeating-radial-gradient(white, black 50px);
```

* linear gradient [官网](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
```
.linear-gradient {
    backgroun: linear-gradient(to right,
        red, orange, yellow, green, blue, indigo, violet);
    )
}
```
    * 语法
    ```css
    linear-gradient(45deg, blue, red);  /* 45度角 */
    linear-gradient(to left top|to top|to bottom|to right, blue, red);  /* 根据div的边角来 */
    linear-gradient(0deg, blue, green 40%|length, red);  /* 显示前面40%从蓝色到绿色, 然后后面变红色 */
    ```


## Selector选择器
### Simple Selectors
### Attribute Selectors
### Pseudo-classes and pseudo-elements
* [x] nth-child
这个nth-child可以加一个参数，代表匹配到什么就选择
odd和even输入时代表选择奇数或者偶数
An+B代表了符合An+B的元素
```
tr:nth-child(odd) 一个表格里面第1, 3, 5 等奇数行
:nth-child(7)  第7个元素
:nth-child(3n+4)  第 4, 7, 10...个元素
:nth-child(-n+3)  前3个元素
p:nth-child(n)  就是p, 但是拥有更高的specificity
p:nth-child(1) or p:nth-child(0n+1)  和:first-child一样，但是拥有更高的specificity
```
### Combinators and multiple selectors

## a标签
```
    target: _blank 新窗口 | _top 跳出当前框架
    text-decoration: none 是否有下划线
    cursor: pointer 鼠标移动上去后变成小手
```

## [box-shadow阴影](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
    ```
    box-shadow:  inset | offset-x | offset-y | blur-radius | spread-radius | color
    inset: 不写就是外边框，否则就是内边框
    blur-radius: 扩散程度(越大，阴影扩散得越开, 也就越淡)
    spread-radius: 阴影放大比例(可以为负值)
    ```

## [Flex 弹性盒子布局](../flex/README.md)

## float [参考](https://developer.mozilla.org/en-US/docs/Web/CSS/float) [测试](float.html)
    * value: left|right|none|inline-start|inline-end
    * __float会把元素脱离当前的流，使得自身的高度无法撑开父元素__
    * float的元素不仅仅会飘动，直到遇到了父元素的边框或者是其他的浮动元素

## ul列表
    * `list-style: none|inside|outside|url` # 列表样式 

## 鼠标样式

```
    cursor: not-allowed  # 禁止
```
## 超出范围[overflow]:

```
    visible: 默认显示 | hidden: 不显示 | scroll: 滚动 | auto: 滚动 | inherit: 继承父级元素
```
## display [测试页面](./display.html) [官网](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
```
    box-sizing: content-box(默认)|border-box|inherit;
```

## word-break:

```
    keep-all: 总是不换行 | break-all: 总是换行 | normal: 看是不是一个单词
```

## [链接(link)](./link.html)
`select:hover: {color: red}  # 注意这个会影响所有的子元素`

## [before](./before伪类.html)

## [表格](./table.html)

```
    border-collapse: collapse(两个边框合并成1个) | seperate(默认的分别现实独立的边框)
    min-width: 对于th和td，一列的宽度是取决于最窄的那个
```

## [伪类]()
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

## [文字](./text.html)
### [参考资料](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow)
* text-align: left|center|right|justify 靠左|居中|靠右|两端对其(最后一行靠左)
* line-height: 100px; 配合line-height可以让文字处于正中间
* [vertical-aligh](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align): top|bottom|middle
* word-break: keep-all 文字总是不换行
* 设置超出范围就隐藏并显示省略号
```
.ellipsis-text {
    white-space: nowrap;  // 要允许字符超出位置
    overflow: hidden;  // 超出去后要隐藏
    text-overflow: ellipsis;  // 隐藏以后要留下省略号, 如果是clip就是截断
}
.ellipsis-text:hover {
    overflow: visible; // 超出去后显示出来
}
```
* word-spacing: 单词之间的尺寸
* letter-spacing: 字母之间的尺寸

## [颜色](./color颜色.html)
* [关键字颜色参考,尽量使用下面的这个链接](https://developer.mozilla.org/en/docs/Web/CSS/color_value#Color_keywords)
* [颜色示例](./color颜色.html)

## [padding]

```
    padding: 上 右 下 左 | 上 左右 下 | 上下 左右 | 上下左右
```

## Position [官网](https://developer.mozilla.org/en-US/docs/Web/CSS/position) [测试](./position.html)
* [ ] static
* [ ] relative
* ### absolute
从文档流(normal flow of the document)中脱离, 根据最近一个定位的父级元素来定位.  
因为没有了position, 所以这时候的定位根据 top, right, bottom, left.  
```
.right {
  position: absolute;
  right: 0px;
}
```
* [ ] fixed
* [ ] sticky

## Scroll 滚动
[测试用内部div的滚动取代body的滚动](./scroll.html)
[测试各种滚动的属性](./scroll-type.html)
* [ ] scroll-behavior
当用户点击anchor的时候，是直接跳转过去还是滑动过去
* [ ] scrollbar-color
* [ ] scrollbar-width
* 隐藏滚动条
```
cssselector::-webkit-scrollbar {
  display: none;
}
```

## [Specificity 权重](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
* [test 测试](specificity.html)

## [z-index]()
[官网](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
[测试](./z-index.html)

## CSS3
### filter 滤镜 [官网](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

```css
    /* URL to SVG filter */
    filter: url("filters.svg#filter-id");
    /* <filter-function> values */
    filter: blur(5px);
    filter: brightness(0.4);
    filter: contrast(200%);
    filter: drop-shadow(16px 16px 20px blue);
    filter: grayscale(50%);
    filter: hue-rotate(90deg);
    filter: invert(75%);
    filter: opacity(25%);
    filter: saturate(30%);
    filter: sepia(60%);
    /* Multiple filters */
    filter: contrast(175%) brightness(3%);
    /* Global values */
    filter: inherit;
    filter: initial;
    filter: unset;
```

### keyframes 动画
[菜鸟教程](http://www.runoob.com/css3/css3-animations.html)
[官网](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
[测试](./keyframes.html)
