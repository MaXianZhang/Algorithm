"use strict";
const http = require('http');


const server = http.createServer(function (req, res) {
	console.log("请求:",req.url);
	let data = "";
	req.on('data',function (thunk) {
	    console.log(1,data);
	    data += thunk;
	})


	req.on('end', function () {
		console.log(data);
		res.setHeader('Content-Type', 'text/html');
		res.end("<h>"+data+"</h>");
	})

});



// req.end([data],[encoding],[callback])

// req.response.write(chunk,[encoding],[callback])

// res.statusCode

// res.statesMessage

// res.writeHead(statusCode,[statesMessage],[headers])



server.listen(3000);
console.log("server is running");


// http.IncomingMessage


// http.ServerResponse

