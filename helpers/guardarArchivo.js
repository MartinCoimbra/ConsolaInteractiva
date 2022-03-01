const fs = require("fs");

const guardarBD = (data) => {
  const archivo = "./db/data.json";
  fs.writeFileSync(archivo, JSON.stringify(data));
};
module.exports = {
  guardarBD,
};
