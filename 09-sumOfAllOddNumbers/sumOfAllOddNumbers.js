function sumOfAllOddNumbers(nums) {
    // Insert code here;
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 != 0)
            counter++
    }
    return counter
}
console.log(
        sumOfAllOddNumbers([2, 4, 6, 7, 8, 9, 10]))
    // Do not edit this line;
module.exports = sumOfAllOddNumbers;