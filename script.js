//your JS code here. If required.
function mapLetters(word) {
    const letterMap = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (!letterMap.hasOwnProperty(letter)) {
            letterMap[letter] = [i];
        } else {
            letterMap[letter].push(i);
        }
    }

    return letterMap;
}