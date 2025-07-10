let estudiantes = [
    {nombre: "Gerson", apellido: "Teran", nota: 8.5, carrera: "Desarrollo de Software"},
    {nombre: "Luis", apellido: "Quishpe", nota: 7.2, carrera: "Desarrollo de Software"},
    {nombre: "Paul", apellido: "Antamba", nota: 9.1, carrera: "Desarrollo de Software"},
    {nombre: "Anthony", apellido: "Ruiz", nota: 7.8, carrera: "Desarrollo de Software"},
    {nombre: "Moises", apellido: "Cagua", nota: 10, carrera: "Desarrollo de Software"}
];

let calcularPromedio = () => {
    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        suma += estudiantes[i].nota;
    }
    let promedio = suma / estudiantes.length;
    return promedio.toFixed(2);
};

console.log(`Promedio general de los estudiantes es: ${calcularPromedio()}`);
