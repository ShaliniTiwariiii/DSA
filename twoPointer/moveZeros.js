// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

//LC 283

const moveZero = (nums) => {
    let left = 0
    let rigth = 0
    while (rigth < nums.length) {
        if (nums[rigth] !== 0) {
            [nums[left], nums[rigth]] = [nums[rigth], nums[left]]
            left++
        }
        rigth++
    }
}