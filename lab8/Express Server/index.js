import Express from 'express';
import CORS from 'cors';


const App = Express();
const port = 45030;
App.use(CORS());

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get("/people/:person", (req, res) => {
    let result = {name: "not found"};

    names.forEach((value) => {
        if(req.params.person == value) {
            result = {name: value};
        }
    });
    res.json(result);
});

App.put("/people/:person", (req, res) => {
    const person = req.params.person;
    names.push(person);
    res.json({name: person});
});

App.get("/search/:name", (req, res) => {
    let result = {search: ["not found"]};

    names.forEach((value) => {
        if(value.includes(req.params.name)) {
            result = {search: [names]};
        }
    });
    res.json(result);
});

App.listen(port, () => {
    console.log("Server is running!");
});