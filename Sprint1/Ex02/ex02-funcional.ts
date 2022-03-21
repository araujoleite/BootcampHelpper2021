
type biografia = {
    id: number;
    name: string;
    bio: string;
}

const lista: Array<biografia> = [
    {id : 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

let consultaId: number = 1; //Id que será usado para o teste

function pegaNomeBio(qualId: number){
    let nameBio = lista.filter(person => person.id === qualId).map(id => id.name + " - " + id.bio); // Busca na lista a ID e recebe o NOME e BIO
    return nameBio;
};

console.log(pegaNomeBio(consultaId));

/*
Versão antiga do código acima
function pegaNome(qualId: number){
    let name = lista.find(person => person.id === qualId)?.name; // Busca na lista a ID e recebe o NOME
    return name;
};

console.log(pegaNome(consultaId));

function pegaBio(qualId: number){
    let bio = lista.find(person => person.id === qualId)?.bio; // Busca na lista a ID e recebe a BIO
    return bio;
};
*/

function atualiza(qualId: number, name: string, bio: string){
    let index: number =  lista.findIndex(person => person.id === qualId) // Busca a ID na lista e recebe o INDEX
    lista[index].name = name; // Troca nome
    lista[index].bio = bio; // Troca bio
    return lista;
};

console.log(atualiza(consultaId, "José", "Ele é um cara bem legal"));

function deleta(qualId: number){
    const newListDel: biografia[] = lista.filter(person => person.id !== qualId);
    return newListDel;
};

console.log(deleta(consultaId));