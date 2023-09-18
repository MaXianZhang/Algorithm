function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let middleIndex = partition(arr, left, right);
        quickSort(arr, left, middleIndex - 1);
        quickSort(arr, middleIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    console.log(left, right);
    let middle = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        // 让i调整到需要移到右边的值（大于中间值）
        if (arr[j] < middle) {
            console.log(middle, i, j, arr[j], arr[i]);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    console.log(arr.join(','));

    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}



function turn(arr, from, to) {
    [arr[from], arr[to]] = [arr[to], arr[from]]
}

let d = Date.now()
console.log(quickSort([41, 3, 21, 7, 8, 8, 8, 94, 345, 67, 13, 234, 123, 52, 3, 45]))
console.log('用时:%jms', Date.now() - d)


