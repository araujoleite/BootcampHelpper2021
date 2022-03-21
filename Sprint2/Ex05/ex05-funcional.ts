class PalavraFunc {
    palavra: string;

    constructor(palavra: string){
        this.palavra = palavra;
    }

    contaVogal(): string {
        // Define as vogais
        const vogais: string[] = ["a", "e", "i", "o","u"];
        
        // Cria contador zerado
        let contador: number = 0;

        // Transforma em minúsculo, sem acento e percorre toda string verificando se possui alguma vogal, a partir de um operador ternário
        for (let letra of this.palavra.toLowerCase().normalize("NFD")) { vogais.includes(letra) ? contador++ : null };

        // Define se possui mais de uma vogal para retornar a conjugação correta
        let conjuga = contador > 1 ? 'vogais' : 'vogal';
        return `A palavra ${this.palavra} possui ${contador} ${conjuga}.`;
    }
} 

// Chamador da função contarFunc
document.getElementById("enviar")?.addEventListener ("click", contarFunc);

function contarFunc(){
    let texto: PalavraFunc = new PalavraFunc((<HTMLInputElement>document.getElementById("texto")).value); // Pega valor digitado
    alert(texto.contaVogal());
}