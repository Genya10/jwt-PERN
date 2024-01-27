const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Fingerprint = require("express-fingerprint");
const AuthRootRouter = require("./routers/AuthRouter.js");
const TokenService = require("./services/Token")
const cookieParser = require("cookie-parser");
const pool = require("./db")

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(
    Fingerprint({
      parameters: [Fingerprint.useragent, Fingerprint.acceptHeaders],
    })
  );
  
  app.use("/auth", AuthRootRouter);
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('Ошибка при тестовом запросе:', err);
    } else {
      console.log('Подключение к базе данных успешно. Результат тестового запроса:', result.rows);
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });