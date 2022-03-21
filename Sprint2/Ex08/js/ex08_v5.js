"use strict";
class Pessoa {
    constructor() {
        this.id = 0;
        this.name = "";
        this.bio = "";
        this.inventa = "";
    }
}
class Biografias {
    constructor() {
        this.bios = [];
    }
}
class Resultado extends Biografias {
    newBio(bio) {
        this.bios.push(bio);
    }
    nome(id) {
        if (id > this.bios.length) {
            return 'ID não cadastrado';
        }
        let res = this.bios.filter(person => person.id === id).map(id => id.name);
        return `Meu nome é ${res}`;
    }
    bio(id) {
        if (id > this.bios.length) {
            return 'ID não cadastrado';
        }
        let res = this.bios.filter(person => person.id === id).map(id => id.bio);
        return res;
    }
    inventa(id) {
        if (id > this.bios.length) {
            return 'ID não cadastrado';
        }
        let res = this.bios.filter(person => person.id === id).map(id => id.inventa);
        if (res == "") {
            return 'Não inventei a linguagem.';
        }
        return res;
    }
}
const listaBase = [{ id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina", inventa: "Eu não criei, mas ela foi criada em minha homenagem." },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia", inventa: "" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.", inventa: "" },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.", inventa: "" }];
let historias = new Resultado();
listaBase.forEach((pessoa) => { historias.newBio(pessoa); });
console.log("---- Ada ----");
console.log(`Oi meu nome é ${historias.nome(1)}`);
console.log(`Minha história: ${historias.bio(1)}`);
console.log(`Você inventou a linguagem Ada? - R: ${historias.inventa(1)}`);
console.log(" ");
console.log("---- Alan ----");
console.log(`Oi meu nome é ${historias.nome(2)}`);
console.log(`Minha história: ${historias.bio(2)}`);
console.log(`Você inventou a linguagem Ada? - R: ${historias.inventa(2)}`);
console.log(" ");
console.log("---- Nikola ----");
console.log(`Oi meu nome é ${historias.nome(3)}`);
console.log(`Minha história: ${historias.bio(3)}`);
console.log(`Você inventou a linguagem Ada? - R: ${historias.inventa(3)}`);
console.log(" ");
console.log("---- Nicolau ----");
console.log(`Oi meu nome é ${historias.nome(4)}`);
console.log(`Minha história: ${historias.bio(4)}`);
console.log(`Você inventou a linguagem Ada? - R: ${historias.inventa(4)}`);
