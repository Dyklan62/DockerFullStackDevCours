const express = require("express");
const sql = require("./Db/Db.connection");

const app = express();
const port = 8080;

app.use("/", express.static("public"));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get("/getList", (req, res) => {
    sql.query(`SELECT * FROM User`, (err, resSQL) => {
      if (err) {
        res.status(500).send(err.code);
      }
      resSQL.code='success_findUser';
      res.json(resSQL);
  })
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });