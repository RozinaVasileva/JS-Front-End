function solve(text, occurrence) {

while (text.includes(occurrence)) {
    text = text.replace(occurrence, '*'.repeat(occurrence.length));
}
 console.log(text);
}

solve('A small sentence with some words','small');