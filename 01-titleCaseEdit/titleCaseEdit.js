function titleCaseEdit(title) {
    // Insert code here;

    // convert the title string to lower
    // case and store it in array of string
    let titleToArr = title.toLowerCase().split(' ');

    for (let i = 0; i < titleToArr.length; i++) {
        // convert the first letter to upper case of each word
        titleToArr[i] = titleToArr[i].charAt(0).toUpperCase() + titleToArr[i].substring(1);

    }
    // convert title back to string from an array
    let titleBackToString = titleToArr.join(' ')

    return titleBackToString
}
// console.log(titleCaseEdit("i am abdo"))
// Do not edit this line;
module.exports = titleCaseEdit;