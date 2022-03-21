"use strict";
var _a;
(_a = document.getElementById("enviar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", contarImp); //Verifica quando ler o texto
class PalavraImp {
    constructor(palavra) {
        this.palavra = palavra;
    }
    contaVogal() {
        const vogais = ["a", "e", "i", "o", "u"]; // Define as vogais
        let contador = 0;
        for (let letra of this.palavra.toLowerCase().normalize("NFD")) { // Deixa todas as letras minúsculas, sem acento e faz loop que percorre toda a string
            for (let vogal of vogais) {
                if (letra == vogal) {
                    contador++;
                }
            }
        }
        let conjuga = contador > 1 ? 'vogais' : 'vogal';
        return `A palavra ${this.palavra} possui ${contador} ${conjuga}.`;
    }
}
function contarImp() {
    let texto = new PalavraImp(document.getElementById("texto").value); // Pega valor digitado
    alert(texto.contaVogal());
}
