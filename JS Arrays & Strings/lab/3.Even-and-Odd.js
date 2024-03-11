function solve(array) {
    let evenNumArray = array.filter(number => number % 2 === 0);
    let oddNumArray = array.filter(number => number % 2 !== 0);

    let evenSum = evenNumArray.reduce((evenSum, currentNum) => evenSum + currentNum, 0);

    let oddSum = oddNumArray.reduce((oddSum, currentNum) => oddSum + currentNum, 0);

    let result = evenSum - oddSum;

    console.log(result);
}
solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);