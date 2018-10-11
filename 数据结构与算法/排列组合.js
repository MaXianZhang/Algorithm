var data = [[1,3], [3,4,6,2], [4,3,4,0,5,9]];
function demo(dataI, str) {
  if(data[dataI]) {
    var arr = data[dataI]
  } else {
    return
  }
  var next = ++dataI

  arr.forEach((item, index) => {
    if(dataI == data.length) {
      console.log(str + item)
    }
    demo(next, str + item + '|')
  })
}
demo(0, '')

