import { books } from "../entities/book.entity.js";

async function getbooksbyname(data) {
  return await books.create(data).go();
}

export { getbooksbyname };
