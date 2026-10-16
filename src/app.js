import express from "express";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

export const app = express();

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.all("*any", (req, res) => {
  res.send("404 this page is not available");
});
