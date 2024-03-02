function solve(num) {
    let sum = 0;
    const digits = String(num).split('').map(Number);
    let result = '';

        for (let digit of digits) {
        sum += digit;
        let firstDigit = digits[0];
        
        if(digit==firstDigit){
            result = true;

        }else{
            result = false;
        }
    }
    console.log(result);
    console.log(sum);

}
solve(1234);
solve(2222222);
