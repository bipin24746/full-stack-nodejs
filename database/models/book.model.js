const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,

      defaultValue: "Bipin Sainju",
    },
    bookGenre : {
      type : DataTypes.STRING
    }
  })
  console.log("book triggred")
  return Book
};

module.exports = bookModel