import { EntitySchema } from "typeorm";

export const ProductVariantSchema = new EntitySchema({
  name: "ProductVariant",
  tableName: "products_variants",
  checks: [
    {
      expression: "`price` > 0",
    },
    {
      expression: "`stock` >= 0",
    },
  ],
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    sku: {
      type: "varchar",
      length: 50,
      nullable: false,
      unique: true,
    },
    size: {
      type: "varchar",
      length: 10,
    },
    color: {
      type: "varchar",
      length: 50,
    },
    price: {
      type: "decimal",
      precision: 10,
      scale: 2,
    },
    stock: {
      type: "int",
    },
  },
  relations: {
    product: {
      target: "Product",
      type: "many-to-one",
      inverseSide: "variants",
      joinColumn: true,
      onDelete: "CASCADE",
      nullable: false,
    },
    cartItems: {
      target: "CartItem",
      type: "one-to-many",
      inverseSide: "product_variant",
    },
  },
});
