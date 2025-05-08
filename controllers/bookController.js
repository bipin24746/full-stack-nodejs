const { where } = require("sequelize");
const { books } = require("../database/connection");

exports.fetchBooks = async (req, res) => {
      const datas = await books.findAll(); //select all for books
      res.json({
        message: "books fetched successfully",
        //datas : datas
        datas,
      });
    };
    
    exports.addBook = async (req, res) => {
      console.log(req.body);
      const bookName = req.body.bookName;
      const bookPrice = req.body.price;
      const bookAuthor = req.body.auther;
      const bookGenre = req.body.genre;
    
      console.log(bookName);
      console.log(bookPrice);
      console.log(bookAuthor);
      console.log(bookGenre);
      // const {bookName,bookPrice,bookAuthor,bookGenre} = req.body    this is called destructuring
    
      await books.create({
        bookName: bookName, //columnName : value
        Price: bookPrice,
        Author: bookAuthor,
        bookGenre,
      });
      res.json({
        message: "Books added successfully",
      });
    };
    
    exports.editBook = (req, res) => {
      res.json({
        message: "Books Updated Successfully",
      });
    };
    
    exports.deleteBook = (req, res) => {
      res.json({
        message: "Books Deleted Successfully",
      });
    };
    exports.singleFetchBook = async function(req,res){
      const id = req.params.id
      const datas = await books.findByPk(id)  //always returns object
      // const datass = await books.findAll({
      //   where : {
      //     id : id
      //   }
      // })
      res.json({
        message : "Single Book Fetched",
        datas,
        // datass
      })
    }
    

// const fetchBooks = async (req, res) => {
//   const datas = await books.findAll(); //select all for books
//   res.json({
//     message: "books fetched successfully",
//     //datas : datas
//     datas,
//   });
// };

// const addBook = async (req, res) => {
//   console.log(req.body);
//   const bookName = req.body.bookName;
//   const bookPrice = req.body.price;
//   const bookAuthor = req.body.auther;
//   const bookGenre = req.body.genre;

//   console.log(bookName);
//   console.log(bookPrice);
//   console.log(bookAuthor);
//   console.log(bookGenre);
//   // const {bookName,bookPrice,bookAuthor,bookGenre} = req.body    this is called destructuring

//   await books.create({
//     bookName: bookName, //columnName : value
//     Price: bookPrice,
//     Author: bookAuthor,
//     bookGenre,
//   });
//   res.json({
//     message: "Books added successfully",
//   });
// };

// const editBook = (req, res) => {
//   res.json({
//     message: "Books Updated Successfully",
//   });
// };

// const deleteBook = (req, res) => {
//   res.json({
//     message: "Books Deleted Successfully",
//   });
// };

// modules.export = {fetchBooks,addBook,editBook,deleteBook}
