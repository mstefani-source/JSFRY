var initialstate = 'Ха;ава;рьь;ков';
function foor(str, symb, num) {
    if (str.indexOf(symb) < 0 || num <= 0) {
        return str;
    }
    var count = 0;
    return str.split('').reduce(function (acc, item) {
        if (item == symb) {
            count++;
            return count == num ? acc : acc + item;
        }
        return acc + item;
    }, '');
}
console.log("the initial state", initialstate);
console.log("result = ", foor(initialstate, ';', 3));
