import express from "express";
import { expressjwt, Request as JWTRequest } from "express-jwt";
import * as Log4js from "log4js";
import mysql, {ConnectionOptions} from 'mysql2/promise';


const logger = Log4js.configure('logger.json').getLogger("default");
export const db = express.Router();
db.use(express.json());

const cDb: ConnectionOptions = {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'mysql',
    database: 'dedede'
};


db.route('/getu').get(async (req, res: express.Response) => {
    try {
        const dbcon = await mysql.createConnection(cDb);
        const [user] = await dbcon.query('select * from user where id = 2');
        res.json(user);
        res.end();
            
    } catch (error) {
        
    }
});


// export class admin;