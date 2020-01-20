const log = console.log
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

/**
 * @param { 给定一个已排序数字数组，删除其中所有重复的数字。 要求不使用任何额外的空间; 在删除就地重复项之后，返回数组的新长度。}
 * @return { 和滑动窗口一样，我们需要找到两种方式维护两个指针，暴力法其实是用两个循环维护两个指针的 }
 * @return { 在这到题中，一个指针由for循环维护，另一个指针由一个变量维护 }
 * @return { 对比滑动窗口，我们往往要关心窗口中间的东西的变化，而双指针我们关系指针里的东西就可以 }
 * @return { 理解不通畅，reback }
 */
function remove_duplicates(arr) {
  let recorder = 0;

  for(let explorer = 1; explorer < arr.length; explorer++) {
    if(arr[explorer] !== arr[recorder]) {
      arr[recorder + 1] = arr[explorer]
      recorder++
    }
  }
  return recorder + 1;
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

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


// console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
// console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);


/**
 * @param { 给定一个未排序的数组，找出其中所有加起来等于零的唯一三元组。}
 * @return { 用增加一个指针的方式，来降低遍历的次数 }
 */

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      // 找到三元组
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        // 跳过相同的元素，以避免重复的三元组
        left += 1; 
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}


// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));


// const Deque = require('./collections/deque'); //http://www.collectionsjs.com


// function find_subarrays(arr, target) {
//   let result = [],
//     product = 1,
//     left = 0;
//   for (right = 0; right < arr.length; right++) {
//     product *= arr[right];
//     while ((product >= target && left < arr.length)) {
//       product /= arr[left];
//       left += 1;
//     }
//     // since the product of all numbers from left to right is less than the target therefore,
//     // all subarrays from lef to right will have a product less than the target too; to avoid
//     // duplicates, we will start with a subarray containing only arr[right] and then extend it
//     const tempList = [];
//     for (let i = right; i > left - 1; i--) {
//       tempList.unshift(arr[i]);
//       result.push(tempList)
//         // tempList.toArray()
//     }
//   }
//   return result;
// }


// console.log(find_subarrays([2, 5, 3, 10], 30));
// console.log(find_subarrays([8, 2, 6, 5], 50));
