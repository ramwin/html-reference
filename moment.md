#### Xiang Wang @ 2017-03-03 14:26:22

## 基础

```
    var now = moment(new Date())
    moment(new Date()).format("YYYY-MM-DD")
    moment("20111031", "YYYYMMDD")  // 把字符串变成时间
```


## 方法
```
    a.year()  // 年
    a.month()  // 月份(注意是从0开始)
    a.date()  // 日
    a.day()  // 周几
    a.calendar()  // 显示方便看的字符串, Tomorrow at 4:32 PM
```

## 时间计算
    a.add(1, 'days')  // 直接操作a， 不会生成新的对象
    a2 - a1 // 返回两个时间的差，单位毫秒
