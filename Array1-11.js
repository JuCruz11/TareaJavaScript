const Números = [1,2,3,4,5,6,7,8,9,10];
const TercerElemento = Números[2];
console.log(Números);
console.log(`Este es el tercer elemento de la lista:`, TercerElemento);

const TamanoListaNumeros = Números.length

const ElementoOnce = Números.push(11);
Números.shift(1);

Números.forEach((value)=> {
console.log(value)
});
console.log("Fin de la lista")


