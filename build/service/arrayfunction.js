export function sum_of_numarray(data) {
    let sum = 0;
    data.forEach(elem => {
        sum = sum + elem;
    });
    return sum;
}
export function all_have_a_double(data) {
    let res = 0;
    data.forEach(elem => {
        res = res ^ elem;
    });
    return res ? false : true;
}
//# sourceMappingURL=arrayfunction.js.map