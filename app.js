require("dotenv").config();
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-middleware");

const messageRouter = require("./routes/messages");
//middleware
app.use(express.json());
app.use("/api/v1/messages", messageRouter);
app.use([notFoundMiddleware, errorMiddleware]);

const port = process.env.PORT ?? 3000;
app.listen(port, console.log(`listening on port ${port}`));
