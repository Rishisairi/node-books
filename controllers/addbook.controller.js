import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getbooksbyname } from "../services/book.service.js";
export async function addbookCtr(request, response) {
  const data = request.body;
  let body = {
    bookId: data.bookId,
    username: request.user.id,
    // bookname: data.bookname,
    title: data.title,
    image: data.image,
    author: data.author,
    category: data.category,
    status: data.status,
    publicationDate: data.publicationDate,
    description: data.description,
  };
  try {
    await getbooksbyname(body);

    response.send({ msg: "successfully created" });
    return;
  } catch (error) {
    response.status(500).send({ msg: "Failed to create" });
  }
}
