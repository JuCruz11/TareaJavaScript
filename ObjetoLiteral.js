const Persona = {
    Nombre: 'Juan',
    Edad: 28,
    Ciudad: 'San Jose'

};

console.log('Objeto literal Original',Persona);

console.log('Nombre de la Persona:', Persona.Nombre);


Persona.Ciudad = 'Guanacaste';
Persona.Ocupacion = 'Estudiante';


console.log(Persona);
