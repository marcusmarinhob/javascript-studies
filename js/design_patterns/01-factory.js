function Pessoa(outrasPropriedades){
    return {
        nome: 'Marcus',
        sobrenome: 'Marinho',
        ...outrasPropriedades
    }
}

const p = Pessoa({nome: 'Marcos', age: 10});
console.log(p);