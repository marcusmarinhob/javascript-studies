function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sun(5, 5, 5, 2, 3));