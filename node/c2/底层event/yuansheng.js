var event = require('events');






var event = new event();
var zhangxu = "天才";
event.on("call", function (zhangxu) {
	console.log("张旭好帅",zhangxu);
})

event.once("cal", function (zhangxu) {
	console.log("张旭帅",zhangxu);
})

event.emit("call","天才");
event.emit("call","天才");
event.emit("call","天才");
event.emit("cal","天才");
event.emit("cal","天才");
event.emit("cal","天才");
