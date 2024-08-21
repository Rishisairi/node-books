import { books } from "../entities/book.entity.js";
import { user } from "../entities/user.entity.js";
async function createUser(adduser) {
  return await user.create(adduser).go();
}
async function getuserbyusername(username) {
  return await user.get({ username: username }).go();
}
async function getbooks() {
  return (await books.scan.go()).data;
}
export { createUser, getuserbyusername, getbooks };
