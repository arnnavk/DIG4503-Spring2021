import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());

const db = new Database();
db.connect("lab11", "books");

App.put("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;
    const result = await db.createOne();
    res.json(result);
});

App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    const result = await db.readOne(ISBN);
    const result2 = {book: "not found"};
    if(result)
    {
        res.json(result);
    }
    else {
        res.json(result2);
    }
});

App.post("/books/search", (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const result = await db.readMany(author, title);
    res.json(result);
});

App.delete("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    const result = await db.deleteOne(ISBN);
    res.json(result);
});

App.patch("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;
    const result = await db.updateOne(ISBN, author, title, description);
    res.json(result);
});

App.listen(port, () => {
    console.log("Server is running!");
});