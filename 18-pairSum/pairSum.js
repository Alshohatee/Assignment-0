function pairSum(nums, target) {
    // Insert code here;

    // checking if the length is 1 or less 
    if (nums.length <= 1) {
        deferred.reject(nums);
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                if (nums[i] + nums[j] == target)
                    return true;
            }
        }
    }
    return false;
}

// Do not edit this line;
module.exports = pairSum;