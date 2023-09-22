const findTheOldest = function(values) {
    let list = [];
    values.forEach(element => {
        let birth = element["yearOfBirth"];
        let death = element["yearOfDeath"]
        if (death === undefined){
            death = 2023;
        }
        console.log(death);
        age = death - birth;
        list.push(age);
    });
    indexMax = indexOfMax(list);
    return values[indexMax];

};

function indexOfMax(arr) {
    if (arr.length === 0) {
      return -1; // Return -1 for an empty array
    }
  
    let max = arr[0];
    let maxIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }

// Do not edit below this line
module.exports = findTheOldest;
