const data = [[1,3], [3,4,6,2], [4,3,4,9]];
function 排列组合(dataI, str) {
  if(data[dataI])
    var arr = data[dataI]
  else
    return
  const next = ++dataI

  arr.forEach(item => {
    if(dataI == data.length)
      console.log(str + item)
      排列组合(next, str + item + ' ')
  })
}
排列组合(0, '')

//栈的压入和弹出序列
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


