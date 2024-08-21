import { Entity } from "electrodb"; //ORM
import { client } from "../util/dbconnection.js";
const user = new Entity(
  {
    model: {
      entity: "user",
      version: "1",
      service: "UserService",
    },
    attributes: {
      username: {
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
          facets: ["username"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "user" }
);
export { user };
