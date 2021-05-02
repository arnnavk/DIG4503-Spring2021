import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());

const db = new Database();
db.connect("sample_mflix", "movies");

App.put("/movies/:title", (req, res) => {
    const title = req.params.title;
    const result = db.createOne(title);
    res.json(result);
});

App.get("/movies/:year", (req, res) => {
    const year = req.params.year;
    const result = db.readOne(year);
    const result2 = {movie: "not found"};
    if(result)
    {
        res.json(result);
    }
    else {
        res.json(result2);
    }
});

App.delete("/movies/:year", (req, res) => {
    const year = req.params.year;
    const result = db.deleteOne(year);
    res.json(result);
});

App.patch("/movies/:year", (req, res) => {
    const year = req.params.year;
    const title = req.body.title;
    const result = db.updateOne(title, year);
    res.json(result);
});

App.listen(port, () => {
    console.log("Server is running!");
});