const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Author: {
      type: DataTypes.STRING,

      defaultValue: "Bipin Sainju",
    },
  })
  console.log("book triggred")
  return Book
};

module.exports = bookModel