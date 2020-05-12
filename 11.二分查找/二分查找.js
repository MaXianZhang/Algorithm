// var Arr = [3, 5, 6, 7, 9, 12, 15];
// function binary(find, arr, low, high) { 
//   if (!low <= high) return -1;

//   if (arr[low] == find) return low;
//   if (arr[high] == find) return high;
      
//   var mid = Math.ceil((high + low) / 2);
//   if (arr[mid] == find) {
//       return mid;
//   } else if (arr[mid] > find) {
//       return binary(find, arr, low, mid - 1);
//   } else {
//       return binary(find, arr, mid + 1, high);
//   }
// }
// binary(15, Arr, 0, Arr.length - 1);




function binary_search(arr, key) {
    let start = 0;
    end = arr.length - 1;
    isAscending = arr[start] < arr[end];
    while (start <= end) {
      // calculate the middle of the current range
      mid = Math.floor(start + (end - start) / 2);
  
      if (key === arr[mid]) {
        return mid;
      }
      if (isAscending) { // ascending order
        if (key < arr[mid]) {
          end = mid - 1; // the 'key' can be in the first half
        } else { // key > arr[mid]
          start = mid + 1; // the 'key' can be in the second half
        }
      } else { // descending order
        if (key > arr[mid]) {
          end = mid - 1; // the 'key' can be in the first half
        } else { // key < arr[mid]
          start = mid + 1; // the 'key' can be in the second half
        }
      }
    }
  
    return -1; // element not found
  }
  
  
  console.log(binary_search([4, 6, 10], 10));
  console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
  console.log(binary_search([10, 6, 4], 10));
  console.log(binary_search([10, 6, 4], 4));