import express, { Application } from "express";
import cors from "cors";

import db from "../db/connection";


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        // initial methods
        this.dbConnection();
        this.middlewares();
    }

    async dbConnection() {
        try {

            await db.authenticate();
            console.log('Database Online');
        } catch (error) {
            throw new Error(String(error));
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto: " + this.port);
        })
    }

}

export default Server;