const express = require("express");

const rootRouter = require("./routes");

const app = express();
app.use(express.json());
app.use("api/vi", rootRouter);

app.post("/user/:id", (req, res) => {
  try {
    const body = req.params;
    console.log(body);
    res.send("reci");
  } catch (error) {
    console.log(error);
  }
});
app.listen(3003);
