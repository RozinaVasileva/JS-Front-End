function solve(num1, num2) {
    let sum = 0;
    let number = '';
    for (let index = num1; index <= num2; index++) {
        number += index + ' ';

        sum += index;
    }
    console.log(number.trim());
    /* console.log(number.trimEnd()); / only last one */
    console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);