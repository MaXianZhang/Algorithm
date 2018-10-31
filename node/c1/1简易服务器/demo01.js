"use strict";

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res) {
	fs.readFile('./jj.html', 'UTF-8', function (err, data) {
		if(err) {
			console.log(err);
			return;
		}
		res.end(data);

	})
})

server.listen(3000);
console.log('server is running');