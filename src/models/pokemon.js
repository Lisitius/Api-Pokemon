module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Le nom ne peut pas être vide.",
          },
          notNull: { msg: "Le nom est obligatoire." },
        },
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "Utilisez uniquement des nombres entiers pour les points de vie.",
          },
          min: {
            args: [0],
            msg: "Les points de vie doivent être supérieurs ou égales à 0.",
          },
          max: {
            args: [999],
            msg: "Les points de vie doivent être inférieurs ou égales à 999.",
          },
          notNull: { msg: "Les points de vie sont une propriété obligatoire." },
        },
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "Utilisez uniquement des nombres entiers pour les points de dégats.",
          },
          min: {
            args: [0],
            msg: "Les points de dégats doivent être supérieurs ou égales à 0.",
          },
          max: {
            args: [99],
            msg: "Les points de dégats doivent être inférieurs ou égales à 999.",
          },
          notNull: {
            msg: "Les points de dégats sont une propriété obligatoire.",
          },
        },
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            msg: "Utilisez uniquement une URL menant vers l'image du pokémon.",
          },
          notNull: { msg: "L'image est une propriété obligatoire." },
        },
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("types").split(",");
        },
        set(types) {
          this.setDataValue("types", types.join());
        },
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
