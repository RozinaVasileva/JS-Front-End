function multiplication(number) {
    let result;

    for (let index = 1; index <= 10; index++) {

        result = number * index;
        console.log(`${number} X ${index} = ${result}`);
    }

}
multiplication(5);