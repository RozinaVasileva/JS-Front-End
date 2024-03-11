function solve(number, array) {
    let newArray = array.slice(0, number);
    let reversedArray = newArray.reverse();

    
    console.log(reversedArray.join(' '));
}
solve(3, [10, 20, 30, 40, 50] );