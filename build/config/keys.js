"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DBConnection {
    constructor() {
        this.mongoURI = {
            mongoURI: "mongodb+srv://mernuser:mernpassword123@cluster0-mogpi.mongodb.net/test?retryWrites=true&w=majority"
        };
    }
}
const dbConnection = new DBConnection();
exports.default = dbConnection.mongoURI;
