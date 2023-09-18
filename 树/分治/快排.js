function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let middleIndex = partition(arr, left, right);
        quickSort(arr, left, middleIndex - 1);
        quickSort(arr, middleIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let middle = arr[right];
    let i = left;
    // i, j同时出发
    for (let j = left; j < right; j++) {
        // 这里是个双指针的逻辑，用另外一个指针记录需要调换的位置
        // 让i调整到需要移到右边的值（大于中间值），然后交换

        if (arr[j] < middle) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    // 此时i仍然停在需要右移的位置上，而中间值仍在最右侧，交换一下，正好是挑选中的中间值在中间，其他值两边分
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}


console.log(quickSort([41, 3, 21, 7, 8, 8, 8, 94, 345, 67, 13, 234, 123, 52, 3, 45]))



