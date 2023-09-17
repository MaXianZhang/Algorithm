function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}



function turn(arr, from, to) {
    [arr[from], arr[to]] = [arr[to], arr[from]]
}

let d = Date.now()
console.log(quickSort([41, 3, 21, 7, 8, 8, 8, 94, 345, 67, 13, 234, 123, 52, 3, 45]))
console.log('用时:%jms', Date.now() - d)


