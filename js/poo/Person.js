class Person {
    #name = '';

    constructor(name){
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
    
    set name(name) {
        this.#name = name;
    }
}