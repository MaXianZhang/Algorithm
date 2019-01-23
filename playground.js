function print(data) {
  console.log(data)
}
function ll(data) {
  console.log(data)
}

// var outer = 4

// var iife = (function (data) {
//   var outer = data
//   console.log('inner:', outer)
// })(1)

// print(outer)



function Demo (age) {
  this.name = age

  this.func()
}
Demo.prototype.name = 'kkk'
Demo.prototype.func = function() {
  this.name++
}

var demo01 = new Demo(0)
console.log(demo01.func())
console.log(demo01)