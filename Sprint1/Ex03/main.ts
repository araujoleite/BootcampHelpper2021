// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

//number (int, float, hex, binary)
let total: number
total = 0xff0

// array
let items: string[]
items = ["dasd", "foo"]

let valor: Array<number> // notação chamada 'generic'
valor = [1, 2, 3]

// tuple (array com tipo e número de elementos pré-definidos)
let title: [number, string, boolean]
title = [1, "foo", false]

// enum
enum color {
    white = '#fff',
    black = '#000'
}

// any (pode ser qualquer coisa)
let coisa: any
coisa = 1

// voide (vazio)
function logger(): void {
    console.log('foo')
}

// null / undefined
type bla = string | null

//never (não retorna nada)
function erro(): never {
    throw new Error("error")
}

// object
let cart: object
cart = {
    key: "fi"
}

//Type Inference
let message2 = 'mesagem definida'
message2 = "dasdasdsadd"

window.addEventListener("click", (e) => {
    console.log(e.target);
})