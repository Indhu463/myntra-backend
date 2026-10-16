import { EntitySchema } from "typeorm";

export const AddressSchema = new EntitySchema({
  name: "Address",
  tableName: "address",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    address: {
      type: "varchar",
      length: 200,
      nullable: false,
    },
    city: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    state: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    country: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    pincode: {
      type: "varchar",
      length: 10,
      nullable: false,
    },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      inverseSide: "address",
      joinColumn: true,
      onDelete: "CASCADE",
      nullable: false,
    },
  },
});
