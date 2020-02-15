const log = console.log
/**
 * @param { 在处理排序数组(或 LinkedLists)并需要找到一组满足某些约束的元素时，两指针方法非常有用。 元素的集合可以是一对，一个三元组，甚至一个子数组。 }
 * @return { 与滑动窗口不同，这种方法适用于不连续的多个子元素 }
 */


// const pair_with_target_sum_mine = require('./配对和为K的子元素')
// const remove_duplicates = require('./删除重复元素')
// const search_triplets = require('./和为K的三元组')

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
