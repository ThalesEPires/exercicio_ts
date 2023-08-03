class Multiplicar {
    valor1: number = 5;
    valor2: number = 10;

    constructor(valor1: number, valor2: number) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    resultado(): number {
        return this.valor1 * this.valor2;
    }
}
class Concatenar {
    nome: string = 'Marcos';

    constructor(nome: string) {
        this.nome = nome;
    }
    
    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}