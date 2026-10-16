import { EntitySchema } from "typeorm";

export const CartSchema = new EntitySchema({
  name: "Cart",
  tableName: "carts",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
  },
  relations: {
    user: {
      target: "User",
      type: "one-to-one",
      inverseSide: "cart",
      joinColumn: true,
      onDelete: "CASCADE",
      nullable: false,
    },
    items: {
      target: "CartItem",
      type: "one-to-many",
      inverseSide: "cart",
    },
  },
});
