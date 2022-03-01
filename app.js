require("colors");
const { guardarBD, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTarreasBorrar,
  confirmar,
  mostarListadoChecklist,
} = require("./helpers/inquirer");
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
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarTareasCompletadas(true);
        break;
      case "4":
        tareas.listarTareasCompletadas(false);
        break;
      case "5":
        const ids = await mostarListadoChecklist(tareas.listadoArr);
        console.log(ids);
        break;
      case "6":
        const id = await listadoTarreasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("Estas seguro?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
          }
          console.log({ ok });
        }
        break;
    }

    guardarBD(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
