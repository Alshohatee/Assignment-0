function sumOfNumsWithinARange(nums, start, end) {
    // Insert code here;
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= start && nums[i] <= end)
            counter++
    }
    return counter

}
console.log(sumOfNumsWithinARange([2, 4, 5, 6, 23], 2, 23))
    // Do not edit this line;
module.exports = sumOfNumsWithinARange;