
var base2, base3, base5, base8, base16;
var resto, dividendo;
var decimal = prompt("Digite o número decimal: ");

function converteDecimalParaBases(decimal, base) {
  var dividendo, quociente, resto, resultado;
  dividendo = decimal;
  resultado = '';

  while (dividendo > 0) {
    quociente = Math.floor(dividendo / base);
    resto = dividendo % base;
    if (resto == 10) {
      resto = 'A';
    }
    if (resto == 11) {
      resto = 'B';
    }
    if (resto == 12) {
      resto = 'C';
    }
    if (resto == 13) {
      resto = 'D';
    }
    if (resto == 14) {
      resto = 'E';
    }
    if (resto == 15) {
      resto = 'F';
    }

    resultado = '' + resto + resultado;
    dividendo = quociente;

  }
  return resultado;
}
base2 = converteDecimalParaBases(decimal, 2);
base3 = converteDecimalParaBases(decimal, 3);
base5 = converteDecimalParaBases(decimal, 5);
base8 = converteDecimalParaBases(decimal, 8);
base16 = converteDecimalParaBases(decimal, 16);

alert(
  "BASE 2 : " + base2 + '\n' +
  "BASE 3 : " + base3 + '\n' +
  "BASE 5 : " + base5 + '\n' +
  "BASE 8 : " + base8 + '\n' +
  "BASE 16: " + base16
)


