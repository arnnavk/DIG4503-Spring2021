import Express from 'express';

const App = Express();
const port = 45030;

App.use(Express.json());

App.put("/people/:create", (req, res) => {
    res.json(
        {
            id: req.params.id,
            body: req.body
        }
    );
});

App.get("/people/:person", (req, res) => {
    res.json(
        {
            id: req.params.id,
            body: req.body
        }
    );
});

App.listen(port);