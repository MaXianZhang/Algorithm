const log = console.log
/**
 * @param {给定一个有序数字数组和一个目标和，在数组中找到一对和等于给定目标的数组。}
 * @return { 在for或者while循环中，是可以直接return出来数据，作为函数的输出的 }
 */

function pair_with_target_sum_1(arr, targetSum) {
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

/**
 * @param { 给定一个已排序数字数组，删除其中所有重复的数字。 不应该使用任何额外的空间; 在删除就地重复项之后，返回数组的新长度。}
 * @return { 和滑动窗口一样，我们需要找到两种方式维护两个指针，暴力法其实是用两个循环维护两个指针的 }
 * @return { 在这到题中，一个指针由for循环维护，另一个指针由一个变量维护 }
 * @return { 对比滑动窗口，我们往往要关心窗口中间的东西的变化，而双指针我们关系指针里的东西就可以 }
 * @return { 理解不通畅，reback }
 */
function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
  }

  return nextNonDuplicate;
}

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));

/**
 * @param { 给定一个未排序的数字数组和一个目标值 ，就地删除数组中所有这个值，并返回数组的新长度。}
 * @return {  }
 */
function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}


console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);