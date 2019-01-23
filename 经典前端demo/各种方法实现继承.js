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

// START
// 原型链继承

// function Player() {
//   this.cards = ['雪女']
// }

// function Son() {
// }

// Son.prototype = new Player()

// const player1 = new Son()
// const player2 = new Son()

// player1.cards.push('黑童子')
// console.log(player2.cards)

// END

// START
// 借用构造函数继承，还解决了原型链继承会更改公用引用类型的值的缺陷
// 改变一个函数的this

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

// END

// START
// 组合继承，有时候也叫伪经典继承

// Player.prototype.jjj = function() {
//   this.cards.push('白童子')
// }

// function Player() {
//   this.cards = ['雪女']
// }

// Son.prototype = new Player()
// Son.prototype.constructor = Son


// function Son() {
//   Player.call(this)
// }


// const player1 = new Son()
// const player2 = new Son()

// player1.cards.push('黑童子')
// player1.jjj()
// console.log(player1)

// END

// START
// 原型式继承，引用bug

// var foo = {
//   func: () => {
//     console.log('2222')
//   },
//   name: 111,
//   arr: [ '雪女', '黑童子', '白童子' ],
// }

// var son = Object.create(foo)
// console.log(son.__proto__ == foo)

// console.log(son)
// son.arr.push('jjj')
// console.log(foo.arr)
// console.log(son.arr)
// son.func()

// END


// START
// 寄生式继承
// function object(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }

// function createAnother(original) {
//   const clone = object(original)
//   clone.sayhi = function() {
//     console.log('hi')
//   }

//   return clone
// }

// END

// START
// 寄生组合式继承

// function inherit(Son, Foo) {
//   function F() {}
//   F.prototype = Foo.prototype
//   const prototype = new F()
//   prototype.constructor = Son
//   Son.prototype = prototype
// }

// function Foo(name){
//   this.name = name
//   this.colors = ['red','blue','yellow'];
// }
// Foo.prototype.hh = () => {
//   console.log('8888')
// }

// function Son(age) {
//   Foo.call(this);     //通过构造函数继承实例属性
//   this.age = age;
// }
// const son = new Son()
// inherit(Son, Foo)

// console.log(son)

// END
