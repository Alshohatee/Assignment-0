function fizzBuzz(start, end) {
    // Insert code here;
    let holder = [];

    for (var i = start; i <= end; i++) {
        if (i % 3 == 0 && i % 5 != 0)
            holder.push("Fizz");

        else if (i % 3 != 0 && i % 5 == 0)
            holder.push("Buzz");

        else if (i % 3 == 0 && i % 5 == 0)
            holder.push("FizzBuzz");
        else { //otherwise
            holder.push(i);
        }
    }

    return holder;
}

// Do not edit this line;
module.exports = fizzBuzz;