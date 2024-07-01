const express = require("express");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

connectDB();

app.use(express.json());
// middlewares before routers

//  routers

// middlewares after routers

app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
