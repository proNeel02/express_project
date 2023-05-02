import express from "express";
import dotenv from "dotenv";
import router from "./routes/contactRoute.js";
import handleError from "./middlewares/errorHandlers.js";
import connectDB from "./Config/dbConnection.js";
dotenv.config();

connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/contacts', router);

app.use(handleError);
app.listen(port, () => {
console.log(`server is running on port ${port}`);
});