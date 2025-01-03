// app.js
import express from "express";
import bodyParser from 'body-parser';
import path from "path";
import dbConnect from "./config/dbConfig.js";
import { habitRouter } from "./routes/habitRoutes.js";
import { statusRoutes } from "./routes/statusRoutes.js";
const app = express();

// Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.json());
app.use('/habits', habitRouter);
app.use('/status', statusRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  dbConnect()
});
