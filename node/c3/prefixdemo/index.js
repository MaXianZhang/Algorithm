"use strict";

const postcss = require('postcss');
const fs = require('fs');

const source = './index.css';
const dest = './dest.css';

fs.watch(source, function () {
	var ret = fs.readFileSync(source, 'utf-8')
	function ss(css){
		postcss([require('autoprefixer')])
			.process(css)
			.then(function (result){
				fs.writeFileSync(dest, result.css);
				console.log('complie success');
			} )
	}
	ss(ret);
})


console.log("start watch");