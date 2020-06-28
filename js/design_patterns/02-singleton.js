function Pessoa(){
    if (!Pessoa.instance){
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p1 = Pessoa.call({name: 'Marcus'});
const p2 = Pessoa.call({name: 'Marinho'});

console.log(p1);
console.log(p2);
