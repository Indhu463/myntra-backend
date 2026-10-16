import { EntitySchema } from "typeorm";

export const WishListItemSchema = new EntitySchema({
  name: "WishListItem",
  tableName: "wishlist_items",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
  },
  uniques: [
    {
      name: "UQ_wishlist_product",
      columns: ["wishlist", "product"],
    },
  ],
  relations: {
    product: {
      target: "Product",
      type: "many-to-one",
      inverseSide: "wishlist_item",
      joinColumn: true,
      nullable: false,
      onDelete: "CASCADE",
    },
    wishlist: {
      target: "Wishlist",
      type: "many-to-one",
      inverseSide: "items",
      joinColumn: true,
      nullable: false,
      onDelete: "CASCADE",
    },
  },
});
