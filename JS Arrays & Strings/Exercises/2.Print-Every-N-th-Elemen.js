function solve(array, num) {
    let result = [];
    for (let i = 0; i < array.length; i += num) {
        result.push(array[i]);
        
    }
    return result;
}

function solve1(numbers, step) {
    const result = numbers.filter((element, index) => index % step === 0);
    return result;
}
solve(['5', '20', '31', '4', '20'], 2);