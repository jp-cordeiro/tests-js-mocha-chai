const fizzBuzz = (num) => {
    let mod3 = num % 3 === 0;
    let mod5 = num % 5 === 0;
    if(mod3 && mod5){
        return 'fizzBuzz';
    }else if(mod3){
        return 'fizz';
    }else if(mod5){
        return 'buzz';
    }
}

export default fizzBuzz;
