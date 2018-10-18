function print(data) {
  console.log(data)
}

// function demo(arr) {
//   let a = {
//     life: arr[0],
//     bit: arr[1],
//     time: arr[2],
//   }
//   let b = {
//     life: arr[3],
//     bit: arr[4],
//     time: arr[5],
//   }
//   let Time = 0

//   while(a.life > 0 && b.life > 0 ) {
//     if(Time % b.time == 0) {
//       a.life = a.life - b.bit
//     }
//     if(Time % a.time == 0) {
//       b.life = b.life - a.bit
//     }

//     if(a.life <= 0 && b.life <= 0) {
//       print('TIE')
//     } else {
//       if (a.life <= 0) {
//         print('XIAOCHUN')
//       }
//       if (b.life <= 0){
//         print('XIAOZHI')
//       }
//     }
//     Time++;
//   }
// }

// const int = (num)

// demo([101,10,10,101,20,20])


// var str = '027555+692-0xD32C';

// var arr = str.split(/\+|\-/g)
// var ddds = str.match(/\+|\-/g)


// var results = arr.map(item => {
//   var res = item.match(/^0x(\w+)/)
//   if(res) {
//     return parseInt(res[1], 16)
//   }

//   res = item.match(/^0(\w+)/)
//   if(res) {
//     return parseInt(res[1], 8)
//   }
//   return parseInt(item)
// })
// print(results.reduce((pre, cur, index) => {
//   var ddd = ddds.shift()
//   if(ddd == "+") {
//     return pre + cur
//   }else if(ddd == "-") {
//     return pre - cur
//   }
// }))




// class Base {
//   initialState;
//   reducers;
//   actions;
//   base;

//   constructor(props) {
//     this.init(props);
//   }
//   init(props) {
//     this.base = props.base;
//     this.initialState = {
//       ...initialState,
//       ...props.initialState,
//     };
//     this.reducers = {
//       ...reducers,
//       ...props.reducers,
//     };
//     this.actions = {
//       ...actions(this.base),
//       ...props.actions,
//     };
//   }
// }

// class Credit extends Base {
//   constructor() {
//     super({
//       initialState,
//       reducers,
//       actions,
//       base: BASE_MODULE,
//     });
//   }
// }

// export default new Credit();

