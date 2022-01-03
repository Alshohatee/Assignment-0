function countOfAllBooleans(arr) {
    // Insert code here;
    let countBool = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false || arr[i] === true)
            countBool++
    }
    return countBool
}

// console.log(countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]))
// Do not edit this line;
module.exports = countOfAllBooleans;