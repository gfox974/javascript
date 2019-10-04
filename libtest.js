class Test {
    constructor(name, type) { // equ init
        this.name = name;
        this.type = type;
        this.attr1 = 0;
    }
    genRand(bonus) {
        return Math.random() + bonus;
    }
}