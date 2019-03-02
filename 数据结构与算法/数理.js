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

//数组求和
Math.add = function(arr) {
  return arr.reduce((pre, cur) =>  pre + cur)
}

// 替换一个字符串中所有目标片段
function replaceG(str, target, reStr) {
  return str.replace(new RegExp(target, 'g') , reStr)
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

//转换为二进制，负数取补码
function ToBinary(n, detial = 2) {
  if(n >= 0) return n.toString(detial)
  else {
    let jjj = n.toString(detial)
    let res = ''
    for(item of jjj) {
      if(item == 1) res += 0
      if(item == 0) res += 1
    }
    return res
  }
}

function IsPopOrder(pushV, popV) {
  var stack = [];
  var idx = 0;
  pushV.forEach(item => {

    stack.push(item);
    while (stack.length && stack[stack.length - 1] == popV[idx]) {
      console.log(stack)
      stack.pop()
      
      idx++;
    }
  })
  return stack.length == 0;
}
// 测试用例
// console.log(IsPopOrder([1,2,3,4,5], [4,5,3,2,1]))

// 连续子数组的最大和
function FindGreatestSumOfSubArray(arr) {
  let len = arr.length
  let resArr = []

  // i为每次取出的数组的长度
  for(let i = 1; i <= len; i++) {
    for(let start = 0; start < len - i + 1; start++) {
      let addRes = arr.slice(start, start + i)
      resArr.push(addRes.reduce((pre, cur) =>  pre + cur))

    }
  }

  return Math.max(...resArr)
}

// 1到n中整数1出现的次数
function NumberOf1Between1AndN_Solution(n) {
  let num = 0
  for (let i = 1; i <= n; i++) {
    res = String(i).match(/1/g)

    if (res) num += res.length
  }
  return num
}

// 质因子分解
function primeFactorization(num) {
  let stack = []
  let [n, k] = [num, 2]
  
  while(n > k) {
    if (n % k == 0) {
      stack.push(k)
      n = n / k
    } else {
      k++
    }
  } 
  if(n == k) stack.push(k)
  return stack
}

// 只包含质因子2、3和5的数称作丑数，求按从小到大的顺序的第N个丑数。
function GetUglyNumber_Solution(index) {
  if (index == 0) return 0
  let stack = [1]
  let [i2, i3, i5] = [0, 0, 0]
  let [v2, v3, v5] = [2, 3, 5]
  let newValue = 1

  while(stack.length < index) {
    newValue = Math.min(v2, v3, v5)
    stack.push(newValue)
    if (newValue == v2) i2++
    if (newValue == v3) i3++
    if (newValue == v5) i5++
    v2 = stack[i2] * 2
    v3 = stack[i3] * 3
    v5 = stack[i5] * 5
  }

  return newValue
}

// 第一个只出现一次的字符, 返回index，没有返回-1
function FirstNotRepeatingChar(str) {
  let dict = {}
  for(item of str) {
    if(dict[item] == undefined) {
      dict[item] = 1
    } else {
      dict[item]++
    }
  }
  onceStrs = Object.keys(dict).filter(item => {
    return dict[item] == 1
  })
  
  return str.indexOf(onceStrs.shift())
}

//冒泡排序
var uu = 0
function bubbleSort(arr) {
  let i = arr.length, j;
  while (i > 0) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        uu++
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    i--;
  }
  // return arr
  return uu;
}

// 归并排序, 计算逆序对
var ww = 0
function mergeLR(left = [], right = []) {
  let res = []
  while (left.length > 0 && right.length > 0 ) {
    if (left[0] > right[0]) {
      res.push(right.shift())
      ww+=left.length
    } else {
      res.push(left.shift())
    }
  }
  return [...res, ...left, ...right]
}
function mergeSort(arr) {
  arr = arr.map(item => [item])

  while (arr.length > 1) {
    var stack = []
    var len = arr.length
    for(let i = 0; i < len; i+=2) {
      stack.push(mergeLR(arr.shift(), arr.shift()))
    }
    arr = stack.concat(arr)
  }
  return ww%1000000007
  // return arr.pop()
}

// 排成最小的数
// 输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
function PrintMinNumber(numbers) {
  numbers = numbers.sort((numA, numB) => (numA + '' + numB) - (numB + '' + numA))
  return (numbers.length == 0) ? '' : Number(numbers.join(''))
}

// 连续正整数相加等于sum的序列
function maker(end, n) {
  let stack = []
  for (let i = 0; i < n; i++) {
    stack.push(end - i)
  }
  return stack.reverse()
}

function FindContinuousSequence(sum) {
    if(sum == 1) return []
  let stack = []
  let max = Math.sqrt(sum * 2)
  let lang = 2
  while (lang < max) {
    let 和 = lang * (lang + 1) / 2
    
    if ((sum - 和) % lang == 0) {
      let end = (sum - 和) / lang + lang
      stack.push(maker(end, lang))
    }
    lang++
  }
  return stack.reverse()
}

// 大数相加
function Badd(A, B) {
  [A, B] = [A.split(''), B.split('')]
  let Acount, Bcount;
  let jin = 0
  let res = []
  do {
    [Acount, Bcount] = [A.splice(-1), B.splice(-1)]
    let [cur, pre] = String(Number(Acount) + Number(Bcount) + jin).split('').reverse()
    res.unshift(cur)
    if (pre) jin = 1
    else jin = 0
  } while(A.length > 0, B.length > 0)
  return A.join('') + B.join('') + res.join('')
}

var A = '2131233123'
var B = '12312318'

// console.log(Badd(A, B))
// console.log(Number(A) + Number(B))


// 两个栈模拟实现队列
// const cur = []
// const pocket = []

// function push(node) {
//   cur.push(node)
//   return cur.length
// }

// function pop() {
//   let len = cur.length
//   for(var i = 0; i < len; i++) {
//     pocket.push(cur.pop())
//   }
//   const res = pocket.pop()
//   len = pocket.length
//   for(var i = 0; i < len; i++) {
//     cur.push(pocket.pop())
//   }
//   return res
// }

module.exports = {
  Find,
  replaceG,
  CreateCounter,
  GetMedian,
  GetMin,
  GetMax,
  ToBinary,
  FindGreatestSumOfSubArray,
  NumberOf1Between1AndN_Solution,
  primeFactorization,
  GetUglyNumber_Solution,
  FirstNotRepeatingChar,
  bubbleSort,
  mergeSort,
  PrintMinNumber,
  FindContinuousSequence,
}