const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const source = new (require("./source.js"));
app.get("/search", async (req, res) => {

  if(!req.query.q) {
	return res.send({ error: "Select a query" });
  }
  
  const data = await source.search(req.query.q);
  if(data) { 
    res.send(data);
  } else {
    res.send({ error: "query not found" });
  }

});

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(3000, console.log('Teamtrees API is listining on port: ' + 3000));