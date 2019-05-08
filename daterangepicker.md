**Xiang Wang @ 2018-07-26 16:50:47**

[github链接][1]  
[官网][2]
## [Example](./daterangepicker.html)
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
<script>
$('input[name="dates"]').daterangepicker(options);
</script>
```

## [interactive config generator](http://www.daterangepicker.com/#config)
## [option](http://www.daterangepicker.com/#options)
* `common option`: startDate, endDate, minDate, maxDate, timePicker, timePickerIncrement, timePicker24Hour, timePickerSeconds
* `seldom used option`: showWeekNumbers, showISOWeekNumbers, isInvalidDate, isCustomDate, 
* `ranges`: Set predefined date ranges the user can select from.
* `showDropdowns`: whether use can select year and month or not
* `showCustomRangeLabel`: Displays "Custom Range" at the end of the list of predefined ranges
* `alwaysShowCalendars`: Normally, if you use the ranges option to specify pre-defined date ranges, calendars for choosing a custom date range are not shown until the user clicks "Custom Range". When this option is set to true, the calendars for choosing a custom date range are always shown instead.
* `style option`: opens: ('left'/'right'/'center') | drops: ('down'/'up') | buttonClasses | applyButtonClasses | cancelButtonClasses 
* `local`: Allows you to provide localized strings for buttons and labels, customize the date format, and change the first day of week for the calendars. Check off locale in the configuration generator to see how to customize these options.
* `singleDatePicker`:  Show only a single calendar to choose one date, instead of a range picker with two calendars.
* `autoApply`: 
* `linkedCalendars`: When enabled, the two calendars displayed will always be for two sequential months
* `autoUpdateInput`: whether the date range picker should automatically update the value of the `<input>` element it's attached to at initialization and when the selected dates change
* `parentEl`: (string) jQuery selector of the parent element that the date range picker will be added to, if not provided this will be 'body'

## Methods
* setStartDate(Date or string)
* setEndDate(Date or string)

## [Events](http://www.daterangepicker.com/#events)
```
$('#daterange').on('apply.daterangepicker', function(ev, picker) {
  console.log(picker.startDate.format('YYYY-MM-DD'));
  console.log(picker.endDate.format('YYYY-MM-DD'));
});
```
* `show.daterangepicker`: Triggered when the picker is shown
* `hide.daterangepicker`: Triggered when the picker is hidden
* `showCalendar.daterangepicker`: Triggered when the calendar(s) are shown
* `hideCalendar.daterangepicker`: Triggered when the calendar(s) are hidden
* `apply.daterangepicker`: Triggered when the apply button is clicked, or when a predefined range is clicked
* `cancel.daterangepicker`: Triggered when the cancel button is clicked

## locale:
```
locale: {
  applyLabel: "确定",
  cancelLabel: '取消',
  fromLabel: '起始时间',
  toLabel: '结束时间',
  customRangeLabel: '自定义',
  daysOfWeek: ['日', '一', '二', '三', '四', '五', '六' ],
  monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
  firstDay: 1,
}
```


[1]: https://github.com/dangrossman/daterangepicker
[2]: http://www.daterangepicker.com/
