// A function that generates an array of numbers between the given start and end values.
function getNumbers(start, end) {
    if (start > end) {
        // Swap start and end if start is greater than end
        [start, end] = [end, start];
    }

    const numbers = [];

    // Loop to generate numbers and add them to the array.
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers; // Return the array of numbers.
}

// A function that calculates the sum of all numbers between two values.
const sumAll = function(value1, value2) {
    let sum = 0; // Initialize the sum to 0.

    // Check for invalid inputs: negative values or non-number inputs.
    if (value1 <= 0 || value2 <= 0 || typeof value1 !== "number" || typeof value2 !== "number") {
        return "ERROR"; // Return an error message.
    } else {
        // Generate the array of numbers using the getNumbers function.
        const numbers = getNumbers(value1, value2);

        // Loop through the numbers and add them to the sum.
        for (const number of numbers) {
            sum += parseInt(number);
        }

        return sum; // Return the sum of the numbers.
    }
};

// Call the sumAll function with the values 3 and 7.
sumAll(3, 7);

// Do not edit below this line
module.exports = sumAll; // Export the sumAll function for use in other modules.
