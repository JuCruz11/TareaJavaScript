const FrutasList = ['Manzana','Pera', 'Piña','Kiwi','Banano'];

FrutasList.forEach(frutas=>{
    console.log(frutas)

});


FrutasList.forEach(function(fruta,indice){
    console.log(indice,fruta);

});