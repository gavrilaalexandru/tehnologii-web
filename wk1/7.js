const sampleString = 'the quick brown fox jumps over the lazy dog'

const getLetterFrequencies = (text) => {
    const letters = text.split(' ').split('')
    const result = {}
    
    for (let letter of letters) {
        if (letter in result) {
            result[letter]++
        } else {
            result[letter] = 1
        }
    }
    
    const totalLetters = letters.length
    for (let letter in result) {
        result[letter] /= totalLetters
    }
    
    return result
}

console.log(getLetterFrequencies(sampleString))