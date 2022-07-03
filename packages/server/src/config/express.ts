import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import v1 from "../api/routes/v1";

const app = express();

// log requests -> dev: console || prod : file
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(bodyParser.json());

//@TODO mount routes
app.use("/v1", v1);

//@TODO error handler

export { app };
