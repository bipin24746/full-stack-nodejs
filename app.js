const express = require("express");
const app = express();

require("./database/connection")
// instead of first two line we can write like this also
// let app = require('express')()



app.get("/books", (req, res) => {
  res.json({
    message: "books fetched successfully",
  });
});

app.post("/books", (req, res) => {
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
