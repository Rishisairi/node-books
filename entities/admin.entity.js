import { Entity } from "electrodb"; //ORM
import { client } from "../util/dbconnection.js";
const admin = new Entity(
  {
    model: {
      entity: "admin",
      version: "1",
      service: "AdminService",
    },
    attributes: {
      Adminname: {
        type: "string",
        required: true,
      },
      password: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["Adminname"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "admin" }
);
export { admin };
