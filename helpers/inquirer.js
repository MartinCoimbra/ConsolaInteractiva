const inquirer = require("inquirer");
require("colors");

const menuOption = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1".green}. Crear una tarea`,
      },
      {
        value: "2",
        name: `${"2".green}. Listar tareas`,
      },
      {
        value: "3",
        name: `${"3".green}. Listar tarea completadas`,
      },
      {
        value: "4",
        name: `${"4".green}. Listar tarea pendientes`,
      },
      {
        value: "5",
        name: `${"5".green}. Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6".green}. Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0".green}. Salir \n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=======================".green);
  console.log(" Seleccione una opcion".green);
  console.log("=======================\n".green);

  const { opcion } = await inquirer.prompt(menuOption);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `\n Presione ${"ENTER".red} para continuar`,
    },
  ];
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (!value.length) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
