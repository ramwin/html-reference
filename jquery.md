**Xiang Wang @ 2019-06-18 09:59:59**

[jquery](http://api.jquery.com/)

## install
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
```
## [Ajax](http://api.jquery.com/category/ajax/)
* [jQuery.ajax](https://api.jquery.com/jQuery.ajax/)
    ```
    $.ajax({
            url:"/upload/file/",
            type: "POST",
            async: true,

            # 普通请求
            data: {
                data:reader2.result,
            },

            # json请求
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),

            beforeSend: function(request) {
                        request.setRequestHeader("Test", "Chenxizhang");
                    },
            success:function(responseTxt){
                console.log('ok');
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log("错误")
                console.log(jqXHR.responseJSON)
            },
    });
    ```
* [jQuery.get](https://api.jquery.com/jquery.get/)
`jQuery.get( url [, data ] [, success ] [, dataType ] )`
* [jQuery.getJSON](http://api.jquery.com/jQuery.getJSON/)
    ```
    $.getJSON("/text/", {}, Function( PlainObject data, String textStatus, jqXHR jqXHR )).fail(function(res) {
        toastr.error(res.responseText);
    })
    ```
* [jQuery.post](http://api.jquery.com/jQuery.post/)
    ```
    jQuery.post( url [, data ] [, success ] [, dataType ] )
    ```
## [UI api](https://api.jqueryui.com/)
* [toggle](https://api.jqueryui.com/toggle/): `$('#id').toggle()`
