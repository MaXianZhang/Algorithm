// var demo = 'flight_node[1-3,5,7].qunar.com'
// function text() {
//   var first = demo.split('[')[0]
//   var end = demo.split(']')[1]
//   var result = demo.match(/\[([^]*)\]/);

//   result[1].split(',').forEach(item => {
//     if(item.indexOf('-') != -1) {
//       var range = item.split('-')
//       for(i = range[0]; i <= range[1]; i++) {
//         console.log(first + i + end)
//       }
//     }else {
//       console.log(first + item + end)
//     }
//   })
// }



// if(demo.indexOf('[') != -1) {
//   text(demo)
// } else {
//   console.log(demo)
// }




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

