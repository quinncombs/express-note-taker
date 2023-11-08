const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./Develop/db/db.json", "utf8"));
const app = require("express").notes();


module.exports = function(app) {

app.get('/notes', (req, res) => {
    readFromFile('/Develop/db/db.json', 'utf8').then((data) => res.json(JSON.parse(data)));
    });


app.post('/notes', (req, res) => {
    console.log(req.body);


    if (req.body) {
        const newNote = {
            title,
            text
        }
        readAndAppend(newNote, './Develop/db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error')
    }

    res.json(data);    

});



// bonus
// app.delete("/api/notes/:id", function(req, res) {

//     fs.writeFileSync("./db/db.json", JSON.stringify(data));
//     res.json(data);
// }); 
}
module.exports = notes;