import { Request, Response, Router } from "express";

class DBConnection {
  mongoURI: Object;

  constructor() {
    this.mongoURI = {
      mongoURI:
        "mongodb+srv://mernuser:mernpassword123@cluster0-mogpi.mongodb.net/test?retryWrites=true&w=majority"
    };
  }
}

const dbConnection = new DBConnection();

export default dbConnection.mongoURI;
