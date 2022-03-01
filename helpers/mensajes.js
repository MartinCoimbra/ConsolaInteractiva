require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=======================".green);
    console.log(" Seleccione una opcion".green);
    console.log("=======================\n".green);

    console.log(`${"1".green}. Crear una tarea`);
    console.log(`${"2".green}. Listar tarea`);
    console.log(`${"3".green}. Listar tarea completadas`);
    console.log(`${"4".green}. Listar tarea pendientes`);
    console.log(`${"5".green}. Completar tarea(s)`);
    console.log(`${"6".green}. Borrar tarea`);
    console.log(`${"0".green}. Salir \n`);

    /*input: Pausa la la ejecucion, espera unos caracteres y el enter. */
    /*output: Mostrar un mensaje en consola cuando le pedimos algo al usuario */

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\n Presione ${"ENTER".red} para continuar \n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
