// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


// You must write an algorithm that runs in O(n) time and without using the division operation.


const productExceptSelf = (nums) => {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const answer = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;

}