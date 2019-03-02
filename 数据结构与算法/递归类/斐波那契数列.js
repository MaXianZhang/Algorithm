// 斐波那契数列
// 适用于二阶跳台阶、2层矩形覆盖等递归问题f(n) = f(n - 1) + f(n - 2)
fibonacci = n => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)

function Fibonacci(number){
  if(number == 0) return 0
  let [pre, cur] = [0, 1]
  for(let i = 0; i < number; i++) {
      [pre, cur] = [cur, cur + pre]
  }
  return cur
}

console.log(fibonacci(4))