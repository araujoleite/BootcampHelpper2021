// Criação de um novo tipo de ARRAY tipando cada campo dela
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

// Carrega lista original para uma nova que pode ser alterada
let novaLista: Array<biografia> = lista;

const tBody = document.getElementById('tbody');

function carregaLista(lista): void{
    
    // Zera o conteúdo de tBody para carregar um novo
    tBody.innerHTML = "";
    
    // ForEach que percorre toda a ARRAY executando os mesmos processos para cada INDEX
    lista.forEach((pessoa: biografia) => {
        const tr = document.createElement('tr');
        
        // Cria uma nova célula (td) na tabela com nome e coloca como "filha" da linha (tr)
        const tdNome = document.createElement('td');
        tdNome.textContent = pessoa.name;
        tdNome.id = `nome${pessoa.id}`;
        tr.appendChild(tdNome);
        
        // Cria uma nova célula (td) na tabela com bio e coloca como "filha" da linha (tr)
        const tdBio = document.createElement('td');
        tdBio.textContent = pessoa.bio;
        tdBio.id = `bio${pessoa.id}`;
        tr.appendChild(tdBio);

        // Cria um botão delete com evento onClick vinculado ao id do cadastro em questão
        const tdDelete = document.createElement('td');
        const btDelete = document.createElement('button');
        btDelete.textContent = 'Deletar';
        btDelete.id = `${pessoa.id}`;
        btDelete.onclick = (event) => (deletar(pessoa.id));
        tdDelete.appendChild(btDelete);
        tr.appendChild(tdDelete);

        // Cria um botão editar com evento onClick vinculado ao id do cadastro em questão
        const tdEdit = document.createElement('td');
        const btEdit = document.createElement('button');
        btEdit.textContent = 'Editar';
        btEdit.id = `${pessoa.id}`;
        btEdit.onclick = (event) => (preEdit(pessoa.id));
        tdEdit.appendChild(btEdit);
        tr.appendChild(tdEdit);

        // Vincula tudo conteúdo "afilhado" à TR ao tBody
        tBody.appendChild(tr);
    })
}

// Deleta o cadastro selecionado da variável novaLista
function deletar(id): void{
    let index = novaLista.findIndex(pessoa => pessoa.id === id);
    alert(novaLista[index].name + `, seu nome foi deletado!`);
    novaLista.splice(index, 1);
    carregaLista(novaLista);
}

// Variável para marcação de INDEX utilizada nas funções de alteração
let indexAltera: number = 0;

// Identifica o cadastro a ser editado e coloca no campo de alteração.
function preEdit(id): void{
    indexAltera = novaLista.findIndex(pessoa => pessoa.id === id);
    const inputId = <HTMLInputElement>document.getElementById('inputId');
    const inputNome = <HTMLInputElement>document.getElementById('inputNome');
    const inputBio = <HTMLInputElement>document.getElementById('inputBio');
    inputId.value = `${novaLista[indexAltera].id}`;
    inputNome.value = `${novaLista[indexAltera].name}`;
    inputBio.value = `${novaLista[indexAltera].bio}`;
}

// Adiciona evento ao clicar no botão Alterar
const btAlterar = document.getElementById('btAlterar');
btAlterar.onclick = (event) => (alterar());

function alterar(): void{
    const inputId = <HTMLInputElement>document.getElementById('inputId');
    const inputNome = <HTMLInputElement>document.getElementById('inputNome');
    const inputBio = <HTMLInputElement>document.getElementById('inputBio');
    
    // Se o valor do campo oculto ID for vazio ele pede para que um cadastro seja selecionado
    if(inputId.value == ""){alert('Escolha um nome para editar.')}
    
    // Se não, ele atribui os novos valores à variável novaLista
    else{
        novaLista[indexAltera].name = inputNome.value;
        novaLista[indexAltera].bio = inputBio.value;
        alert(`Os dados de ${lista[indexAltera].name} foram alterados.`);
        inputId.value = "";
        inputNome.value = "";
        inputBio.value = "";
    };

    //Chama função carregaLista para carregar os novos dados
    carregaLista(novaLista);
}

// Adiciona evento ao clicar no botão Cancelar
const btCancelar = document.getElementById('btCancelar');
btCancelar.onclick = (event) => (cancelar());

// Limpa todos os campos de alteração
function cancelar(){
    const inputId = <HTMLInputElement>document.getElementById('inputId');
    const inputNome = <HTMLInputElement>document.getElementById('inputNome');
    const inputBio = <HTMLInputElement>document.getElementById('inputBio');
    inputId.value = "";
    inputNome.value = "";
    inputBio.value = "";
}

// Chama função carregaLista usando a novaLista como parâmetro
carregaLista(novaLista);