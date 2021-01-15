import express from "express";
import {
  createNewUser,
  getAllUsers,
  updateUserCoffee,
  resetAllCoffeeGrams,
} from "./dal";
import bodyParser from "body-parser";
import cors from "cors";

function errHandler(err: any, req: any, res: any, next: any) {
  res.status(500);
  res.send("error", { error: err });
}

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(bodyParser.json());

app.post("/users", async (req, res, next) => {
  console.log("got request");
  const documents = [];
  for (const user of req.body.users) {
    documents.push(
      await createNewUser({ name: user.name, coffeeGrams: user.coffeeGrams })
    );
  }
  res.json(documents);
});

app.put("/users/reset", async (req, res, next) => {
  res.json(await resetAllCoffeeGrams());
});

app.put("/users/:id", async (req, res, next) => {
  const user = await updateUserCoffee(req.params.id, req.body.coffeeGrams);
  res.json(user);
});

app.get("/users", async (req, res, next) => {
  res.json(await getAllUsers());
});



app.use(errHandler);

app.listen(process.env.PORT || 4000);
