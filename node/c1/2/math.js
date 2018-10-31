var num = 0;
function count() {
	return num++;
}


function add (a,b) {
	return a+b; 
}
console.log(__filename);


console.log('源文件里num的值' + num);
console.log(module.exports);
// module.exports = count;
exports.count = count;
// exports.count = count;
// exports.num = num;
