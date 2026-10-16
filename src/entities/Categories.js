import { EntitySchema } from "typeorm";

export const CategorySchema = new EntitySchema({
  name: "Category",
  tableName: "categories",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
  },
  relations: {
    parent: {
      target: "Category",
      type: "many-to-one",
      nullable: true,
      joinColumn: true,
      inverseSide: "children",
    },
    children: {
      target: "Category",
      type: "one-to-many",
      inverseSide: "parent",
    },
    product: {
      target: "Product",
      type: "one-to-many",
      inverseSide: "category",
    },
  },
});
