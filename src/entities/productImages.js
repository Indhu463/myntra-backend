import { EntitySchema } from "typeorm";

export const ProductImageSchema = new EntitySchema({
  name: "ProductImage",
  tableName: "product_images",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    image_url: {
      type: "text",
    },
  },
  relations: {
    product: {
      target: "Product",
      type: "many-to-one",
      inverseSide: "product_image",
      joinColumn: true,
      nullable: false,
      onDelete: "CASCADE",
    },
  },
});
