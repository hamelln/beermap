import express from "express";
import passport from "passport";
import path from "path";
import cors from "cors";
import passportConfig from "./passport";
import { loadAllBreweries } from "./services/breweryService";
import searchRouter from "./routes/searchRouter";

passportConfig();

const app = express();
const port = 3008;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: "http://localhost:3008",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.json({ a: "12" });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use("/search", searchRouter);

(async () => {
  await loadAllBreweries(); // 서버 시작 시 데이터 로드
})();
