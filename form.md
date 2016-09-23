#### Xiang Wang @ 2016-08-23 10:09:38

## 通用

### form
    action="" # 访问的url
    method="POST" # 访问的方法
    enctype="multipart/form-data" # 如果是上传文件的话需要这个
    onsubmit="alert('I am goint to submit')" # 上传之前的做法

### input
    type="类型" # text, number, radio, checkbox, button, file
    placeholder="默认显示的字符串"
    name="name" # 用来form获取数据
    size=50 # 尺寸


## 文件
    [参考链接](http://www.runoob.com/jsref/dom-obj-fileupload.html)
    type=file
    accept="" # 接收类型, 已弃用


## 单选框
    type = "radio"
    <input type="radio" name="gender" value="女">女<br>
    <input type="radio" name="gender" value="男">男<br>


## 多选框
    type = checkbox
    <input type="checkbox" name="gender" value="女">女<br>
    <input type="checkbox" name="gender" value="男">男<br>
