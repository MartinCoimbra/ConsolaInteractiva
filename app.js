require("colors");
const { guardarBD, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareaDB = leerDB();

  if (tareaDB) {
    tareas.cargarTareasFromArray(tareaDB);
  }

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

    guardarBD(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
