// 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

function uniqueOccurrences(arr) {
    const countMap = new Map();
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    let frequencySet = new Set();
    for (let num of countMap.values()) {
        if (frequencySet.has(num)) {
            return false;
        }

        frequencySet.add(num)
    }
    return true;
}
