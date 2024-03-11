function solve(inputString) {
    
    const words = inputString.split(' ');
    for(let word of words) {
        if(word.match(/#[a-zA-Z]+/g)){
            console.log(word.substring(1, word.inputString));
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')