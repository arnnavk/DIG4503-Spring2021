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
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
    }

    async createOne() {
        await this.collection.insertOne({
            "firstName" : "Arnav",
            "lastName" : "Bansal",
            "favoriteColor" : "red"
        });
    }

    async readOne() {
        await this.collection.findOne({
            "firstName" : "Arnav"
        });
    }

    close() {
        if(this.connection != null)
        {
            this.connection.close();
        }
    }
}