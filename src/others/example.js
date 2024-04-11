require("dotenv").config();

const express = require("express");
const app = express()
app.use(express.json())
const port = process.env.PORT ?? 3000;

app.get("/data/:id", async (req, resp) => {
  let res = await fetch(
    `https://server-light-meter-reading.onrender.com/api/meter/${req.params.id}`
  );
  res = await res.json();
  resp.send(res);
});

app.get("/data", async (req, res) => {
  let result = await fetch(
    `https://jsonplaceholder.typicode.com/comments?email=${req.query.email}`
  );
  result = await result.json();
  res.send(result);
});

app.post("/data", async (req, res) => {
  console.log(req.body);
  let result = await fetch(
    `https://server-light-meter-reading.onrender.com/api/meter/`,
    {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  result = await result.json();
  res.send(result);
});

app.listen(port, () => {
  console.log(`start ${port}`);
});
