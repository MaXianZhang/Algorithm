/**
 * @param { 给定一个有序数字数组和一个目标和，在数组中找到一对和等于给定目标的数组。 }
 * @return { 在for或者while循环中，是可以直接return出来数据，作为函数的输出的 }
 * @return { 用增加一个指针的方式，来降低算法所用的时间和空间 }
 */
import {wait, log} from '../utils'

async function pair_with_target_sum_mine(arr, targetSum) {
	let left = 0;
	let right = arr.length - 1;

	while (arr[left] + arr[right] !== targetSum) {
		//......
		await wait(1000);
		const a = Array.from(arr);
		a[left] = `[${a[left]}]`;
		a[right] = `[${a[right]}]`;
		log(a.toString(), arr[left] + arr[right])
		//......

		if (arr[left] + arr[right] > targetSum) {
			right--
		} else {
			left++
		}

		if (right <= left) {
			return [-1, -1]
		}
	}
	//......
	await wait(1000);
	const a = Array.from(arr);
	a[left] = `[${a[left]}]`;
	a[right] = `[${a[right]}]`;
	log(a.toString(), arr[left] + arr[right])
	//......

	return [left, right]
}

console.log(pair_with_target_sum_mine([1, 2, 3, 6, 6], 6));
// console.log(pair_with_target_sum_mine([1, 1, 1, 2, 5, 9, 11], 11));