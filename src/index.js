const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const source = new (require("./source.js"));
app.get("/search", async (req, res) => {

  try {
    if(!req.query.q && !req.query.query) {
      return res.send({ error: "Select a query" });
    }

    const query = (req.query.q || req.query.query);

    const data = await source.search(query).catch(err => res.send({ error: err.message, success: false }));
    if(data) {
      data.success = true;
	  res.send(data);
    } else {
      res.send({ error: "query not found", success: false });
	}
  } catch (err) {
    res.send(err.success = false);
  }

});

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(3000, console.log('API is listining on port: ' + 3000));