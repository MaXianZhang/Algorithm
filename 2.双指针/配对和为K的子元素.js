/**
 * @param { 给定一个有序数字数组和一个目标和，在数组中找到一对和等于给定目标的数组。 }
 * @return { 在for或者while循环中，是可以直接return出来数据，作为函数的输出的 }
 * @return { 用增加一个指针的方式，来降低算法所用的时间和空间 }
 */


function pair_with_target_sum_mine(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;

  while (arr[left] + arr[right] !== targetSum) {
    if (arr[left] + arr[right] > targetSum) {
      right--
    } else {
      left++
    }
    if (right <= left) {
      return [-1, -1]
    }
  }

  return [left, right]
}

function pair_with_target_sum(arr, targetSum) {
  const dict = {}
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i]
    dict[ele] = i;

    if ((targetSum - ele) in dict) {
      return [dict[targetSum - ele], i]
    }
    log(dict)

  }
  return [-1, -1]
}

// console.log(pair_with_target_sum([1, 2, 3, 6, 6], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));