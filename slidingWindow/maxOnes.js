// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// https://www.youtube.com/watch?v=vLsRew-ABVs&t=10s

const maxOnesConsecutive=(nums,k)=>{
    let start=0
    let countZero=0
    let max_len=0
    for(let end=0;end<nums.length;end++){
        if(nums[end]===0){
            countZero++
        }
        while(countZero>k){
            if(nums[start]==0){
                countZero--
            }
            start++
        }
        max_len=Math.max(max_len,end-start+1)
    }
    return max_len
}