function solve(fruit, weight, price) {

    let weightInKilograms = weight/1000;
    let money = price*weightInKilograms;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.` );
}
solve('orange', 2500, 1.80 );