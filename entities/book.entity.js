import { Entity } from "electrodb"; //ORM
import { client } from "../util/dbconnection.js";
const books = new Entity(
  {
    model: {
      entity: "books",
      version: "1",
      service: "bookService",
    },
    attributes: {
      bookId: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      username: {
        type: "string",
        required: true,
      },
      author: {
        type: "string",
        required: true,
      },
      category: {
        type: "string",
        required: true,
      },
      image: {
        type: "string",
        required: true,
      },
      publicationDate: {
        type: "string",
        required: true,
      },
      status: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["bookId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "books" }
);
export { books };
