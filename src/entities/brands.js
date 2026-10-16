import { EntitySchema } from "typeorm";

export const BrandSchema = new EntitySchema({
  name: "Brand",
  tableName: "brands",
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
      unique: true,
    },
  },
  relations: {
    product: {
      target: "Product",
      type: "one-to-many",
      inverseSide: "brand",
    },
  },
});
