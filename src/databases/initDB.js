const mongoose = require("mongoose");

const connectionStr =
  "mongodb+srv://hoangnguyen147z:adminPass123@demowds.cqyesq8.mongodb.net/?retryWrites=true&w=majority";

class Database {
    constructor() {
        this.connectDB();
    }

    connectDB = () => {
        mongoose
        .connect(connectionStr)
        .then((_) => console.log("Connect MongoDB successfully"))
        .catch((_) => console.log("Connect Err"));
    }

    static getInstance = () => {
        if(!this.instance) {
            this.instance = new Database();
        }

        return this;
    }
}

const instanceDB = new Database();

module.exports = instanceDB;