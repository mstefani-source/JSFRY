
function add(a, b) {
    return a + b
}


function extern(fn, limit) {
    let count = 0;
    return function gg(...args) {
        if (limit > count) {
            count++
            return fn.apply(this, args)
        }
    }
}


const internFn = extern(add, 1);

let one = internFn(4, 5);

let two = internFn(5, 5);
//# sourceMappingURL=linkedinQuiz.js.map

console.log(one)
console.log(two)