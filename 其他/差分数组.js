const lg = console.log;


function getDiffByOrigin(origin) {
    if (origin.length === 0) {
        return []
    }
    const diff = [origin[0]];

    for (let i = 1; i < origin.length; i++) {
        diff[i] = origin[i] - origin[i - 1];
    }

    return diff;
}

function handleDiff(i, j, n, diff) {
    diff[i] += n;
    
    if (diff[j + 1] !== undefined) {
        diff[j + 1] -= n;
    } 

    return diff;
}

function geyOriginByDiff(diff) {
    if (diff.length === 0) {
        return []
    }
    const origin = [diff[0]];

    for (let i = 1; i < diff.length; i++) {
        origin[i] = diff[i] + origin[i - 1];
    }
    return origin;
}

lg('1109. 航班预订统计');

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const diff = getDiffByOrigin(new Array(n).fill(0));

    bookings.forEach(item => {
        const [i, j, m] = item || [];
        handleDiff(i - 1, j - 1, m, diff);
    })

    return geyOriginByDiff(diff)
};

lg('1094. 拼车');

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let wayLength = 0;
    trips.forEach(item => {
        const [n, i, j] = item || [];
        wayLength = Math.max(wayLength, j);
    })
    const diff = getDiffByOrigin(new Array(wayLength).fill(0));
    console.log(diff);

    trips.forEach(item => {
        const [n, i, j] = item || [];
        handleDiff(i, j - 1, n, diff);
    })

    const res = geyOriginByDiff(diff);
    console.log(res);

    return res.every(item => item <= capacity);
};

lg(carPooling([[9,0,1],[3,3,7]], 4))



