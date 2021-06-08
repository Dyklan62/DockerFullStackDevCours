const express = require("express");
const sql = require("./Db/Db.connection");

const app = express();
const port = 8080;

app.use("/", express.static("public"));

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