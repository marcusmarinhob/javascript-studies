const promise = new Promise((resolve, reject) => {
    setTimeout( () => resolve('End'), 5000)
})

(async function(){
    console.log('Olá mundo')
})

(function(){
    return new Promise((resolve, reject) =>{
        console.log('Olá mundo')
        resolve()
    })
})()


console.log('Begin')
promise.then((text) => console.log(text))
// Or
promise.then(console.log)
// Or
promise.then(
    (res) => setTimeout( () => res('End'), 5000),
    (rej) => console.error(rej)
)