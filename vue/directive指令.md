#### Xiang Wang @ 2016-09-30 11:45:23

# v-directive指令

## 基础
    
    Vue.directive('name', {
        bind: function () {
            console.log("绑定指令demo");
        },
        update: function () {
            console.log("正在应用");
            this.el.innerHTML = 
               'name - '       + this.name + '<br>' +                              
               'expression - ' + this.expression + '<br>' +                        
               'argument - '   + this.arg + '<br>' +                               
               'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +         
               'value - '      + value                  
        },
    });

    Vue.directive('name2', function(value) {  # 仅仅帮定了update的方法
    ));
