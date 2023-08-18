import express from "express";
import "./db.js";
import cors from "cors";
import { pool as db } from "./db.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/registration", async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    await db.query(
      "insert into req_from_users(name, email, phone) values($1, $2, $3)",
      [name, email, phone]
    );

    return res.status(201).json("Данные успешно сохранены!");
  } catch (err) {
    console.log(err);
    return res.status(404).json("Ошибка при сохранений данных!");
  }
});

app.listen(PORT, async () => {
  try {
    console.log("SERVER IS WORKING!");
  } catch (err) {
    console.log(err);
    console.log("SERVER DON`T WORK!");
  }
});
