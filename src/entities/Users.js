import { EntitySchema } from "typeorm";

export const UserSchema = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      length: 100,
      nullable: false,
    },
    email: {
      type: "varchar",
      nullable: false,
      unique: true,
    },
    phone: {
      type: "varchar",
      length: 20,
      nullable: false,
    },
    password_hash: {
      type: "varchar",
      nullable: false,
    },
    isActive: {
      type: "boolean",
      default: true,
    },
  },
  relations: {
    address: {
      target: "Address",
      type: "one-to-many",
      inverseSide: "user",
    },
    wishlist: {
      target: "Wishlist",
      type: "one-to-one",
      inverseSide: "user",
    },
    cart: {
      target: "Cart",
      type: "one-to-one",
      inverseSide: "user",
    },
  },
});
