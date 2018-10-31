var Event = function () {
	this.EventMessage = {};
}

Event.prototype.on = function (actName, callback) {
	if (typeof actName == "string"){
		//不同名的事件用不同属性储存
		if (!this.EventMessage[actName]) {
			//同名事件储存到同属性下的数组内，比如两个call1
			this.EventMessage[actName] = [];
		}
		this.EventMessage[actName].push(callback);
	}
}

//这里要实现我们绑定的函数可以传参，做一下参数的处理和传递
Event.prototype.emit = function (actName) {
	//类数组不能用数组的方法，于是通过原型对象的call过来,截取掉第一个操作字符串参数
	var argu = Array.prototype.slice.call(arguments, 1);
	var callbackfunctions = this.EventMessage[actName];

	callbackfunctions.forEach(function (item) {
		//apply改变上下文,还可以传数组的参数
		item.apply(this, argu);
	})
}

//调试部分

var event = new Event();
var zhangxu = "天才";
event.on("call1", function (zhangxu) {
	console.log("张旭好帅啊",zhangxu);
})
event.on("call1", function (zhangxu) {
	console.log("张旭好帅哦",zhangxu);
})

event.emit("call1","天才");
// event.emit("call2","天才");


