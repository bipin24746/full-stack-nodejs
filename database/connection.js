//database connection code ko logic

// const sequelize = require("sequelize")
// const sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes
//instead of doing this we can do like this

//this process is called destructuring in javascript
const { Sequelize, DataTypes } = require("sequelize");

const SequelizeObject = new Sequelize(
  "postgresql://postgres.iuzihccpanbgqhcxaqsp:omnamahshivaye@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

);

SequelizeObject.authenticate()
  .then(() => {
    console.log("Authenticate done, connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {}; 
db.Sequelize = Sequelize;
db.SequelizeObject = SequelizeObject;

db.books = require("./models/book.model")(SequelizeObject, DataTypes);


//migrate code
SequelizeObject.sync({force : false,alter : true}).then(()=>{
  console.log("Migrate done")
})
module.exports = db;
