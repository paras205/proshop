import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import { notFound, errorHanlder } from "./middleware/error.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHanlder);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
