function intercaleaza(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return 0;
    }
    let rezultat = []
    for(let i = 0; i < arr1.length; i++) {
        rezultat.push(arr1[i], arr2[i]);
    }

    return rezultat;
}

let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6]
let arrIntercalat = intercaleaza(arr1, arr2)
console.log(arrIntercalat)