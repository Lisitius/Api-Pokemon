const { Pokemon } = require("../db/sequelize");

module.exports = (app) => {
  app.get("/api/pokemons", (req, res) => {
    Pokemon.findAll().then((pokemons) => {
      const message = "La liste des pokémons à bien été récupérée.";
      res.json({ message, data: pokemons });
    });
  });
};
