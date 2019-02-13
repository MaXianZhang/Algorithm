const { printListFromTailToHead, ToBinary } = require('./数据结构与算法/tools.js')
function ll(data) {
  console.log(data)
}



function RandomListNode(x){
  this.label = x;
  this.next = null;
  this.random = null;
}
var list = new RandomListNode(0)
var list1 = new RandomListNode(1)
var list2 = new RandomListNode(2)
var list3 = new RandomListNode(3)
var list4 = new RandomListNode(4)

list.next = list1
list1.next = list2
list2.next = list3
list3.next = list4

list.random = list2
list1.random = list2
list2.random = list1
list3.random = list4
list4.random = list3


// function isSameArray(arr1, arr2) {
//   if(arr1.length !== arr2.length) return false
//   let res = true
//   while(arr1.length > 0) {
//     if(arr1.pop() !== arr2.pop()) res = false
//   }
//   return res
// }



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
console.log(IsPopOrder([1,2,3,4,5], [4,5,3,2,1]))





// function Sum_Solution(n) {
//   n == 0 && return 
//   return n + Sum_Solution(n-1)
// }

// console.log(n || 1)

