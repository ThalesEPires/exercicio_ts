"use strict";
class Multiplicar {
    constructor(valor1, valor2) {
        this.valor1 = 5;
        this.valor2 = 10;
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    resultado() {
        return this.valor1 * this.valor2;
    }
}
class Concatenar {
    constructor(nome) {
        this.nome = 'Marcos';
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
