// Definição de classe para objeto pessoa
interface PessoaImp {
    id: number;
    name: string;
    bio: string;
}

// Definição de classe biografias que irá armazenar a classe pessoas
class BiografiasImp {
    bios: PessoaImp[];

    constructor(){
        this.bios = [];
    }

    // Método para insersão de novas pessoas à lista
    novaBio(bio: PessoaImp){
        this.bios.push(bio)
    }

    // Método para retornar NOME e BIO a partir de uma ID
    pegaNomeBio(qualId: number){
        for (let index = 0; index < this.bios.length; index++) {
            if (this.bios[index].id === qualId){
                let resposta = this.bios[index].name + " - " + this.bios[index].bio
                return resposta;
            }
        }
    };

    // Método que atualiza um cadastro a patir de uma ID
    atualiza(qualId: number, name: string, bio: string){
        const newList: PessoaImp[] = []
        for (let index = 0; index < this.bios.length; index++) {
            if (this.bios[index].id === qualId){
                newList.push(qualId, name, bio)
            }
            else {newList.push(this.bios[index])}
        }
        return newList
    };

    // Método que deleta um cadastro a partir de uma ID
    deleta(qualId: number){
        const newList: PessoaImp[] = []
        for (let index = 0; index < this.bios.length; index++) {
            if (this.bios[index].id !== qualId){
                newList.push(this.bios[index])
            }
        }
        return newList
    };
}

// Cria uma lista referência utilizando a organização PESSOA
const listaBaseImp: PessoaImp[] = [{id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
{id: 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
{id: 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
{id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

// Cria um objeto com base na classe BIOGRAFIAS
let historiasImp = new BiografiasImp();

// Carrega o objeto HISTORIAS com as informações da listaBaseImp
listaBaseImp.forEach((pessoa: PessoaImp) => {historiasImp.novaBio(pessoa)});

// Teste do método pegaNomeBio
console.log(historiasImp.pegaNomeBio(1));

// Teste do método atualiza
console.log(historiasImp.atualiza(1, 'Gustavo', 'É um cara bem legal'));

// Teste do método deleta
console.log(historiasImp.deleta(3));