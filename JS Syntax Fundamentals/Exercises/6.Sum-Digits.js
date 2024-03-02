function solve(number) {
    let sum = 0;
    const digits = String(number).split('').map(Number);


    for (let digit of digits) {
        sum += digit;
    }




    while (number > 0) {
        sum += number % 10;
        number = Math.trunc(number / 10);
    }


    let textNumber = number.toStrung();
    for (let i = 0; i < textNumber.length; i++) {
        sum += Number(textNumber[i]);
        /* sum += +textNumber[i];number / когато сложиш + пред стринг той го обръща в number */
        sum += Number(textNumber.charAt(i));

    }
    console.log(sum);
}

solve(245678);