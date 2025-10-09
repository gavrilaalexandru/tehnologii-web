function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for(let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

if (process.argv.length <= 2) {
    console.log('not enough parameters')
} else {
    console.log(fibonacci(parseInt(process.argv[2])))
}