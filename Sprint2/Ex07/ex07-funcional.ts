class ApenasNum {
    lista: Array<any>;

    constructor(lista: Array<any>){
        this.lista = lista.filter(isFinite); // Salva apenas os números da lista apresentada
    }

    menor(): string{
        let menor = Math.min(...this.lista); // Pega o menor número
        return `O menor número da lista é ${menor}.`;
    }

    maior(){
        let maior = Math.max.apply(null, this.lista); // Pega o maior número
        return `O menor número da lista é ${maior}.`;
    }

    media(): string{
        let media = (this.lista.reduce((soma: number, num: number) => soma += num, 0) / this.lista.length).toFixed(2); // Calcula a média
        return `A média dos número desta lista é ${media}.`
    }
}

let lista: ApenasNum = new ApenasNum([5, 9.8, "Alan", "José", 1000, 0.45, "Brasil"])

console.log(lista.menor());

console.log(lista.maior());

console.log(lista.media());