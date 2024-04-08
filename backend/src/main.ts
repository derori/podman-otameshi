import express from "express";
import cors from "cors";
import "dotenv/config";
import * as jwt from "jsonwebtoken";
import { admin, jwtSecret } from "./routes/admin";
import { db } from "./routes/db";
import * as Log4js from "log4js";
// import * as ttt from '../../types';

class LoginPostBody {
    username: string = "";
    password: string = "";
}

const logger = Log4js.configure('logger.json').getLogger("default");

class HeheheUser {
  id = 1234;
  username = 'hehehe';
  password = 'papapa';

}

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get("/", (req, res) => {
  logger.info({ j: "hello express" });
  res.json({ j: "hello express" });
});

app.get("/token", (req, res) => {
  // 認証してpayloadにユーザーIDやニックネームを埋める（セッションに入れる情報と同じ感じ。）
  const token = jwt.sign({ userId: 1234, nickname: 'hogerapu', admin: true }, jwtSecret, { algorithm: "HS256", expiresIn: "1h" });

  res.json({ token: token });
});

app.route("/auth").post((req, res) => {
  // login処理
  const u: LoginPostBody = req.body;
  const heheheUser = new HeheheUser();
  logger.info(u);
  if (u.username == heheheUser.username && u.password == heheheUser.password) {
    const token = jwt.sign({ id: heheheUser.id, username: heheheUser.username, admin: true }, jwtSecret, { algorithm: "HS256", expiresIn: "1h" });
    res.json({ token: token });
  } else {
    res.statusCode = 401;
    res.json({ message: "Failed" });
  }
  res.end();
});

app.use('/admin', admin);
app.use('/db', db);

app.listen(Number(process.env.PORT), '0.0.0.0', () => console.log(`Server ready at: http://0.0.0.0:${process.env.PORT}`));