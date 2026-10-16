import { EntitySchema } from "typeorm";

export const WishListSchema = new EntitySchema({
  name: "Wishlist",
  tableName: "wishlists",
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
      inverseSide: "wishlist",
      joinColumn: true,
      onDelete: "CASCADE",
      nullable: false,
    },
    items: {
      target: "WishListItem",
      type: "one-to-many",
      inverseSide: "wishlist",
    },
  },
});
