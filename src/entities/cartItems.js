import { EntitySchema } from "typeorm";

export const CartItemSchema = new EntitySchema({
  name: "CartItem",
  tableName: "cart_items",
  checks: [
    {
      expression: "`quantity` > 0",
    },
  ],
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    quantity: {
      type: "int",
    },
  },
  uniques: [
    {
      name: "UQ_cart_product_variant",
      columns: ["cart", "product_variant"],
    },
  ],
  relations: {
    product_variant: {
      target: "ProductVariant",
      type: "many-to-one",
      inverseSide: "cartItems",
      joinColumn: true,
      nullable: false,
      onDelete: "CASCADE",
    },
    cart: {
      target: "Cart",
      type: "many-to-one",
      inverseSide: "items",
      joinColumn: true,
      nullable: false,
      onDelete: "CASCADE",
    },
  },
});
