function countOfAllBooleansAndStrings(arr) {
    // Insert code here;
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" || arr[i] === false || arr[i] === true)
            count++

    }
    return count
}
// console.log(countOfAllBooleansAndStrings([true, "true", false, "false", 9]))
// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;