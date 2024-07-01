const express = require("express");
const userRoutes = require("./api/users/routes");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./database");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middlewares/passport");
const path = require("path");

const app = express();

connectDB();

app.use(express.json());
// middlewares before routers
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

app.use("/media", express.static(path.join(__dirname, "media")));

app.use(userRoutes);
//  routers

// middlewares after routers

app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
