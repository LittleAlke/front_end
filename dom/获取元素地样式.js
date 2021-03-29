function getStyle(obj,name) {
    // 变量未找到会报错，属性没找到会undefinid，所以此处用window.属性
    if (window.getComputedStyle) {
        //一般情况
        return getComputedStyle(obj,null)[name];
    }else{
        //IE8使用的方法
        return obj.currentStyle[name];
    }
}