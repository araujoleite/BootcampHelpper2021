"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
//number (int, float, hex, binary)
let total;
total = 0xff0;
// array
let items;
items = ["dasd", "foo"];
let valor; // notação chamada 'generic'
valor = [1, 2, 3];
// tuple (array com tipo e número de elementos pré-definidos)
let title;
title = [1, "foo", false];
// enum
var color;
(function (color) {
    color["white"] = "#fff";
    color["black"] = "#000";
})(color || (color = {}));
// any (pode ser qualquer coisa)
let coisa;
coisa = 1;
// voide (vazio)
function logger() {
    console.log('foo');
}
//never (não retorna nada)
function erro() {
    throw new Error("error");
}
// object
let cart;
cart = {
    key: "fi"
};
//Type Inference
let message2 = 'mesagem definida';
message2 = "dasdasdsadd";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
