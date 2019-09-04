//Zad. 1

const x = 'Hello';
const y = 'World';
const sayHello = `${x} ${y}`

console.log(`Połączone wyrażenie: ${sayHello}`);

//Zad. 2

let multiply=(x, y=1) => {return x * y};
console.log(`Wynik mnożenia: ${multiply(5, 6)}`);
console.log(`Wynik mnożenia: ${multiply(6, 6)}`);

//Zad. 3

let average = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log(`Średnia: ${average(1,3,6,6,52)}`);

//Zad. 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Średnia ocen: ${average(...grades)}`);

//Zad. 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, ,lastName] = data;
console.log(`Imię:  ${firstName}  Nazwisko: ${lastName}`);

