function solve(wordsInput, text) {

    const words = wordsInput.split(', ');

    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '*') {
            if (startIndex < 0) {
                startIndex = i;
                endIndex = i + 1;
            } else {
                endIndex = i + 1;
            }

        } else {
            if (startIndex >= 0) {
                let length = endIndex - startIndex
                let word = words.find(w => w.length === length);
                text = text.replace('*'.repeat(length), word);
                startIndex = -1;
                endIndex = -1;
            }
        }


    }
    if (startIndex >= 0) {
        let length = endIndex - startIndex
        let word = words.find(w => w.length === length);
        text = text.replace('*'.repeat(length), word);

    }

    console.log(text);
}

function solve2(wordsInput, text) {
    const words = wordsInput.split(', ');

    while (text.includes('*')) {
        words.forEach(word => {
            let censore = '*'.repeat(word.length);
            text = text.replace(censore, word);
        });
    }
    console.log(text);

}
function solve3(wordsInput, text) {
    const words = wordsInput.split(', ');
    const textArray = text.split(' ');
    const result = textArray
        .map(aWord => aWord.includes('*')
            ? words.find(w => w.length === aWord.length)
            : aWord)
        .join(' ');
    console.log(result);
}
solve('great, learning', 'softuni is ***** place for ******** new programming languages');
solve2('great, learning', 'softuni is ***** place for ******** new programming languages');
solve3('great, learning', 'softuni is ***** place for ******** new programming languages');