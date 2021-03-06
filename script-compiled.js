'use strict';

//Zad. 1

var x = 'Hello';
var y = 'World';
var sayHello = x + ' ' + y;

console.log('Po\u0142\u0105czone wyra\u017Cenie: ' + sayHello);

//Zad. 2

var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log('Wynik mno\u017Cenia: ' + multiply(5, 6));
console.log('Wynik mno\u017Cenia: ' + multiply(6, 6));

//Zad. 3

var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (a, b) {
    return a + b;
  }, 0) / numbers.length;
};
console.log('\u015Arednia: ' + average(1, 3, 6, 6, 52));

//Zad. 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('\u015Arednia ocen: ' + average.apply(undefined, grades));

//Zad. 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log('Imi\u0119:  ' + firstName + '  Nazwisko: ' + lastName);
