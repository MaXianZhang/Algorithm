

function Handler (onResolved, onRejected, promise) {
  this.onResolved = typeof onResolved === 'function' ? onResolved : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}


class MyPromise {
  constructor(fn) {
    this._state = 'pending'
    this.value = null


    this._deferreds = []

    try{
      fn(value => {
        //执行resolve
        this.resolve(this, value)
      },reason => {
        this.reject(this, reason)
      })
    } catch(err) {
      reject(this, err)
    }


  }

  then() {
    const res = new MyPromise(() => {})

    const deferred = new Handler(onResolved, onRejected, res)

    //为pending状态的时候，存储延迟处理对象
    if(this._state == 'pending') {
      this._deferreds.push(deferred)

      return res;
    }

    //不为pending，执行回调

    handleCallback(this, deferred)
    return res
  }

  resolve (promise, value) {
    // 非 pending 状态不可变
    if (promise._state !== 'pending') return;
    
    // promise 和 value 指向同一对象
    // 对应 Promise A+ 规范 2.3.1
    if (value === promise) {
      return reject( promise, new TypeError('A promise cannot be resolved with itself.') );
    }
    
    // 如果 value 为 Promise，则使 promise 接受 value 的状态
    // 对应 Promise A+ 规范 2.3.2
    if (value && value instanceof Promise && value.then === promise.then) {
      var deferreds = promise._deferreds
      
      if (value._state === 0) {
        // value 为 pending 状态
        // 将 promise._deferreds 传递 value._deferreds
        // 偷个懒，使用 ES6 展开运算符
        // 对应 Promise A+ 规范 2.3.2.1
        value._deferreds.push(...deferreds)
      } else if (deferreds.length !== 0) {
        // value 为 非pending 状态
        // 使用 value 作为当前 promise，执行 then 注册回调处理
        // 对应 Promise A+ 规范 2.3.2.2、2.3.2.3
        for (var i = 0; i < deferreds.length; i++) {
          handleResolved(value, deferreds[i]);
        }
        // 清空 then 注册回调处理数组
        value._deferreds = [];
      }
      return;
    }
  
    // value 是对象或函数
    // 对应 Promise A+ 规范 2.3.3
    if (value && (typeof value === 'object' || typeof value === 'function')) {
      try {
        // 对应 Promise A+ 规范 2.3.3.1
        var then = obj.then;
      } catch (err) {
        // 对应 Promise A+ 规范 2.3.3.2
        return reject(promise, err);
      }
  
      // 如果 then 是函数，将 value 作为函数的作用域 this 调用之
      // 对应 Promise A+ 规范 2.3.3.3
      if (typeof then === 'function') {
        try {
          // 执行 then 函数
          then.call(value, function (value) {
            resolve(promise, value);
          }, function (reason) {
            reject(promise, reason);
          })
        } catch (err) {
          reject(promise, err);
        }
        return;
      }
    }
    
    // 改变 promise 内部状态为 `resolved`
    // 对应 Promise A+ 规范 2.3.3.4、2.3.4
    promise._state = 1;
    promise._value = value;
  
    // promise 存在 then 注册回调函数
    if (promise._deferreds.length !== 0) {
      for (var i = 0; i < promise._deferreds.length; i++) {
        handleResolved(promise, promise._deferreds[i]);
      }
      // 清空 then 注册回调处理数组
      promise._deferreds = [];
    }
  }
}

const demo = new MyPromise((a, b) => {
  console.log('执行同步函数')
  console.log(a,b)
})

