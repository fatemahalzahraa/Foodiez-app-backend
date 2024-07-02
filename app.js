const express = require("express");
const userRouter = require("./api/users/routes");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./database");
const passport = require("passport");
const { localStrategy, jwtstrategy } = require("./middlewares/passport");
const path = require("path");
const categoryRouter = require("./api/categories/routes");
const ingredientRouter = require("./api/ingredients/routes");
const recipyRouter = require("./api/recipies/routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

connectDB();

app.use(express.json());
// middlewares before routers
app.use(morgan("dev"));
app.use(cors());

app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtstrategy);

app.use("/media", express.static(path.join(__dirname, "media")));

app.use("user", userRouter);
app.use("/categories", categoryRouter);
app.use("/ingredients", ingredientRouter);
app.use("/recipies", recipyRouter);

// middlewares after routers

app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
