//your JS code here. If required.
function mapLetters(word) {
    return word.split('').reduce((letterMap, letter, index) => {
        if (letterMap[letter] === undefined) {
            letterMap[letter] = [index];
        } else {
            letterMap[letter].push(index);
        }
        return letterMap;
    }, {});
}