const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 7000;

const todos = require("./routes/todos");
const { createTable } = require("./controller/todoTable");

app.use(express.json());

app.use("/todos", todos);

app.listen(port, () => {
  createTable();
  console.log(`server running on http://localhost:${port}`);
});
