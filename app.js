require("dotenv").config();
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-middleware");
//middleware
app.use(express.json());

app.use([notFoundMiddleware, errorMiddleware]);

const port = process.env.PORT ?? 3000;
app.listen(port, console.log(`listening on port ${port}`));
