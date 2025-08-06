// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.


function  maxOperation(nums,k) {
    let map=new Map()
    let count=0
    for(let i=0;i<nums.length;i++){
        let compliment=k-nums[i]
        if(map.has(compliment)&&map.get(compliment)>0){
            count++
            map.set(compliment,map.get(compliment)-1)
        }else{
            map.set(nums[i],(map.get(nums[i])||0)+1)
        }
    }
  return count  
}