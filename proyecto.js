const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarCotizacion() {
  rl.question("Ingrese el nombre del asegurado (o 'Salir' para terminar): ", function(nombre) {
    if (nombre.toLowerCase() === "salir") {
      console.log("Programa finalizado.");
      rl.close();
      return;
    }

    rl.question("Ingrese el salario del asegurado: ", function(salarioStr) {
      const salario = parseFloat(salarioStr);

      rl.question("Ingrese la cantidad de propiedades: ", function(propStr) {
        const propiedades = parseInt(propStr);

        rl.question("Ingrese el valor base de la cotización: ", function(baseStr) {
          const base = parseFloat(baseStr);

          const recargoPropiedades = base * 0.35 * propiedades;
          const recargoSalario = salario * 0.05;
          const total = base + recargoPropiedades + recargoSalario;

          console.log(`Cotización para ${nombre}: Q${total.toFixed(2)}`);

          solicitarCotizacion(); // vuelve a iniciar el ciclo
        });
      });
    });
  });
}

solicitarCotizacion();
