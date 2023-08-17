const reverseString = function(word) {
    length = word.length;
    let output = "";
    console.log(output)
    for (let i = 0; i < word.length; i++) {
        let index = length - i -1;
        // console.log(index);
        let letter = word[index];
        output += letter;
        // console.log(word[index]);
    }
    return output;
};

// reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
