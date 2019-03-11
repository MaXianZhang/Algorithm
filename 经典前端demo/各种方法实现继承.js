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
// 存在引用类型被公用的问题
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
// 借用别人的构造函数，用的是自己的this，所以每次创建实例时，所以依赖的引用都是新的

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
// 借用人家的构造函数的同时，把自己的prototype指向人家的实例
// 最后我们构造出来的对象有了爸爸，还有了爷爷
// 这样依赖，我们不仅克隆了人家的引用类型的属性，还可以使用人家prototype的方法

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
// console.log(player1.cards)
// console.log(player1.__proto__.__proto__ == Player.prototype)

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

function inherit(Son, Foo) {
  function F() {}
  F.prototype = Foo.prototype
  const prototype = new F()
  prototype.constructor = Son
  Son.prototype = prototype
}

function Foo(name){
  this.name = name
  this.colors = ['red','blue','yellow'];
}
Foo.prototype.hh = () => {
  console.log('8888')
}

function Son(age) {
  Foo.call(this);     //通过构造函数继承实例属性
  this.age = age;
}
const son = new Son()
inherit(Son, Foo)

console.log(son)

// END
