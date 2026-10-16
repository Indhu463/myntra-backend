import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserSchema } from "../entities/Users.js";
import { AddressSchema } from "../entities/Address.js";
import { CategorySchema } from "../entities/Categories.js";
import { BrandSchema } from "../entities/brands.js";
import { CartItemSchema } from "../entities/cartItems.js";
import { CartSchema } from "../entities/carts.js";
import { ProductImageSchema } from "../entities/productImages.js";
import { ProductSchema } from "../entities/Products.js";
import { ProductVariantSchema } from "../entities/ProductVariants.js";
import { WishListItemSchema } from "../entities/wishListItems.js";
import { WishListSchema } from "../entities/wishlists.js";

dotenv.config();
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [
    UserSchema,
    AddressSchema,
    CategorySchema,
    BrandSchema,
    CartItemSchema,
    CartSchema,
    ProductImageSchema,
    ProductSchema,
    ProductVariantSchema,
    WishListItemSchema,
    WishListSchema,
  ],
  migrations: ["src/migrations/*.js"],
});
