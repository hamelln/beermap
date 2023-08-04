import express from "express";
import passport from "passport";
import path from "path";
import cors from "cors";
import passportConfig from "./passport";
import searchRouter from "./routes/searchRouter";
import BreweryService from "./services/breweryService";

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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use("/search", searchRouter);

(async () => {
  new BreweryService();
})();