**Xiang Wang @ 2019-06-18 10:01:58**


## [jquery pagination plugin](http://josecebe.github.io/twbs-pagination/)
分页插件
* [website](http://josecebe.github.io/twbs-pagination/)
* demo
```
<script src="https://raw.githubusercontent.com/josecebe/twbs-pagination/master/jquery.twbsPagination.js"></script>
<div id="pagination-demo"></div>
<script>
  $('#pagination-demo').twbsPagination({
    totalPages: 35,
    visiblePages: 7,
    first: "第一页",
    prev: "上一页",
    next: "下一页",
    last: "最后一页",
    onPageClick: function (event, page) {
        $('#page-content').text('Page ' + page);
    }
  });
</script>
```
* options
    * 
* methods:
    * destroy
    ```
    var $pagination = $('selector');
    $pagination.twbsPagination('destroy');  // use destroy and recreate to enable dynamic total page
    $pagination.twbs-pagination(options);
    ```


## select2
*Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.*  
* Document
    1. get started, installation
    ```
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <select></select>
    $("#id").select2()
    ```

    6. data source
    ```
    $('.js-data-example-ajax').select2({
      minimumInputLength: 2, // Minimum search term length
      ajax: {
        url: 'https://api.github.com/search/repositories',  // the url can also be dynamic
        dataType: 'json'
      },
      processResults: function (data) {
        // Tranforms the top-level key of the response object from 'items' to 'results'
        // you can also add some other tranforms to ensure the results is kind of [{"id": 1, "text": "text"}, {"id": 2, "text": "text2"}]
        return {
          results: data.items
        };
      },
    });
    ```

    9. [Dynamic option create](https://select2.org/tagging)
    ```
    tags: true,  // add the tag whose value is the input value
    createTag: function(params) {return {"id": null, "text": params.term}}  // customer the tag created
    insertTag: function(data, tag) {data.push(tag)}  // determine where the tag should be placed
    ```

### 基础

* [官网](https://select2.org/)
* [例子](./select搜索选择.html)
```
    $("#id").select2().on('select2:select', function(evt){})
    $("#id").select2().val()
    $("#id").select2("destroy");
    ${"#id").select2({
        placeholder: 'Select an option',
    });
```


### 通用参数
* allowClear: false  *是否允许清空*
* placeholder: '请选择' *注释*
* 多选
    1. 直接在html里面添加 `multiple`
    2. 使用参数 `multiple: true`

### 常用功能
* [使用远程数据](https://select2.github.io/options.html#ajax)
```
ajax: {
    url: '/example/api',
    processResults: function (data) {
      return {
        results: data.items
      };
    }
  }
```
