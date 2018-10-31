//获取元素相对于边框的位置
    function getElementPosition (elem) {
		var x = elem.offsetLeft,
			y = elem.offsetTop;
		while (elem.offsetParent != document.body) {
			elem = elem.offsetParent;
			x += elem.offsetLeft;
			y += elem.offsetTop;
		}
		return {
			x : x,
			y : y
		}
	}

//给事件绑定函数
	function addEvent(elem, type, handler) {
        if(elem.addEventlinstener) {
            elem.addEventlinstener(type, handler);
        }else if(elem.attachEvent) {
            elem['temp' + type + handler] = handler;
            elem[type + handler] = function () {
                elem['temp' + type + handler].call(elem);
            }
            elem.attachEvent('on' + type, elem[type + handler]);
        }else {
            elem['on' + type] = handler;
        }
    }

//解除绑定
    function removeEvent(elem, type, handler) {

        if(elem.removeEventlinstener) {
            elem.removeEventlinstener(type, handler, false);
        }else if(elem.detachEvent) {
            elem.detachEvent('on' + type, handler);
        }else {
            elem['on' + type] = null;
        }

    }


//阻止冒泡
    function stopBubble(event) {
        if(event.stopPropagation) {
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }

//阻止默认
    function cancelHandler(event) {
        if(event.preventDefault) {
            event.preventDefault();
        }else{
            event.returnvalue = false;
        }
    }

//拖拽
function drag(elem) {
    var disX,
        disY;
    addEvent(elem, 'mousedown', function (e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(getStyle(elem, 'left'));
        disY = event.clientY - parseInt(getStyle(elem, 'top'));
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
        stopBubble(event);
        cancelHandler(event);
    });
    function mouseMove(e) {
        var event = e ||windows.event;
        elem.style.left = event.clientX - disX + "px";
        elem.style.top = event.clientY - disY + "px";
    }
    function mouseUp(e) {
        var event = e || window.event;
        removeEvent(document, 'mousemove', mouseMove);
        removeEvent(document, 'mouseup', arguments.callee);
    }
}

//insertAfter:在元素之后添加元素
Element.prototype.insertAfter = function (insertNode, afterNode) {

    var node = this,
        targetNode = afterNode.nextElementSibling,
        child = node.children,
        len = child.length;

    if(len = 0 || !targetNode) {
        node.appendChild(insertNode);
    }else{
        node.insertBefore(insertNode, targetNode);
    }
}


//兼容性方法，求滚动轮滚动距离getScrollOffset()
function getScrollOffset() {

    if(window.pageXOffset) {
        return {
            x : window.pageXOffset,
            y : window.pageYOffset,
        }
    }else{
        return {
            x : document.body.scrollLeft + document.documentElement.scrollLeft,
            y : document.body.scrollTop + document.documentElement.scrollTop,
        }
    }
}

//查看视口尺寸（可视窗口）
function getViewportOffset() {

    if(window.innerHeight) {
        return {
            h : window.innerHeight,
            w : window.innerWidth
        }
    }else{

        if(document.compatMode === "CSS1Compat") {
            return {
                h : document.documentElement.clientHeight,
                w : document.documentElement.clientWidth
            }
        }else{
            return {
                h : document.body.clientHeight,
                w : document.body.clientWidth
            }
        }
    }
}

//查看元素几何尺寸
function getElementOffset(elem) {
    var box = elem.getBoundingClientRect();

    if(box.width) {

        return {
            w : box.width,
            h : box.height
        }
    }else{
        return {
            w : box.right - box.left,
            h : box.bottom - box.top
        }
    }
}

//获取元素表现出来的样式
    function getStyle(obj, propStyle) {
        if (obj.currentStyle) {
            return obj.currentStyle[propStyle];
        } else {
            return window.getComputedStyle(obj, false)[propStyle];
        }
        }

//fixed定位js兼容版
function fixed() {

    var x = parseInt(getStyle(elem, 'left')),
        y = parseInt(getStyle(elem, 'top'));
    window.onscroll = function (e) {
        elem.style.left = getScrollOffset().x + x + 'px';
        elem.style.top = getScrollOffset().y + y + 'px';
    }
}

//深层克隆
function deepClone(parent, child) {

    var child = child || {},
        toStr = Object.prototype.toString,
        arrStr = '[object Array]';

    for(var prop in parent) {

        if(parent.hasOwnProperty(prop)) {//不是原形链上的属性

            if(typeof(parent[prop]) == "object") {//是否为对象
                child[prop] = (toStr.call(parent[prop]) == arrStr) ? [] : {};
                //是数组还是对象
                deepClone(parent[prop], child[prop]);//递归
            }else{//不是对象直接拷过来
                child[prop] = parent[prop];
            }
        }
    }
}

//数组去重
Array.prototype.unique = function () {

        var arr = [],
            obj = {},
            len = this.length;

        for(var i = 0; i < len; i++) {

            if(!obj[this[i]]) {//没属性名时走if，重了不走

                obj[this[i]] = "1";
                arr.push(this[i]);

            }
        }
        return arr;
    }

//圣杯模式
    var inherit = (function() {
        var F = function () {}
        return function(C, P) {
            F.prototype = P.prototype;
            C.prototype = new F();
            // console.log(C.prototype.constructor);
            C.prototype.constructor = C;
            C.prototype.uber = P.prototype;//负责记录
        }
    }());