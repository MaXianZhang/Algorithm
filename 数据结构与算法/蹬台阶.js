let count = 0

function demo(n, arr) {

  arr.forEach(item => {
    if (n - item == 0) {
      count++
      return 
    } else if (n - item > 0) {
      demo(n - item, arr);
    }
  });

}

demo(3, [1,2,3])

console.log(count)