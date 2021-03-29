function bind(obj, eventStr, callback) {
    if (obj.addEventListener) {
        // 大部分浏览器方式
        obj.addEventListener(eventStr,callback,false);
    }else
        // IE8及以下
        obj.attachEvent("on"+eventStr,function () {
            callback.call(obj);
        });
    }