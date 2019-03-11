function add(){
  console.log(this.name)
  return [...arguments].reduce((pre, cur) => pre + cur)
}

Function.prototype.Mybind = function () {
  let func = this
  let args = Array.from(arguments)
  let context = args.shift()
  return function () {
    let newArgs = Array.from(arguments)
    console.log(args, newArgs)
    return func.apply(context, args.concat(newArgs))
  }
}
var curriedAdd = add.Mybind({name: 909}, 6)

console.log(curriedAdd(1,2))


//花式传参
function _add(a,b,c) {
  return a + b + c
}

function createCurry(func, args = []) {
  let len = func.length;

  return function () {
    //拼接参数(类数组转化为数组)
      let newArgs = Array.from(arguments).concat(args);

      // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
      if (newArgs.length < len) {
          return createCurry.call(this, func, newArgs);
      }

      // 参数收集完毕，则执行func
      return func.apply(this, newArgs);
  }
}

demo = createCurry(_add)

// console.log( demo(2)(4,3) )
// console.log( demo(2)(4)(3) )
// console.log( demo(2,4,3))
// console.log( demo(2,4)(3) )


