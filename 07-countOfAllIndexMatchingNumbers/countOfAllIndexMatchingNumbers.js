function countOfAllIndexMatchingNumbers(nums) {
    // Insert code here;    
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i)
            counter++
    }
    return counter
}
console.log(countOfAllIndexMatchingNumbers([0, 1, 2, 3, 4]))

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;