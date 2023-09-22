const getTheTitles = function(values) {
    let list = [];
    let value;
    values.forEach(element => {
        value = element["title"];
        list.push(value);
    });
    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
