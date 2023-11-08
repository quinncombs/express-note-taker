const express = require('express');
const notes = require('./Develop/db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;

const htmlRoutes = require('./Routes/htmlroutes');
const apiRoutes = require('./Routes/routes');

app.get('/api/notes', (req, res) => {
    const result = notes;
    res.json(result);
});
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('*', htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
