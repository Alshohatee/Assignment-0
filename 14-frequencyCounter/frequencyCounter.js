function frequencyCounter(word) {
    // Insert code here;
    let frequency = {};
    let char;
    for (let i = 0; i < word.length; i++) {
        char = word.charAt(i)
        console.log(frequency[char]);
        if (frequency[char])
            frequency[char] = frequency[char] + 1
        else
            frequency[char] = 1
    }

    return frequency;
}
console.log(frequencyCounter("Aseell"));
// Do not edit this line;
module.exports = frequencyCounter;