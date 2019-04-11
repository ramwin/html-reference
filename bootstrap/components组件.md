**Xiang Wang @ 2019-04-11 16:01:13**

[官网](https://getbootstrap.com/docs/4.1/components/alerts/)

## [Navbar](https://getbootstrap.com/docs/4.3/components/navbar/)
导航栏，用来导航到其他页面  
The **navbar** is different from **nav**. It means a different place while the navs represent the related data but in different tab.
You can get more information from [here](https://stackoverflow.com/questions/14022135/in-twitter-bootstrap-what-is-the-difference-between-the-navbar-and-nav-pills) and [there](https://ux.stackexchange.com/questions/23527/what-is-the-difference-between-a-navigation-bar-and-tabs)
```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>
```
### How it works

### Supported content
* .navbar-brand
用于公司，产品，项目名，如果用图片，注意要自定义尺寸来适应
```
<a class="navbar-brand" href="#">
  <img src="" width="30" height="30" alt="">
</a>
```
* .navbar-nav
100%高度的导航
* .navbar-toggle
支持collapse插件的按钮，点击后隐藏显示navbar
* .form-inline
form controls和actions
* .navbar-text
高度居中的字符串
* .collapse.navbar-collapse
达到breakpoint时自动隐藏

### Placement
fixed navbars会让这个navbar脱离dom流，所以要注意给body加个padding来防止挡住其他元素, 高度为60px或者3.75rem
* fixed-top
* fixed-bottom
* sticky-top
