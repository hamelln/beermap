import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = 3008;

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
