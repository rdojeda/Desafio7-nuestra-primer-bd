import { options } from "./configDB.js";
import knex from "knex";

  try {
    const productos = [
      {
        title: "Remera Adidas",
        price: 21400,
        thumbnail:
          "https://res.cloudinary.com/ojedaweb/image/upload/v1647978232/remera-adidas-essentials.jpg",
      },
      {
        title: "Remera Puma",
        price: 24500,
        thumbnail:
          "https://res.cloudinary.com/ojedaweb/image/upload/v1647978232/remera-puma-essentials-heather.jpg",
      },
      {
        title: "Remera Nike",
        price: 25600,
        thumbnail:
          "https://res.cloudinary.com/ojedaweb/image/upload/v1647978232/remera-nike-drifit-ssnl-fa-gfx.jpg",
      },
    ];
    knex(options).schema.dropTableIfExists("articulos");
    knex(options).schema.createTable("articulos", (table) => {
      table.increments("id").primary().unique();
      table.varchar("title", 60).notNullable();
      table.float("price").notNullable();
      table.varchar("thumbnail", 120).notNullable();
    });
  } catch (error) {
    console.log(error)
  }

