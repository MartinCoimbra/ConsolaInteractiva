const inquirer = require("inquirer");
require("colors");

const menuOption = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: ["opt1", "opt2", "opt3"],
  },
];

const inquirerMenu = async () => {
  console.log("=======================".green);
  console.log(" Seleccione una opcion".green);
  console.log("=======================\n".green);

  const opt = await inquirer.prompt(menuOption);
  return opt
};

module.exports = { 
  inquirerMenu,
};
