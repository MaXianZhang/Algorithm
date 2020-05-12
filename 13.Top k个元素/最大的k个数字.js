

/**
 * @param { T给定一个未排序的数字数组，找出其中最大的“ k”数。 }
 * @return {  }
  */


 const Heap = require('collections/heap');

 function find_k_largest_numbers(nums, k) {
   const minHeap = new Heap([], null, ((a, b) => b - a));
   // 存进k个值，要求是最小堆，这样依赖堆定就是k个元素中最小的
   for (i = 0; i < k; i++) {
     minHeap.push(nums[i]);
   }

   // 谁比堆顶大，谁就进堆，堆顶出去，慢走不送
   for (i = k; i < nums.length; i++) {
     if (nums[i] > minHeap.peek()) {
       minHeap.pop();
       minHeap.push(nums[i]);
     }
   }
 
   // the heap has the top 'K' numbers, return them in a list
   return minHeap.toArray();
 }
 
 
 console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`);
 console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`);