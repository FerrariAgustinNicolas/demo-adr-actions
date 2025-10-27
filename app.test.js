const suma = require('./app');

test('sumar 1 + 2 debe dar 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('sumar -5 + 10 debe dar 5', () => {
  expect(suma(-5, 10)).toBe(5);
});