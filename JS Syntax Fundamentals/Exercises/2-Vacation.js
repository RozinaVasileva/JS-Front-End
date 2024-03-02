function solve(count, type, day) {

    let singlePrice;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                singlePrice = 8.45;
            } else if (day === 'Saturday') {
                singlePrice = 9.80;
            } else if (day === 'Sunday')
                singlePrice = 10.46;
            break;
        case 'Business':
            if (day === 'Friday') {
                singlePrice = 10.90;
            } else if (day === 'Saturday') {
                singlePrice = 15.60;
            } else if (day === 'Sunday')
                singlePrice = 16;
            break;        
        case 'Regular':
            if (day === 'Friday') {
                singlePrice = 15;
            } else if (day === 'Saturday') {
                singlePrice = 20;
            } else if (day === 'Sunday')
                singlePrice = 22.50;
            break;
    }
    let totalPrice = singlePrice*count;
    
            if (type ==='Students' && count >=30) {
                totalPrice = totalPrice*0.85;
                
            } else if (type ==='Business' && count >=100) {
                totalPrice = totalPrice - 10*singlePrice;
            } else if (type ==='Regular' && count >=10 && count <=20){
                totalPrice = totalPrice*0.95;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }
solve(40, 'Regular', 'Saturday');
