const palindromes = function (str) {
    let strInput = str.replace(/\s/g, "");
    strInput = strInput.replace("!", "");
    strInput = strInput.replace(".", "");
    strInput = strInput.replace(",", "");
    strInput = strInput.toLowerCase();
    let newstr = strInput.split("").reverse().join("");
    console.log(strInput + newstr);
    if (strInput == newstr) {
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes('Animal loots foliated detail of stool lamina.'))

