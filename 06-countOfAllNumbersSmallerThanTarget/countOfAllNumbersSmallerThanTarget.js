function countOfAllNumbersSmallerThanTarget(nums, target) {
    // Insert code here;
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target)
            counter++
    }
    return counter
}
// console.log(countOfAllNumbersSmallerThanTarget([1, 5, 3, 2, 20, 18], 18))
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;