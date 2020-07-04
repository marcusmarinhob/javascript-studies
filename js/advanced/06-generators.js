function* hello(){
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function');
}

const it = hello();

console.log(it.next());