import express from "express";
const app = express();
const PORT = 8000;
import sum from "./sum.js";

app.get("/home", async (req, res) => {
  res.json({
    msg: "I am root!",
  });
});

app.get("/getSum/:a/:b", async (req, res) => {
  const { a, b } = req.params;

  res.json({
    ans: sum(parseInt(a), parseInt(b)),
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
