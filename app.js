const express = require("express");
const { books } = require("./database/connection");

const app = express();

require("./database/connection");
// instead of first two line we can write like this also
// let app = require('express')()
app.use(express.json())  // this is important to add

app.get("/books", async (req, res) => {
  const datas = await books.findAll(); //select all for books
  res.json({
    message: "books fetched successfully",
    //datas : datas
    datas
  });
});

app.post("/books", async (req, res) => {
  console.log(req.body)
  const bookName = req.body.bookName
  const bookPrice = req.body.price
  const bookAuthor = req.body.auther
  const bookGenre = req.body.genre

  console.log(bookName)
  console.log(bookPrice)
  console.log(bookAuthor)
  console.log(bookGenre)
  // const {bookName,bookPrice,bookAuthor,bookGenre} = req.body    this is called destructuring

  await books.create({
    bookName : bookName, //columnName : value
    Price : bookPrice,
    Author : bookAuthor,
    bookGenre
  })
  res.json({
    message: "Books added successfully",
  });
});

app.delete("/books/:id", (req, res) => {
  res.json({
    message: "Books Deleted Successfully",
  });
});

app.patch("/books/:id", (req, res) => {
  res.json({
    message: "Books Updated Successfully",
  });
});

// DATABASE_URL="postgresql://postgres.iuzihccpanbgqhcxaqsp:Baspbasp12@#@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"   this is not used in her mistake written

app.listen(3000, () => {
  console.log("ports is running now");
});
