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

// var curriedAdd = add.curry(this, 6)
// console.log(curriedAdd(1,2))


//花式传参
function _add(a,b,c) {
  return a + b + c
}

function createCurry(func, args) {

  var arity = func.length;
  var args = args || [];

  return function() {
      var _args = [].slice.call(arguments);
      [].push.apply(_args, args);

      // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
      if (_args.length < arity) {
          return createCurry.call(this, func, _args);
      }

      // 参数收集完毕，则执行func
      return func.apply(this, _args);
  }
}

demo = createCurry(_add)

console.log( demo(2)(4,3) )
console.log( demo(2)(4)(3) )
console.log( demo(2,4,3))
console.log( demo(2,4)(3) )