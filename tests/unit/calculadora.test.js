const calculadora = require("../../models/calculadora.js");

test("testandoCalculadora", () => {
  let resultado = calculadora.somar(1, 1);
  expect(resultado).toBe(2);
  console.log(resultado);
});

test("testandoCalculadora", () => {
  let resultado = calculadora.somar(59, 65);
  expect(resultado).toBe(124);
  console.log(resultado);
});

test("testandoCalculadora com Strings", () => {
  let resultado = calculadora.somar(59, "65");
  expect(resultado).toBe("Erro");
  console.log(resultado);
});
