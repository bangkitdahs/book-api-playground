const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [];
let library = [];

// localhost:3000/library
// { "name": "perpustakaan nasional", "location": "jakarta", "cordinate": '12312312' }
app.post("/library", (req, res) => {
  const { name, location } = req.body;
  const newLibrary = { id: library.length + 1, name, location };
  library.push(newLibrary);
  res.status(201).json(newLibrary);
});

app.get("/library", (req, res) => {
  res.json(library);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
