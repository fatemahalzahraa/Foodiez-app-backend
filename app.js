const express = require("express");
const userRouter = require("./api/users/routes");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./database");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const categoryRouter = require("./api/categories/routes");
const ingredientRouter = require("./api/ingredients/routes");
const recipeRouter = require("./api/recipies/routes");

const app = express();

connectDB();

app.use(express.json());

// middlewares before routers

app.use(morgan("dev"));
app.use(cors());

app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

app.use("/media", express.static(path.join(__dirname, "media")));

//  routers

// middlewares after routers

app.use("/user", userRouter);
app.use("/categories", categoryRouter);
app.use("/ingredients", ingredientRouter);
app.use("/recipies", recipeRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
