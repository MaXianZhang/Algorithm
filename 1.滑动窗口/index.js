const log = console.log
/**
 * @param { 滑动窗口 }
 * @param { 一串数组或者链表，找最什么什么样的子区间 }
 */

// const max_sub_array_of_size_k = require('./连续K个子数组最大和')
// const smallest_subarray_with_given_sum = require('./最小连续子数组')
// const longest_substring_with_k_distinct = require('./最长不重复字串')
const length_of_longest_substring_mine = require('./替换后最长字串')


/** 例子
 * @param { 长度为K的子数组的平均值 }
 * @param { 一串数组或者链表，找最什么什么样的子区间 }
 */

function find_averages_of_subarrays(K, arr) {
  const result = [];
  const window = arr.slice(0, K)
  let curAverages = window.reduce((a, b) => a + b)

  for (let i = 0; i < arr.length - K + 1; i++) {
    result.push(curAverages / K)
    curAverages += arr[K + i]
    curAverages -= window.shift()
    window.push(arr[K + i])
  }

  return result;
}

// const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// log(`: ${result}`);