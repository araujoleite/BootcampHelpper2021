
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

const consultaId: number = 2; //Id que será usado para o teste

function pegaNome(qualId: number){
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].id === qualId){
            return lista[index].name;
        }
    }
};

console.log(pegaNome(consultaId));


function pegaBio(qualId: number){
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].id === qualId){
            return lista[index].bio;
        }
    }
};

console.log(pegaBio(consultaId));

function deleta(qualId: number){
    const newList: biografia[] = []
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].id !== qualId){
            newList.push(lista[index])
        }
    }
    return newList
};

console.log(deleta(consultaId));

const newList: biografia[]=[]
function atualiza(qualId: number, name: string, bio: string){
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].id === qualId){
            newList.push(qualId, name, bio)
        }
        else {newList.push(lista[index])}
    }
    return newList
};

console.log(atualiza(consultaId, "José", "Ele é um cara bem legal"));