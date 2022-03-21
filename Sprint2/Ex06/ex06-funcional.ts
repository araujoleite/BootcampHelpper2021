// Definição de classe para objeto pessoa
interface Pessoa {
    id: number;
    name: string;
    bio: string;
}

// Definição de classe biografias que irá armazenar a classe pessoas
class Biografias {
    bios: Pessoa[];

    constructor(){
        this.bios = [];
    }

    // Método para insersão de novas pessoas à lista
    newBio(bio: Pessoa){
        this.bios.push(bio)
    }

    // Método para retornar NOME e BIO a partir de uma ID
    pegaNomeBio(qualId: number){
        let nameBio = this.bios.filter(person => person.id === qualId).map(id => id.name + " - " + id.bio);
        return nameBio;
    };

    // Método que atualiza um cadastro a patir de uma ID
    atualiza(qualId: number, name: string, bio: string){
        let index: number =  this.bios.findIndex(person => person.id === qualId) // Busca a ID na lista e recebe o INDEX
        this.bios[index].name = name; // Troca nome
        this.bios[index].bio = bio; // Troca bio
        return this.bios[index];
    };

    // Método que deleta um cadastro a partir de uma ID
    deleta(qualId: number){
        const newListDel: Pessoa[] = this.bios.filter(person => person.id !== qualId); // Gera uma nova lista, não incluindo a ID deletada
        return newListDel;
    };
}

// Cria uma lista referência utilizando a organização PESSOA
const listaBase: Pessoa[] = [{id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
{id: 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
{id: 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
{id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

// Cria um objeto com base na classe BIOGRAFIAS
let historias = new Biografias();

// Carrega o objeto HISTORIAS com as informações da listaBase
listaBase.forEach((pessoa: Pessoa) => {historias.newBio(pessoa)});

// Teste do método pegaNomeBio
console.log(historias.pegaNomeBio(1));

// Teste do método atualiza
console.log(historias.atualiza(1, 'Gustavo', 'É um cara bem legal'));

// Teste do método deleta
console.log(historias.deleta(3));