document.getElementById("enviar")?.addEventListener ("click", contaVogal); //Verifica quando ler o texto

function contaVogal() {

    let texto: string = (<HTMLInputElement>document.getElementById("texto")).value; // Pega valor digitado

    const vogais: string[] = ["a", "e", "i", "o","u"]; // Define as vogais

    let contador: number = 0; // Zera o contador

    for (let letra of texto.toLowerCase().normalize("NFD")) { //Loop que percorre toda a string

        if (vogais.includes(letra)) { //Verifica se letra é uma vogal
            contador++; //Adiciona mais 1 ao contador
        }
    }
    alert(`A frase possuir ${contador} vogais.`);
}