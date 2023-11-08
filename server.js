const express = require("express");
const notes = require('./db/db');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/notes', (req, res) => {
    const result = notes;
    res.json(result);
});
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
