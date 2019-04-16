**Xiang Wang @ 2019-04-16 16:02:22**

* [官网](https://getbootstrap.com/docs/4.3/components/carousel/)

### How it works
* 如果有自己的样式需要，要自己来写样式。如果几个carousel-item高度不一样，carousel会在动画结束后变得和当前的item一样高
* 必须有一个carousel-item是active以撑开carousel本身。
如果Page Visibility API支持的话，当页面不展示的时候是不会滚动的，避免资源浪费
### Example
* 基础例子
```
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```
* 需要carousel垂直剧中，限制高度
```
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-flex align-items-center" style="max-height: 200px;">
        <img src="{% static 'homepage/img/轮播图1.jpg' %}"
          class="d-block w-100" alt="...">
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center" style="max-height: 200px;">
        <img src="{% static 'homepage/img/轮播图2.jpg' %}"
          class="d-block w-100" alt="...">
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-flex align-items-center" style="max-height: 200px;">
        <img src="{% static 'homepage/img/轮播图3.png' %}"
          class="d-block w-100" alt="...">
      </div>
    </div>
  </div>
</div>

```
