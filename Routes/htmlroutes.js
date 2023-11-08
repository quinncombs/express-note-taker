const path = require("path");

module.exports = function(app) {

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});
    
//get request
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
});
}

// module.exports = notes;