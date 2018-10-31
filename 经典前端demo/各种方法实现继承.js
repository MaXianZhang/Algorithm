// function SuperDate(name) {
//   this.name = name
//   this.getname = function() {
//     console.log(this.name)
//   }
// }
// SuperDate.prototype = new Date()


// class SuperDate extends Date{
//   constructor(name) {
//     super()
//     this.name = name
//   }
//   getname () {
//     console.log(this.name)
//   }
// }

// var d = new SuperDate('zhangxu')

// d.getname()
// console.log(d.getTime())
// 这里有个结论，就是ES5中是不能直接继承Date
// 要调用Date上方法的实例对象必须通过Date构造出来，否则不允许调用Date的方法
//END


//START
//改变一个函数的this的指向，算是继承吗

// function Foo() {
//   this.colors = ['red', 'black', 'green']
// }

// function Son() {
//   Foo.call(this)
// }
// var son1 = new Son()
// son1.colors.push('gray')
// console.log('son1%j', son1.colors)

// var son2 = new Son()
// console.log('son2%j',son2.colors)

//这种方式叫借用构造函数继承，还解决了原型链继承会更改公用引用类型的值的缺陷
//END



