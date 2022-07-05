const repeatString = function(myString, myInt) {
    if (myInt < 0) return 'ERROR';
    let repeatedString = '';
    for (let i=0; i<myInt; i++){
        repeatedString += myString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
