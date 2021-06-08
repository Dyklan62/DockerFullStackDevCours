const express = require("express");
const sql = require("./Db/Db.connection");

const app = express();
const port = 8080;

app.use("/", express.static("public"));

app.get("/getList", () => {
  return new Promise((resolve,reject) => { 
    sql.query(`SELECT * FROM User`, (err, res) => {
      if (err) {
        return reject(err);
      }
      res.code='success_findById';
      res.Email1= res[0].Email;
      res.Pseudo1= res[0].Pseudo;
      res.Email2= res[1].Email;
      res.Pseudo2= res[1].Pseudo;
      resolve(res)
    });
  })
  .then((result) => {
    res.status(200).json({
        Email: [result.Email1+result.Email2],
        Pseudo : [result.Pseudo1+result.Pseudo2],
    })
  })
  .catch((err) => res.status(500).send(err.code));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });