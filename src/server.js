import dotenv from "dotenv";
import { AppDataSource } from "./config/database.js";
import { app } from "./app.js";

dotenv.config();

try {
  await AppDataSource.initialize();

  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
} catch (error) {
  console.error("Database initialization failed:", error);
}
