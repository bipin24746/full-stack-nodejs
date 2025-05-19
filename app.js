const express = require("express");
// const { books } = require("./database/connection");
// const { fetchBooks, addBook, deleteBook, editBook } = require("./controllers/bookController");

const bookRoute = require("./routes/bookRoute")

const app = express();

const cors = require("cors")
app.use(cors({
  origin : "http://localhost:5173"
}))

require("./database/connection");
// instead of first two line we can write like this also
// let app = require('express')()
app.use(express.json()); // this is important to add

app.use("",bookRoute)

// app.get("/books",fetchBooks);

// app.post("/books",addBook);

// app.delete("/books/:id",deleteBook);

// app.patch("/books/:id",editBook);

// DATABASE_URL="postgresql://postgres.iuzihccpanbgqhcxaqsp:Baspbasp12@#@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"   this is not used in her mistake written

app.listen(3000, () => {
  console.log("ports is running now");
});
