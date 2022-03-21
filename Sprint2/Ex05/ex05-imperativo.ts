class PalavraImp {
    palavra: string;

    constructor(palavra: string){
        this.palavra = palavra;
    }

    contaVogal(): string {
        // Define as vogais
        const vogais: string[] = ["a", "e", "i", "o","u"];

        // Cria contador zerado
        let contador: number = 0;

        // Transforma em minúsculo, sem acento e percorre toda string
        for (let letra of this.palavra.toLowerCase().normalize("NFD")) {
            
            // Verifica se a letra é uma vogal, se TRUE ele incrementa 1 ao contador
            for (let vogal of vogais) {
                if (letra == vogal){
                    contador++
                }
            }
        }

        // Define se possui mais de uma vogal para retornar a conjugação correta
        let conjuga = contador > 1 ? 'vogais' : 'vogal';
        return `A palavra ${this.palavra} possui ${contador} ${conjuga}.`;
    }
} 

// Chamador da função contarFunc
document.getElementById("enviar")?.addEventListener ("click", contarImp);

function contarImp(){
    let texto: PalavraImp = new PalavraImp((<HTMLInputElement>document.getElementById("texto")).value); // Pega valor digitado
    alert(texto.contaVogal());
}