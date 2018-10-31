const fs = require('fs');

function ergodic(path) {  
//都使用同步操作，不然forEach中有回掉函数的话，也会变成异步操作，返回值获取不到
	var result = {};
	var files = fs.readdirSync(path);

	files.forEach(function (item) {
		var statpath = path +'/' +item;  //拼接url
		var a = fs.statSync(statpath);

		if (a.isDirectory()){
			result[item] = ergodic(statpath);//递归
		}else if (a.isFile()){
			result[item] = item;
		}
	});
	return result;
}
console.log(ergodic('.'));