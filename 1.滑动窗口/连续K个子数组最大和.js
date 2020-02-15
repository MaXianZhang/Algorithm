const lg = console.log
/**
 * @param { 连续k个子数组最大和 }
 * @return { 长度不变 }
 */
// 滑动窗口
function max_sub_array_of_size_k(K, arr) {
  let result = 0;
  const window = arr.slice(0, K)
  let curAverages = window.reduce((a, b) => a + b)

  for (let i = 0; i < arr.length - K + 1; i++) {
    if (curAverages > result) {
      result = curAverages
    }
    curAverages += arr[K + i]
    curAverages -= window.shift()
    window.push(arr[K + i])
  }

  return result;
};

// const result = max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]);
// lg(`: ${result}`);