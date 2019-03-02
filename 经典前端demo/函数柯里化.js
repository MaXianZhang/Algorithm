// function add(num1, num2){
//   return num1 + num2
// }

// Function.prototype.curry = function (obj){
//   var me = this
//   var fatherArgus = Array.prototype.slice.call(arguments, 1)
//   return function() {
//     var innerArgus = Array.prototype.slice.call(arguments)
//     var allArgus = [...fatherArgus, ...innerArgus]
//     console.log(allArgus)
//     return me.apply(obj, allArgus)
//   }
// }

// Function.prototype.Mybind = function () {
//   let args = Array.from(arguments)
//   let context = args.shift()
//   return () => {
//     let newArgs = Array.from(arguments)
//     this.apply(context, args.concat(newArgs))
//   }
// }

// var curriedAdd = add.curry(this, 6)
// console.log(curriedAdd(1,2))


//花式传参
function _add(a,b,c) {
  return a + b + c
}

function createCurry(func, args = []) {
  let len = func.length;

  return function () {
    //拼接参数(类数组转化为数组)
      let newArgs = [].slice.call(arguments).concat(args);

      // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
      if (newArgs.length < len) {
          return createCurry.call(this, func, newArgs);
      }

      // 参数收集完毕，则执行func
      return func.apply(this, newArgs);
  }
}

demo = createCurry(_add)

console.log( demo(2)(4,3) )
console.log( demo(2)(4)(3) )
console.log( demo(2,4,3))
console.log( demo(2,4)(3) )