// req.end([data],[encoding],[callback])

// req.response.write(chunk,[encoding],[callback])

// res.statusCode

// res.statesMessage

// res.writeHead(statusCode,[statesMessage],[headers])


"use strict";
const http = require('http');


const server = http.createServer(function (req, res) {
	let data = "";
	req.on('data',function (thunk) {
	    data += thunk;
	})


	req.on('end', function () {
		console.log(data);
		res.setHeader('Content-Type', 'text/html');
		res.statusCode = 200;
		res.statesMessage = 'success';

		// res.writeHead(200,{
		// 	'Content-Type':'text/html'
		// })

		res.write("<h>aoweuigaowufgb</h>")
		res.write("<h>aoweuigaowufgb</h>")
		res.write("<h>aoweuigaowufgb</h>")
		res.end("<h>sss</h>");
	})

});
server.listen(3000);
console.log("server is running");