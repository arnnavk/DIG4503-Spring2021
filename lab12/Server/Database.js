import MongoClient from 'mongodb';

const URL = "mongodb+srv://ArnavBansal:boJr9QpreSrEUqoV@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }

    async createOne(ISBN) {
        await this.collection.insertOne({
            "ISBN" : ISBN
        });
    }

    async readOne(ISBN) {
        await this.collection.findOne({
            "ISBN" : ISBN
        });
    }

    async readMany(author, title) {
        await this.collection.findMany({
            "author" : author,
            "title" : title
        });
    }

    async updateOne(ISBN, title, author, description) {
        await this.collection.updateOne({"ISBN" : ISBN}, {$set: {"title" : title, "author" : author, "description" : description}});
    }

    async deleteOne(ISBN) {
            const result = await this.collection.removeOne({"ISBN" : ISBN});
            if(result)
            {
                return{"deleted" : 1};
            }
            else {
                return{"deleted" : 0};
            }
    }

    close() {
        if(this.connection != null)
        {
            this.connection.close();
        }
    }
}