const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const sequelize = require("./src/db/sequelize");

const app = express();
const port = 4000;

/* middleware */
app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json());

sequelize.initDb();

//find all pokemon
require("./src/routes/findAllPokemons")(app);
//find pokemon with id
require("./src/routes/findPokemonByPk")(app);
//create a pokemon
require("./src/routes/createPokemon")(app);
//update a pokemon
require("./src/routes/updatePokemon")(app);
//delete a pokemon
require("./src/routes/deletePokemon")(app);

app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur : http://localhost:${port}`
  )
);
