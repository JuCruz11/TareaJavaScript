const FechaActual = new Date();


const Year = FechaActual.getFullYear();
console.log('Año en Curso:',Year);


const MonthsList = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
const Month = FechaActual.getMonth();
console.log('Mes en Curso:',MonthsList[Month]);


const NuevaFecha = new Date('2025,01,01');
console.log('La nueva fecha solicitada es:',NuevaFecha);
