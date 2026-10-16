import { EntitySchema } from "typeorm";

export const ProductSchema = new EntitySchema({
  name: "Product",
  tableName: "products",
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
    description: {
      type: "text",
    },
  },
  relations: {
    brand: {
      target: "Brand",
      type: "many-to-one",
      inverseSide: "product",
      joinColumn: true,
      nullable: false,
    },
    category: {
      target: "Category",
      type: "many-to-one",
      inverseSide: "product",
      joinColumn: true,
      nullable: false,
    },
    variants: {
      target: "ProductVariant",
      type: "one-to-many",
      inverseSide: "product",
    },
    product_image: {
      target: "ProductImage",
      type: "one-to-many",
      inverseSide: "product",
    },
    wishlist_item: {
      target: "WishListItem",
      type: "one-to-many",
      inverseSide: "product",
    },
  },
});
