require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/connectDB');
const userRouter = require('./router/user.router');
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
connectDB();


app.use(express.json());
app.use(cors())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api/categories", require("./router/category.router"));
app.use("/api/products", require("./router/product.router"));
app.use('/api/users', userRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});