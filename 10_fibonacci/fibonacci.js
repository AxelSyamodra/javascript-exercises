const fibonacci = function(series) {
    let prev = 0;
    let current = 1;
    let fibo = 0;

    for (let i = 1; i < series; i++) {
        fibo = prev + current;
        prev = current;
        current = fibo;
    }

    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
