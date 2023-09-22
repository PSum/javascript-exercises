const fibonacci = function(value) {
    ammount = parseInt(value);
    let one = 0;
    let two = 1; // 0 1 2
    let result = 0;

    for (let i = 0; i < ammount; i++){
        result = one + two; // 
        one = two;
        two = result;

        // console.log(`Result = ${result} and one = ${one} and two = ${two}`);
    }
    return result;

};

// Do not edit below this line
module.exports = fibonacci;
