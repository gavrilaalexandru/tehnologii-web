function checkNoCharacters(string1, string2) {
    if (string1.length != string2.length) {
        return -1
    }
    let count = 0;

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] != string2[i]) {
            count++
        }
    }
    return count;
}

console.log(checkNoCharacters('salut', 'tulas'))
