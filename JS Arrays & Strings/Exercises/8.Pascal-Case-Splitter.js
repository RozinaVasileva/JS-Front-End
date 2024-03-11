function solve(string) {

    const matches = string.matchAll(/[A-Z][a-z]*/g);
    const words = Array.from(matches).map(match => match[0]);
    console.log(words.join(', '));
    
    
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')