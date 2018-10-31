const event = require('events');

class Phone extends event{
	message() {
		console.log("send message");
	}
}

const iphone = new Phone();

iphone.on("call", function () {
	this.message();
})

iphone.emit('call');
