import MongoClient from 'mongodb';

const URL = "mongodb+srv://ArnavBansal:boJr9QpreSrEUqoV@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database, collection) {
        this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    async createOne(title) {
        await this.collection.insertOne({
            "title" : title
        });
    }

    async readOne(year) {
        await this.collection.findOne({
            "year" : year
        });
    }

    async updateOne(title, year) {
        await this.collection.updateOne({"year" : year}, {$set: {"title" : title}});
    }

    async deleteOne(year) {
            const result = await this.collection.deleteOne({"year" : year});
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