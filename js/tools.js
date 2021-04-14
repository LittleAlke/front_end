/*
    要执行动画的对象、要执行动画的样式、执行动画的目标位置、移动的速度、回调函数
*/
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(() => {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;

        // 防止移动过量
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            // 动画结束 执行回调函数
            callback && callback();
        }
    }, 30);
}

// 获取对象的样式
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        // IE8
        return obj.currentStyle[name];
    }
}

// 判断obj是否有cn类
function hasClass(obj, cn) {
    // b2前后
    // var reg = /\bb2\b/;
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}

// 向obj中添加类为cn的属性
function addClass(obj, cn){
    if(!hasClass(obj, cn)){
        obj.className += " "+cn;
    }
}

// 删除obj中类为cn的属性
function removeClass(obj, cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg,"");
}

// 切换一个类
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    }else{
        addClass(obj, cn);
    }
    
}