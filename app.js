require("colors");
const { guardarBD } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
    }
    
    //guardarBD(tareas.listadoArr);
    
    await pausa();
  } while (opt !== "0");
};

main();
