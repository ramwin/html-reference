**Xiang Wang @ 2016-08-23 10:09:38**

## Form参考
[测试代码](./test/form.html)

### input 种类
* [ ] button
* [ ] [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
```
<fieldset>
  <legend>Choose some monster features</legend>
  <div>
    <input type="checkbox" id="scales" name="feature"
      value="scales" checked />
    <label for="scales">Scales</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="feature"
      value="horns" />
    <label for="horns">Horns</label>
  </div>
  <div>
    <input type="checkbox" id="claws" name="feature"
      value="claws" />
    <label for="claws">Claws</label>
  </div>
</fieldset>
```

* [ ] datalist
* [ ] fieldset
* [ ] form
#### input [官网](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
    * type=image
    this is used to replace a submit button with image instead of text. **It doen't mean select a image**
    * [type=file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
    `<input name="myFile" type="file">`  
    if you use file input, you should add `enctype="multipart/form-data"` property to form
        * multiple
        * accept
            * `image/png|.png` only the PNG files
            * `accept="image/png, image/jpeg"` or `accept=".png, .jpg, .jpeg"`: accept PNG or JPEG files
            * `accept="image/*"`: accept any file with an image/* MIME type
        * required
* [ ] label
* [ ] legend
* [ ] meter
* [ ] optgroup
* [ ] option
* [ ] output
* [ ] progress
* [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
```
<!-- The second value will be selected initially -->
<select name="text"> <!--Supplement an id here instead of using 'text'-->
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```
* [ ] textarea

### 基础参数
    ```
    action="" # 访问的url
    method="POST" # 访问的方法
    enctype="multipart/form-data" # 如果是上传文件的话需要这个
    onsubmit="return alert('I am goint to submit')" # 上传之前的做法, 有了return 可以return false的时候组织提交
    ```

### 常用元素
* input
    ```
    type="类型" # text, number, radio, checkbox, button, file
    placeholder="默认显示的字符串"
    name="name" # 用来form获取数据
    size=50 # 尺寸
    ```

* 文件
    ```
    [参考链接](http://www.runoob.com/jsref/dom-obj-fileupload.html)
    type=file
    [mime_type](http://www.w3school.com.cn/media/media_mimeref.asp)
    accept="" # 接收类型, 已弃用
    ```

* 单选框
    ```
    type = "radio"
    <input type="radio" name="gender" value="女">女<br>
    <input type="radio" name="gender" value="男">男<br>
    ```


* 多选框
    ```
    type = checkbox
    <input type="checkbox" name="gender" value="女">女<br>
    <input type="checkbox" name="gender" value="男">男<br>
    ```

* 下拉列表
    ```
    <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab" selected>Saab</option>  # 默认选中
    </select>
    ```

* 文本编辑
    ```
    <textarea name="textarea" rows="10" cols="50">write something</textarea>
    ```

* 复选框
    ```
    <input type="checkbox" name="fullday">
    ```

* fieldset
    * 用来把一些相关的属性放在一个区域内
    * `legend`: fieldset的名字或者描述

* datalist
    * 用来让用户输入的时候有个选项

* optgroup
    * 几个select构成一个group
