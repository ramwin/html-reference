#### Xiang Wang @ 2016-09-12 17:47:04

# 基础
* display: flex;  # 外面的div
* display: inline-flex;  # 内部的div

## 容器属性
* flex-direction: row | row-reverse | column | column-reverse;  # 主轴方向
* flex-wrap: nowrap | wrap | wrap-reverse;  # 主轴是否换行
* flex-flow: <flex-direction> || <flex-wrap>; 
* justify-content: flex-start | flex-end | center | space-between | space-around  # 主轴的对其方式
* align-items flex-start | flex-end | center | baseline | stretch;  # 交叉轴的对其方式
* align-content  # 多根主轴的对其方式

## 项目属性
* order: 越大越靠前，默认是0
* flex-grow: 项目放大比例，默认是0(存在剩余空间也不放大）
* flex-shrinik: 项目缩小比例，默认是1
* flex-basis: 计算多余空间是，项目占用的空间，默认auto
* flex: <flex-grow> <flex-shrink> <flex-basis>
* align-self: auto | flex-start | ... |  # 设定单个item和是否继承父级元素还是使用自己的方式展示
* 最后一个元素靠右: margin-left:auto
