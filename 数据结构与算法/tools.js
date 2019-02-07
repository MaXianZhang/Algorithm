//二维数组的查找
function Find(target, array) {
  var res = false
  array.forEach(arr => {
    arr.forEach(item => {
      if (item === target) res = true
    })
  })
  return res 
}

// 替换一个字符串中所有目标片段
function replaceG(str, target, reStr) {
  return str.replace(new RegExp(target, 'g') , reStr)
}

//遍历链表
function printListFromTailToHead(head) {
    let [res, cur] = [[], head]
    while (cur != null) {
        res.push(cur.val);
        cur = cur.next;
    }
    return res.reverse();
}

//计数器
function CreateCounter() {
  let num = 0
  return (add) => num += add
}

//获取中间值
function GetMedian(arr){
  const growData = arr.sort()
  if(growData.length % 2 == 0) {
    return (growData[growData.length / 2 - 1] + growData[growData.length / 2]) / 2
  } else {
    return growData[(growData.length - 1) / 2]
  }
}

//数组的最大最小值
function GetMin(arr) {
  return Math.min(...arr)
}

function GetMax(arr) {
  return Math.max(...arr)
}
// 斐波那契数列
// 适用于二阶跳台阶、2层矩形覆盖等递归问题f(n) = f(n - 1) + f(n - 2)
function Fibonacci(number){
  if(number == 0) return 0
  let [pre, cur] = [0, 1]
  for(let i = 0; i < number; i++) {
      [pre, cur] = [cur, cur + pre]
  }
  return cur
}

//转换为二进制，负数取补码
function ToBinary(n, detial = 2) {
  return n.toString(detial)
}


module.exports = {
  Find,
  printListFromTailToHead,
  replaceG,
  CreateCounter,
  GetMedian,
  GetMin,
  GetMax,
  Fibonacci,
  ToBinary,
}