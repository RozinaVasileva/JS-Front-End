function solve(numbers) {

    numbers.sort((a, b) => a - b);
    const newArray = [];
    while (numbers.length > 0) {
        let first = numbers.shift();
        let last = numbers.pop();
        newArray.push(first, last);
    }
    return newArray;

}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);