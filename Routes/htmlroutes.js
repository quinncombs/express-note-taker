const path = require("path");


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/assets/index.html"));
});
    

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/assets/notes.html"));
});


// module.exports = notes;