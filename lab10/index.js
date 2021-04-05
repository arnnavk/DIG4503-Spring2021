import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());

App.put("/people/create", (req, res) => {
    Database.createOne();
    res.json(
        {
            id: req.params.id,
            body: req.body
        }
    );
});

App.get("/people/:person", (req, res) => {
    Database.readOne();
    res.json(
        {
            id: req.params.id,
            body: req.body
        }
    );
});

App.listen(port);