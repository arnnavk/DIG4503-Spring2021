import Express from 'express';

const App = Express();
const port = 45030;

const me = {
    name: "Arnav",
    color: "Red"
};

App.get("/", function(req, res) {
    res.send("Hello World");
});

App.get("/person", function(req, res) {
    res.json(me);
});

App.listen(port, function() {
    console.log("Server is running!");
});