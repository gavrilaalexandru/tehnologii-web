let concatenateStrings = (arr) => {
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

console.log(concatenateStrings(['a', 'b', 'c']));