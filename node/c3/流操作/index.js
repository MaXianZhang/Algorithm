var fs = require('fs');


fs.watch("../../c2", function (eventType,filename) {
	console.log(2);
	console.log(eventType,filename);
});


console.log("I am watching");



