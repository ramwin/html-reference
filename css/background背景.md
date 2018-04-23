

# 基础

* [参考资料](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background), [例子](./background背景.html)


```
    { background: yellow; }  # 把颜色当作背景
    { background-color: rgba(r,g,b,0.3) }  # 设置背景色和透明度：
    { background-image: ulr ( 'background.jpg' ) -47px 0 ; } /*后面的像素代表了显示图像哪部分*/  # 把图案当作背景
    background:url('火舞背景.jpg');  /*背景图片的位置*/
    background-size:1000px 600px;  /*背景图片的大小*/
    background-size: cover;  /* 背景图片自动缩放 */
    background-repeat:repeat-y;    /*只在y轴上进行重复*/
    background-position: 0px 0px  /*背景显示的区域设定*/
    background:  linear-gradient(90deg, #FFC0CB 50%, #00FFFF 50%);  /*渐变*/
```

## 相关属性:
* `background-size`: cover(可能看不到部分图片) contain(可能部门空白)
* `background-repeat`: 是否重复 [参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)
    * repeat-x: x轴重复
    * repeat-y: y轴重复
    * no-repeat: 不重复
* `background-position`: 背景图片的位置
    * top | bottom | left | right 上下左右


## 多重背景
* [参考文档](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
* **多重背景必须赋值给图片，只有最后一个背景可以是纯色**
