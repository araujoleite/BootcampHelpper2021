const vogais: string[] = ["a", "e", "i", "o","u"]; // Define as vogais

let contador: number = 0; // Zera o contador

function contaVogal(palavra: string): number{
    
    palavra = palavra.normalize("NFD") // Retira todos acentos

    for (let letra of palavra.toLowerCase()) { //Loop que percorre toda a string
        if (vogais.includes(letra)) { // Verifica se letra é uma vogal
            contador++;    // Incrementa 1 ao contador
        }
    }
    return contador;
}

let frase: string = `Será que o TESTE de vogais funciona?`;  //Pega a palavra que será analisada

console.log(`A string "${frase}" possui ${contaVogal(frase)} vogais.`); //Imprime o resultado